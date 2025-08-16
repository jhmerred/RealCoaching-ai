.PHONY: dev
dev:
	uv run uvicorn apps.api.main:app --host 0.0.0.0 --port 8000 --reload
