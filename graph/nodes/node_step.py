import json, re
import os
from ..state import State, Turn, Signals, Coverage, ScoreDetail, ScoreSummary, TokenUsage
from ..prompts.prompts_loader import render
from ..utils.cost_calculator import calculate_cost
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

    if assistant_type == "finished":
        state.finished = True
        # 점수 계산
        state = calculate_final_score(state, llm)

    return state


def calculate_final_score(state: State, llm: LLM) -> State:
    """
    대화가 종료되었을 때 점수를 계산합니다.
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
    print(raw_score)
    
    try:
        # JSON 파싱
        result = json.loads(raw_score)
        
        # ScoreDetail 업데이트
        score_detail_data = result.get("score_detail", {})
        score_detail = ScoreDetail(**score_detail_data)
        
        # 각 카테고리별 총점 계산
        safety_total = (
            score_detail.safety_mistake_freedom +
            score_detail.safety_opinion_expression +
            score_detail.safety_respect +
            score_detail.safety_conflict_resolution
        )
        
        mood_total = (
            score_detail.mood_positive_frequency +
            score_detail.mood_negative_intensity +
            score_detail.mood_stress_level +
            score_detail.mood_emotion_variance +
            score_detail.mood_resilience
        )
        
        culture_total = (
            score_detail.culture_belonging +
            score_detail.culture_collaboration +
            score_detail.culture_emotion_expression +
            score_detail.culture_value_alignment
        )
        
        ei_total = (
            score_detail.ei_self_awareness +
            score_detail.ei_self_regulation +
            score_detail.ei_empathy +
            score_detail.ei_motivation
        )
        
        leader_ei_total = (
            score_detail.leader_ei_team_emotion +
            score_detail.leader_ei_conflict_mgmt +
            score_detail.leader_ei_motivation
        )
        
        overall = safety_total + mood_total + culture_total + ei_total + leader_ei_total
        
        # 등급 계산
        if overall >= 90:
            grade = "A"
        elif overall >= 80:
            grade = "B"
        elif overall >= 70:
            grade = "C"
        elif overall >= 60:
            grade = "D"
        else:
            grade = "F"
        
        score_summary = ScoreSummary(
            safety_total=safety_total,
            mood_total=mood_total,
            culture_total=culture_total,
            ei_total=ei_total,
            leader_ei_total=leader_ei_total,
            overall=overall,
            grade=grade
        )
        
        # State 업데이트
        state.score_detail = score_detail
        state.score_summary = score_summary
        
        print(f"\n=== 진단 점수 계산 완료 ===")
        print(f"총점: {overall:.1f}/100")
        print(f"등급: {grade}")
        print(f"- 심리적 안전감: {safety_total:.1f}/20")
        print(f"- 감정 상태: {mood_total:.1f}/25")
        print(f"- 조직 문화: {culture_total:.1f}/20")
        print(f"- 감성지능: {ei_total:.1f}/20")
        print(f"- 리더 감성지능: {leader_ei_total:.1f}/15")
        
    except json.JSONDecodeError as e:
        print(f"점수 계산 중 JSON 파싱 오류: {e}")
    except Exception as e:
        print(f"점수 계산 중 오류 발생: {e}")
    
    return state
