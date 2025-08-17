from typing import Literal, List, Dict
from pydantic import BaseModel, Field

class Turn(BaseModel):
    role: Literal["system", "user", "assistant"]
    content: str

class Signals(BaseModel):
    safety: int = Field(0, ge=0, le=10)
    mood: int = Field(0, ge=0, le=10)
    culture: int = Field(0, ge=0, le=10)
    ei: int = Field(0, ge=0, le=10)
    leader_ei: int = Field(0, ge=0, le=10)

class Coverage(BaseModel):
    safety: int = Field(0, ge=0, le=100)
    mood: int = Field(0, ge=0, le=100)
    culture: int = Field(0, ge=0, le=100)
    ei: int = Field(0, ge=0, le=100)
    leader_ei: int = Field(0, ge=0, le=100)

class CoverageGoal(BaseModel):
    safety: int = Field(5, ge=0, le=100)
    mood: int = Field(5, ge=0, le=100)
    culture: int = Field(5, ge=0, le=100)
    ei: int = Field(5, ge=0, le=100)
    leader_ei: int = Field(5, ge=0, le=100)

class ScoreDetail(BaseModel):
    # 심리적 안전감 세부 점수 (각 0-5점)
    safety_mistake_freedom: float = Field(0.0, ge=0.0, le=5.0)  # 실수 인정 자유도
    safety_opinion_expression: float = Field(0.0, ge=0.0, le=5.0)  # 의견 표현 자유도
    safety_respect: float = Field(0.0, ge=0.0, le=5.0)  # 존중받는 정도
    safety_conflict_resolution: float = Field(0.0, ge=0.0, le=5.0)  # 갈등 해결 능력
    
    # 감정 상태 세부 점수 (각 0-5점)
    mood_positive_frequency: float = Field(0.0, ge=0.0, le=5.0)  # 긍정 감정 빈도
    mood_negative_intensity: float = Field(0.0, ge=0.0, le=5.0)  # 부정 감정 강도
    mood_stress_level: float = Field(0.0, ge=0.0, le=5.0)  # 스트레스 수준
    mood_emotion_variance: float = Field(0.0, ge=0.0, le=5.0)  # 감정 변화도
    mood_resilience: float = Field(0.0, ge=0.0, le=5.0)  # 회복탄력성
    
    # 조직 문화 세부 점수 (각 0-5점)
    culture_belonging: float = Field(0.0, ge=0.0, le=5.0)  # 소속감
    culture_collaboration: float = Field(0.0, ge=0.0, le=5.0)  # 협업 만족도
    culture_emotion_expression: float = Field(0.0, ge=0.0, le=5.0)  # 감정 표현 자유도
    culture_value_alignment: float = Field(0.0, ge=0.0, le=5.0)  # 조직 가치 일치도
    
    # 감성지능 세부 점수 (각 0-5점)
    ei_self_awareness: float = Field(0.0, ge=0.0, le=5.0)  # 자기인식
    ei_self_regulation: float = Field(0.0, ge=0.0, le=5.0)  # 자기조절
    ei_empathy: float = Field(0.0, ge=0.0, le=5.0)  # 공감능력
    ei_motivation: float = Field(0.0, ge=0.0, le=5.0)  # 동기부여
    
    # 리더 감성지능 세부 점수 (각 0-5점)
    leader_ei_team_emotion: float = Field(0.0, ge=0.0, le=5.0)  # 팀원 감정 인식
    leader_ei_conflict_mgmt: float = Field(0.0, ge=0.0, le=5.0)  # 갈등 관리 능력
    leader_ei_motivation: float = Field(0.0, ge=0.0, le=5.0)  # 동기부여 능력

class ScoreSummary(BaseModel):
    safety_total: float = Field(0.0, ge=0.0, le=20.0)  # 심리적 안전감 총점 (20점 만점)
    mood_total: float = Field(0.0, ge=0.0, le=25.0)  # 감정 상태 총점 (25점 만점)
    culture_total: float = Field(0.0, ge=0.0, le=20.0)  # 조직 문화 총점 (20점 만점)
    ei_total: float = Field(0.0, ge=0.0, le=20.0)  # 감성지능 총점 (20점 만점)
    leader_ei_total: float = Field(0.0, ge=0.0, le=15.0)  # 리더 감성지능 총점 (15점 만점)
    overall: float = Field(0.0, ge=0.0, le=100.0)  # 전체 총점 (100점 만점)
    grade: str = "F"  # 등급 (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: 0-59)

class State(BaseModel):
    messages: List[Turn] = Field(default_factory=list)
    signals: Signals = Signals()  # 이번 턴 측정값(0..10 정수)
    coverage: Coverage = Coverage()  # 역량별 누적 커버리지
    coverage_goal: CoverageGoal = CoverageGoal()  # 역량별 목표 커버리지
    score_detail: ScoreDetail = ScoreDetail()  # 세부 항목별 점수
    score_summary: ScoreSummary = ScoreSummary()  # 파트별 총점 및 전체 점수
    finished: bool = False
    turn_budget: int = 3
