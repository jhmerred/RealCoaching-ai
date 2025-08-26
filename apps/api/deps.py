from dotenv import load_dotenv, find_dotenv
# 1) Try project-level .env; 2) fallback to config/.env
load_dotenv(find_dotenv(), override=False)

from adapters.llm.langchain_llm import LangChainLLM
from adapters.storage.sqlite import SQLiteStorage
from graph.graph import build_graph
import os

_graph = None
_storage = SQLiteStorage(db_path=os.getenv("DB_PATH", "sessions.db"))
_llm = LangChainLLM()

def get_graph():
    global _graph
    if _graph is None:
        _graph = build_graph(_llm)
    return _graph

def get_storage():
    return _storage
