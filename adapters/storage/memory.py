from typing import Dict
from graph.state import State, Turn

class InMemory:
    def __init__(self):
        self._db: Dict[str, State] = {}

    def load(self, session_id: str) -> State:
        if session_id not in self._db:
            self._db[session_id] = State(messages=[], finished=False)
        return self._db[session_id]

    def save(self, session_id: str, state: State) -> None:
        self._db[session_id] = state
