import os
from typing import List
from langchain.chat_models import init_chat_model
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage

class LangChainLLM:
    """LLM adapter using LangChain's init_chat_model.

    MODEL_NAME env (e.g., 'gpt-4o-mini'); provider defaults to 'openai',

    so 'openai:MODEL' is used unless you already pass 'provider:model'.
    """
    def __init__(self, model: str | None = None, temperature: float = 0.2):
        model_name = model or os.getenv("MODEL_NAME", "gpt-5-mini")
        # if provider not specified, assume 'openai'
        self.model_ref = model_name if ":" in model_name else f"openai:{model_name}"
        self.llm = init_chat_model(self.model_ref, temperature=temperature)

    def text(self, messages: List) -> str:
        """Process conversation messages with Turn objects.
        
        Args:
            messages: List of Turn objects with role (system/user/assistant) and content
        """
        langchain_messages = []
        
        # Convert Turn objects to langchain messages
        for msg in messages:
            if hasattr(msg, 'role') and hasattr(msg, 'content'):
                if msg.role == "system":
                    langchain_messages.append(SystemMessage(content=msg.content))
                elif msg.role == "user":
                    langchain_messages.append(HumanMessage(content=msg.content))
                elif msg.role == "assistant":
                    langchain_messages.append(AIMessage(content=msg.content))
        
        response = self.llm.invoke(langchain_messages)
        return getattr(response, "content", str(response))
