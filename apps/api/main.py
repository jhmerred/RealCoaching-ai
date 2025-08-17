from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from .routers import chat

app = FastAPI(title="One-Node LangGraph API")

# CORS 설정 (브라우저에서 API 호출 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HTML 파일 경로
HTML_FILE = Path(__file__).parent.parent.parent / "index.html"

@app.get("/", response_class=HTMLResponse)
async def serve_html():
    """메인 페이지에서 HTML 파일 서빙"""
    with open(HTML_FILE, "r", encoding="utf-8") as f:
        return f.read()

app.include_router(chat.router, prefix="")
