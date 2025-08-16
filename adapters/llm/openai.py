import os, httpx

class OpenAIText:
    """Minimal OpenAI Chat Completions wrapper returning plain text."""
    def __init__(self, model: str | None = None, timeout: float = 40):
        self.api_key = os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            raise RuntimeError("OPENAI_API_KEY is not set")
        self.model = model or os.getenv("MODEL_NAME", "gpt-4o-mini")
        self.timeout = timeout
        self.url = "https://api.openai.com/v1/chat/completions"

    def text(self, prompt: str) -> str:
        headers = {"Authorization": f"Bearer {self.api_key}"}
        body = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.2,
        }
        with httpx.Client(timeout=self.timeout) as client:
            r = client.post(self.url, headers=headers, json=body)
            r.raise_for_status()
            data = r.json()
        return data["choices"][0]["message"]["content"]
