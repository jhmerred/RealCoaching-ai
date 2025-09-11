import json, re
import os
from datetime import datetime
from ..state import State, Turn, Signals, Coverage, TokenUsage
from ..prompts.prompts_loader import render
from ..utils.cost_calculator import calculate_cost
from ..utils.pdf_generator import send_to_pdf_server, prepare_result_for_pdf
from adapters_interface import LLM

def clamp_int(x: int, lo: int, hi: int) -> int:
    if x < lo: return lo
    if x > hi: return hi
    return x

def parse_json_maybe(s: str) -> dict:
    s = s.strip()
    if s.startswith("```"):
        s = re.sub(r"^```[a-z]*\n|\n```$", "", s, flags=re.IGNORECASE|re.MULTILINE)
    try:
        return json.loads(s)
    except Exception:
        return {}

def check_user_info_completeness(messages, llm: LLM):
    """
    LLM을 사용하여 필수 개인정보가 모두 수집되었는지 확인합니다.
    """
    conversation = "\n".join([
        f"{msg.role}: {msg.content}" 
        for msg in messages
    ])
    
    check_prompt = """
다음 대화 내용에서 아래 필수 정보가 모두 수집되었는지 확인해주세요.

필수 정보:
1. 이름
2. 나이
3. 회사명
4. 부서 또는 팀
5. 직위
6. 업무 또는 역할

모든 정보가 수집되었으면 "종료", 하나라도 빠진 것이 있으면 "계속"로만 답해주세요.

대화 내용:
""" + conversation
    
    try:
        check_messages = [
            Turn(role="system", content="당신은 대화 내용에서 필수 정보 수집 여부를 확인하는 전문가입니다."),
            Turn(role="user", content=check_prompt)
        ]
        
        result = llm.text(check_messages).strip().lower()
        return "종료" in result
    except:
        return False

def step(state: State, llm: LLM) -> State:
    # 정적 시스템 프롬프트 로드
    static_prompt = render("system_static.txt")
    
    # 동적 시스템 프롬프트 생성
    dynamic_prompt = render("system_dynamic.txt",
        turn_budget=state.turn_budget,
        coverage_safety=state.coverage.safety * 100 // state.coverage_goal.safety,
        coverage_mood=state.coverage.mood * 100 // state.coverage_goal.mood,
        coverage_culture=state.coverage.culture * 100 // state.coverage_goal.culture,
        coverage_ei=state.coverage.ei * 100 // state.coverage_goal.ei,
        coverage_leader_ei=state.coverage.leader_ei * 100 // state.coverage_goal.leader_ei,
        current_phase=state.current_phase,
    )

    print("--------------------------------------------------------------------------------------------------------")
    print(f"Dynamic System: {dynamic_prompt}")
    print(f"Messages count: {len(state.messages)}")
    
    # 정적/동적 시스템 프롬프트를 임시로 추가하여 전달
    messages_with_prompts = [
        Turn(role="system", content=static_prompt)
    ] + state.messages + [
        Turn(role="system", content=dynamic_prompt)
    ]
    raw = llm.text(messages_with_prompts)
    
    # 토큰 사용량 추적
    if hasattr(llm, 'get_last_token_usage'):
        token_data = llm.get_last_token_usage()
        if token_data:
            input_tokens = token_data.get('prompt_tokens', 0)
            output_tokens = token_data.get('completion_tokens', 0)
            
            # 현재 응답 토큰 사용량
            state.token_usage.current_input_tokens = input_tokens
            state.token_usage.current_output_tokens = output_tokens
            
            # 비용 계산 (KRW로 반환됨)
            model_name = os.getenv("MODEL_NAME", "gpt-5-mini")
            cost_krw = calculate_cost(model_name, input_tokens, output_tokens)
            state.token_usage.current_cost_krw = cost_krw
            
            # 누적 토큰 사용량
            state.token_usage.total_input_tokens += input_tokens
            state.token_usage.total_output_tokens += output_tokens
            state.token_usage.total_cost_krw += cost_krw
            
            print(f"현재 토큰: 입력={input_tokens}, 출력={output_tokens}, 비용=₩{cost_krw:.2f}")
            print(f"누적 토큰: 입력={state.token_usage.total_input_tokens}, "
                  f"출력={state.token_usage.total_output_tokens}, "
                  f"총 비용=₩{state.token_usage.total_cost_krw:.2f}")
    
    print("--------------------------------------------------------------------------------------------------------")
    print(raw)
    parsed = parse_json_maybe(raw)

    # signals 정수화
    ps = parsed.get("signals", {}) or {}
    sig = Signals(
        safety=clamp_int(int(ps.get("safety", 0)), 0, 5),
        mood=clamp_int(int(ps.get("mood", 0)), 0, 5),
        culture=clamp_int(int(ps.get("culture", 0)), 0, 5),
        ei=clamp_int(int(ps.get("ei", 0)), 0, 5),
        leader_ei=clamp_int(int(ps.get("leader_ei", 0)), 0, 5),
    )

    # 역량별 커버리지 업데이트 (누적)
    new_coverage = Coverage(
        safety=min(100, state.coverage.safety + sig.safety),
        mood=min(100, state.coverage.mood + sig.mood),
        culture=min(100, state.coverage.culture + sig.culture),
        ei=min(100, state.coverage.ei + sig.ei),
        leader_ei=min(100, state.coverage.leader_ei + sig.leader_ei)
    )

    assistant_type = parsed.get("assistant_output_type") or "questioning"
    assistant_text = parsed.get("assistant_output") or ""

    # 상태 업데이트
    state.signals = sig
    state.coverage = new_coverage
    state.turn_budget = max(0, state.turn_budget - 1)
    state.messages.append(Turn(role="assistant", content=assistant_text))
    
    # 개인정보 수집 단계에서만 체크
    if state.current_phase == "info_collection":
        # 대화가 충분히 진행되었을 때만 체크 (최소 3턴 이후)
        if len(state.messages) >= 6:  # 양쪽 대화 3번 이상
            if check_user_info_completeness(state.messages, llm):
                state.current_phase = "diagnosis"
                print("\n=== 개인정보 수집 완료, 진단 단계로 전환 ===")

    if assistant_type == "finished":
        state.finished = True
        # 점수 계산
        state = calculate_final_score(state, llm)

    return state


