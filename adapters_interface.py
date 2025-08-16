from typing import Protocol

class LLM(Protocol):
    def text(self, prompt: str) -> str: ...
