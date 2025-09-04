from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from .routers import chat, pdf

app = FastAPI(title="One-Node LangGraph API")

# CORS 설정 (브라우저에서 API 호출 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 프로젝트 루트 디렉터리
PROJECT_ROOT = Path(__file__).parent.parent.parent

# HTML 파일 경로
HTML_FILE = PROJECT_ROOT / "index.html"

# Static 파일 서빙 (로고 이미지 등)
app.mount("/logo", StaticFiles(directory=PROJECT_ROOT / "logo"), name="logo")

@app.get("/", response_class=HTMLResponse)
async def serve_html():
    """메인 페이지에서 HTML 파일 서빙"""
    with open(HTML_FILE, "r", encoding="utf-8") as f:
        return f.read()

app.include_router(chat.router, prefix="")
app.include_router(pdf.router, prefix="")
