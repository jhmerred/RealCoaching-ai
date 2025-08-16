import json, re
from .graph_utils import clamp01, add_signals, add_coverage
from .state import State, Turn
from .prompts_loader import render
from adapters_interface import LLM

SENSITIVE_HINTS = ("그만", "개인정보", "불편", "답하기 어렵", "민감")

def parse_json_maybe(s: str) -> dict:
    s = s.strip()
    if s.startswith("```"):
        s = re.sub(r"^```[a-z]*\n|\n```$", "", s, flags=re.IGNORECASE|re.MULTILINE)
    try:
        return json.loads(s)
    except Exception:
        return {}

def step(state: State, llm: LLM) -> State:
    # 최근 user 발화
    last_user = ""
    for m in reversed(state.messages):
        if m.role == "user":
            last_user = m.content
            break

    is_new = len([m for m in state.messages if m.role == "user"]) == 1 and len(state.messages) <= 2
    user_wants_end = "진단 종료" in last_user or "끝내" in last_user
    is_sensitive = any(h in last_user for h in SENSITIVE_HINTS)
    cov, goal = state.coverage.model_dump(), state.coverage_goal.model_dump()
    coverage_done = all(cov[k] >= goal[k] for k in cov)

    prompt = render("step.txt",
        is_new_session=str(is_new).lower(),
        last_user=last_user.replace('"','\"'),
        last_user_summary=state.last_user_summary.replace('"','\"')[:800],
        signals=state.signals.model_dump(),
        coverage=state.coverage.model_dump(),
        coverage_goal=state.coverage_goal.model_dump(),
        uncertainty=state.uncertainty.model_dump(),
        turn_budget=state.turn_budget,
    )

    raw = llm.text(prompt)
    parsed = parse_json_maybe(raw)

    assistant_type = parsed.get("assistant_output_type") or ("final_result" if (user_wants_end or coverage_done or state.turn_budget<=0) else ("switch_topic" if is_sensitive else "follow_up" if not is_new else "rapport_question"))
    assistant_text = (parsed.get("assistant_output") or
                      ("지금까지의 이야기를 종합해 간단히 정리해 드릴까요?" if assistant_type!="final_result" else "진단을 마무리할게요."))

    sd = parsed.get("signals_delta", {}) or {}
    cd = parsed.get("coverage_delta", {}) or {}
    uu = parsed.get("uncertainty_update", {}) or {}

    # 요약 갱신
    if last_user:
        state.last_user_summary = (state.last_user_summary + " " + last_user).strip()[:800]

    # 누적
    state.signals = add_signals(state.signals, sd)
    state.coverage = add_coverage(state.coverage, cd)

    for k,v in uu.items():
        if hasattr(state.uncertainty, k):
            try:
                setattr(state.uncertainty, k, clamp01(float(v)))
            except Exception:
                pass

    state.turn_budget = max(0, state.turn_budget - 1)
    state.messages.append(Turn(role="assistant", content=assistant_text))

    if assistant_type == "final_result" or user_wants_end or coverage_done or state.turn_budget <= 0:
        state.finished = True

    return state
