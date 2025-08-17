from typing import Literal, List, Dict
from pydantic import BaseModel, Field

class Turn(BaseModel):
    role: Literal["system", "user", "assistant"]
    content: str

class Signals(BaseModel):
    safety: int = Field(0, ge=0, le=100)
    mood: int = Field(0, ge=0, le=100)
    culture: int = Field(0, ge=0, le=100)
    ei: int = Field(0, ge=0, le=100)
    leader_ei: int = Field(0, ge=0, le=100)

class Coverage(BaseModel):
    safety: int = Field(0, ge=0, le=100)
    mood: int = Field(0, ge=0, le=100)
    culture: int = Field(0, ge=0, le=100)
    ei: int = Field(0, ge=0, le=100)
    leader_ei: int = Field(0, ge=0, le=100)

class CoverageGoal(BaseModel):
    safety: int = Field(80, ge=0, le=100)
    mood: int = Field(80, ge=0, le=100)
    culture: int = Field(80, ge=0, le=100)
    ei: int = Field(80, ge=0, le=100)
    leader_ei: int = Field(80, ge=0, le=100)

class State(BaseModel):
    messages: List[Turn] = Field(default_factory=list)
    signals: Signals = Signals()  # 이번 턴 측정값(0..100 정수)
    coverage: Coverage = Coverage()  # 역량별 누적 커버리지
    coverage_goal: CoverageGoal = CoverageGoal()  # 역량별 목표 커버리지
    finished: bool = False
    turn_budget: int = 20
