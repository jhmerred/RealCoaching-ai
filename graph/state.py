from typing import Literal, List
from pydantic import BaseModel, Field

Competency = Literal["safety","mood","culture","ei","leader_ei"]

class Turn(BaseModel):
    role: Literal["user","assistant"]
    content: str

class Signals(BaseModel):
    safety: float = 0.0
    mood: float = 0.0
    culture: float = 0.0
    ei: float = 0.0
    leader_ei: float = 0.0

class State(BaseModel):
    messages: List[Turn] = Field(default_factory=list)
    signals: Signals = Signals()
    coverage: Signals = Signals()
    coverage_goal: Signals = Signals(safety=0.8, mood=0.8, culture=0.8, ei=0.8, leader_ei=0.8)
    uncertainty: Signals = Signals(safety=1.0, mood=1.0, culture=1.0, ei=1.0, leader_ei=1.0)
    last_user_summary: str = ""
    finished: bool = False
    turn_budget: int = 20  # 옵션
