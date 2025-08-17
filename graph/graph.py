from langgraph.graph import StateGraph, END
from .state import State
from .nodes.node_step import step
from adapters_interface import LLM

def build_graph(llm: LLM):
    g = StateGraph(State)
    g.add_node("step", lambda s: step(s, llm))
    g.set_entry_point("step")
    g.add_edge("step", END)  # 한 요청당 한 스텝
    return g.compile()
