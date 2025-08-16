# LangGraph One-Node

한 개의 노드(`step`)로 **라포 질문 생성 → 응답 분석 → 커버리지 확인 → 결과 출력**까지
각 요청마다 한 번의 LLM 호출로 처리합니다.

## Quickstart (uv)
```bash
uv venv .venv && . .venv/bin/activate
uv sync
cp config/.env.example config/.env
# OpenAI API 키/모델명 설정
uv run uvicorn apps.api.main:app --host 0.0.0.0 --port 8000 --reload
```

### API
`POST /chat`
```json
{ "session_id": "demo", "message": "안녕하세요" }
```
응답:
```json
{ "reply": "어시스턴트 한 문장 또는 최종 결과", "state": { ... } }
```

### 설계 요점
- 그래프 노드 1개: `step`
- 매 턴 LLM 1회 호출로 **signals/coverage 업데이트 + next 메시지** 생성
- 종료 조건: `coverage >= goal` 또는 사용자 "진단 종료" 발화 또는 턴 예산 초과
- 실패 시 폴백: JSON 파싱 실패 → 증분 0, 라포 질문 1문장
