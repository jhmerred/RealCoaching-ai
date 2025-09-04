from typing import Literal, List, Dict
from pydantic import BaseModel, Field

class Turn(BaseModel):
    role: Literal["system", "user", "assistant"]
    content: str

class Signals(BaseModel):
    safety: int = Field(0, ge=0, le=5)
    mood: int = Field(0, ge=0, le=5)
    culture: int = Field(0, ge=0, le=5)
    ei: int = Field(0, ge=0, le=5)
    leader_ei: int = Field(0, ge=0, le=5)

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

# 점수 관련 클래스들을 제거했습니다.
# 점수 계산 결과는 바로 PDF 서버로 전송되며 State에 저장되지 않습니다.

class TokenUsage(BaseModel):
    # 현재 응답 토큰 사용량
    current_input_tokens: int = 0  # 현재 입력 토큰 수
    current_output_tokens: int = 0  # 현재 출력 토큰 수
    current_cost_krw: float = 0.0  # 현재 응답 비용 (KRW)
    
    # 세션 전체 누적 토큰 사용량
    total_input_tokens: int = 0  # 총 입력 토큰 수
    total_output_tokens: int = 0  # 총 출력 토큰 수  
    total_cost_krw: float = 0.0  # 총 비용 (KRW)

class State(BaseModel):
    messages: List[Turn] = Field(default_factory=list)
    signals: Signals = Signals()  # 이번 턴 측정값(0..5 정수)
    coverage: Coverage = Coverage()  # 역량별 누적 커버리지
    coverage_goal: CoverageGoal = CoverageGoal()  # 역량별 목표 커버리지
    token_usage: TokenUsage = TokenUsage()  # 토큰 사용량 및 비용
    finished: bool = False
    turn_budget: int = 50
    session_id: str = ""  # 세션 ID 저장
    pdf_result: dict = Field(default_factory=dict)  # PDF 서버 응답 저장 (선택적)
