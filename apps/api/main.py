from fastapi import FastAPI
from .routers import chat

app = FastAPI(title="One-Node LangGraph API")
app.include_router(chat.router, prefix="")
