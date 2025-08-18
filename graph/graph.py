from langgraph.graph import StateGraph, END
from graph.state import State
from graph.nodes.node_step import step
from adapters_interface import LLM
from adapters.llm.langchain_llm import LangChainLLM

def build_graph(llm: LLM):
    g = StateGraph(State)
    g.add_node("step", lambda s: step(s, llm))
    g.set_entry_point("step")
    g.add_edge("step", END)  # 한 요청당 한 스텝
    return g.compile()

# LangGraph 서버용 그래프 인스턴스
llm = LangChainLLM()
graph = build_graph(llm)
