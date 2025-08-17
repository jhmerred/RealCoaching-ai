from dotenv import load_dotenv, find_dotenv
# 1) Try project-level .env; 2) fallback to config/.env
load_dotenv(find_dotenv(), override=False)

from adapters.llm.langchain_llm import LangChainLLM
from adapters.storage.memory import InMemory
from graph.graph import build_graph

_graph = None
_storage = InMemory()
_llm = LangChainLLM()

def get_graph():
    global _graph
    if _graph is None:
        _graph = build_graph(_llm)
    return _graph

def get_storage():
    return _storage
