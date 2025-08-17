# LangGraph One-Node (LangChain + .env auto-load)

- LLM: `from langchain.chat_models import init_chat_model`
- .env: 앱 기동 시 코드에서 자동 로드
- State: `signals`는 5개 역량 **정수 0~100**, `coverage=int(sum(signals))`, `coverage_goal=int`(기본 400), `uncertainty` 제거

## Quickstart
```bash
uv venv .venv && . .venv/bin/activate
uv sync
cp config/.env.example config/.env
uv run uvicorn apps.api.main:app --host 0.0.0.0 --port 8000 --reload
# 또는 --env-file config/.env 병행 가능
```

### /chat
Request:
```json
{ "session_id": "demo", "message": "안녕하세요" }
```
Response:
```json
{ "reply": "...", "state": { "signals": {...}, "coverage": 380, "coverage_goal": 400, "finished": false, ... } }
```
