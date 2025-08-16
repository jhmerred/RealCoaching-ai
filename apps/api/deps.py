from adapters.llm.openai import OpenAIText
from adapters.storage.memory import InMemory
from graph.graph import build_graph

_graph = None
_storage = InMemory()
_llm = OpenAIText()

def get_graph():
    global _graph
    if _graph is None:
        _graph = build_graph(_llm)
    return _graph

def get_storage():
    return _storage