def extract_user_info_with_llm(messages, llm: LLM):
    """
    LLM을 사용하여 대화 내용에서 개인정보를 추출합니다.
    """
    conversation = "\n".join([
        f"{msg.role}: {msg.content}" 
        for msg in messages
    ])
    
    extraction_prompt = """
다음 대화 내용에서 사용자의 개인정보를 추출해주세요.
반드시 JSON 형식으로만 응답하고, 찾을 수 없는 정보는 빈 문자열로 남겨두세요.

{
  "name": "이름",
  "age": "나이",
  "company": "회사명",
  "department": "부서명",
  "team": "팀명",
  "position": "직위",
  "duty": "업무"
}

대화 내용:
""" + conversation
    
    try:
        extraction_messages = [
            Turn(role="system", content="당신은 대화 내용에서 개인정보를 추출하는 전문가입니다. JSON 형식으로만 응답해주세요."),
            Turn(role="user", content=extraction_prompt)
        ]
        
        raw_response = llm.text(extraction_messages)
        # JSON 파싱
        clean_response = raw_response.strip()
        if clean_response.startswith("```"):
            clean_response = re.sub(r"^```[a-z]*\n|\n```$", "", clean_response, flags=re.IGNORECASE|re.MULTILINE)
        
        user_info = json.loads(clean_response)
        return user_info
    except Exception as e:
        print(f"개인정보 추출 실패: {e}")
        return {
            "name": "",
            "age": "",
            "company": "",
            "department": "",
            "team": "",
            "position": "",
            "duty": ""
        }

def calculate_final_score(state: State, llm: LLM) -> State:
    """
    대화가 종료되었을 때 점수를 계산하고 PDF 서버로 전송합니다.
    """
    # 점수 계산 프롬프트 로드
    score_prompt = render("score_calculation.txt")
    
    # 대화 내역 정리
    conversation = "\n".join([
        f"{msg.role}: {msg.content}" 
        for msg in state.messages
    ])
    
    # LLM에 점수 계산 요청
    score_messages = [
        Turn(role="system", content=score_prompt),
        Turn(role="user", content=f"다음 대화 내용을 분석하여 점수를 계산해주세요:\n\n{conversation}")
    ]
    
    raw_score = llm.text(score_messages)
    
    print("\n=== 점수 계산 중 ===")
    print(raw_score[:500] + "..." if len(raw_score) > 500 else raw_score)  # 로그 축약
    
    try:
        # JSON 파싱 (프롬프트에서 직접 반환된 형식 사용)
        result = json.loads(raw_score)
        
        # LLM을 통해 대화 내용에서 개인정보 추출
        extracted_info = extract_user_info_with_llm(state.messages, llm)
        
        # 사용자 정보 (추출된 정보 우선 사용, 없으면 환경변수)
        user_info = {
            "companyName": extracted_info.get("company") or os.getenv("COMPANY_NAME", "RealCoaching"),
            "position": extracted_info.get("position") or os.getenv("USER_POSITION", "팀장"),
            "name": extracted_info.get("name") or os.getenv("USER_NAME", "테스터"),
            "department": f"{extracted_info.get('department', '')} {extracted_info.get('team', '')}".strip() or os.getenv("USER_DEPARTMENT", "개발팀"),
            "testDate": datetime.now().strftime("%Y-%m-%d"),
            "reportId": f"RC-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        }
        
        print(f"\n=== 추출된 개인정보 ===")
        print(f"이름: {user_info['name']}")
        print(f"회사: {user_info['companyName']}")
        print(f"부서: {user_info['department']}")
        print(f"직위: {user_info['position']}")
        
        # PDF 생성을 위한 데이터 준비
        pdf_data = prepare_result_for_pdf(state.messages, result, user_info)
        
        # PDF 서버로 전송 (세션 ID 포함)
        session_id = state.session_id if hasattr(state, 'session_id') and state.session_id else None
        pdf_response = send_to_pdf_server(pdf_data, session_id)
        
        # State에 PDF 결과 저장 (선택적)
        state.pdf_result = pdf_response
        
        if pdf_response.get("status") == "error":
            print(f"PDF 생성 실패: {pdf_response.get('message')}")
        else:
            print(f"\n=== PDF 생성 완료 ===")
            if pdf_response.get("pdf_path"):
                print(f"PDF 파일: {pdf_response['pdf_path']}")
        
        # 결과 요약 출력
        print(f"\n=== 진단 결과 요약 ===")
        if "data" in result and "page11" in result["data"]:
            score_data = result["data"]["page11"]["scoreData"]
            print(f"감성지능: {score_data.get('감성지능', 0):.1f}/5.0")
            print(f"감정조절: {score_data.get('감정조절', 0):.1f}/5.0")
            print(f"긍정정서: {score_data.get('긍정정서', 0):.1f}/5.0")
            print(f"리더십감성역량: {score_data.get('리더십감성역량', 0):.1f}/5.0")
            print(f"감정활용: {score_data.get('감정활용', 0):.1f}/5.0")
        
    except json.JSONDecodeError as e:
        print(f"점수 계산 중 JSON 파싱 오류: {e}")
    except Exception as e:
        print(f"점수 계산 중 오류 발생: {e}")
    
    return state
