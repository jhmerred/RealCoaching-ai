def clamp01(x: float) -> float:
    return 0.0 if x < 0.0 else 1.0 if x > 1.0 else x

from .state import Signals

def add_signals(a: Signals, delta: dict) -> Signals:
    return Signals(
        safety=clamp01(a.safety + float(delta.get("safety", 0.0))),
        mood=clamp01(a.mood + float(delta.get("mood", 0.0))),
        culture=clamp01(a.culture + float(delta.get("culture", 0.0))),
        ei=clamp01(a.ei + float(delta.get("ei", 0.0))),
        leader_ei=clamp01(a.leader_ei + float(delta.get("leader_ei", 0.0))),
    )

def add_coverage(a: Signals, delta: dict) -> Signals:
    def cap(v):
        try: v=float(v)
        except: v=0.0
        return min(max(v, 0.0), 0.3)  # 턴당 상한 0.3
    return Signals(
        safety=clamp01(a.safety + cap(delta.get("safety", 0.0))),
        mood=clamp01(a.mood + cap(delta.get("mood", 0.0))),
        culture=clamp01(a.culture + cap(delta.get("culture", 0.0))),
        ei=clamp01(a.ei + cap(delta.get("ei", 0.0))),
        leader_ei=clamp01(a.leader_ei + cap(delta.get("leader_ei", 0.0))),
    )
