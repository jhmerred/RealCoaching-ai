import json, re
from ..state import State, Turn, Signals, Coverage
from ..prompts.prompts_loader import render
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
        coverage_goal_safety=state.coverage_goal.safety,
        coverage_goal_mood=state.coverage_goal.mood,
        coverage_goal_culture=state.coverage_goal.culture,
        coverage_goal_ei=state.coverage_goal.ei,
        coverage_goal_leader_ei=state.coverage_goal.leader_ei,
        coverage_safety=state.coverage.safety,
        coverage_mood=state.coverage.mood,
        coverage_culture=state.coverage.culture,
        coverage_ei=state.coverage.ei,
        coverage_leader_ei=state.coverage.leader_ei,
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
    
    print("--------------------------------------------------------------------------------------------------------")
    print(raw)
    parsed = parse_json_maybe(raw)

    # signals 정수화
    ps = parsed.get("signals", {}) or {}
    sig = Signals(
        safety=clamp_int(int(ps.get("safety", 0)), 0, 100),
        mood=clamp_int(int(ps.get("mood", 0)), 0, 100),
        culture=clamp_int(int(ps.get("culture", 0)), 0, 100),
        ei=clamp_int(int(ps.get("ei", 0)), 0, 100),
        leader_ei=clamp_int(int(ps.get("leader_ei", 0)), 0, 100),
    )

    # 역량별 커버리지 업데이트 (누적)
    new_coverage = Coverage(
        safety=min(100, state.coverage.safety + sig.safety),
        mood=min(100, state.coverage.mood + sig.mood),
        culture=min(100, state.coverage.culture + sig.culture),
        ei=min(100, state.coverage.ei + sig.ei),
        leader_ei=min(100, state.coverage.leader_ei + sig.leader_ei)
    )
    
    # 모든 역량이 목표치에 도달했는지 확인
    goals_met = (
        new_coverage.safety >= state.coverage_goal.safety and
        new_coverage.mood >= state.coverage_goal.mood and
        new_coverage.culture >= state.coverage_goal.culture and
        new_coverage.ei >= state.coverage_goal.ei and
        new_coverage.leader_ei >= state.coverage_goal.leader_ei
    )

    assistant_type = parsed.get("assistant_output_type") or "questioning"
    if goals_met or state.turn_budget <= 0:
        assistant_type = "finished"

    assistant_text = parsed.get("assistant_output") or ""

    # 상태 업데이트
    state.signals = sig
    state.coverage = new_coverage
    state.turn_budget = max(0, state.turn_budget - 1)
    state.messages.append(Turn(role="assistant", content=assistant_text))

    if assistant_type == "finished":
        state.finished = True

    return state
