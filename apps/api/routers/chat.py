from fastapi import APIRouter, Depends
from ..schemas import ChatIn, ChatOut
from ..deps import get_graph, get_storage
from graph.state import State

router = APIRouter()

@router.post("/chat", response_model=ChatOut)
def chat(body: ChatIn, graph=Depends(get_graph), storage=Depends(get_storage)):
    state = storage.load(body.session_id)
    # 사용자 발화 추가
    state.messages.append({"role": "user", "content": body.message})

    # 그래프 한 스텝 실행
    raw_out = graph.invoke(state)

    # LangGraph가 dict로 반환할 수 있으니 Pydantic 모델로 강제 검증
    new_state = State.model_validate(raw_out) if isinstance(raw_out, dict) else raw_out

    # 저장
    storage.save(body.session_id, new_state)

    # 마지막 assistant 메시지
    reply = ""
    for m in reversed(new_state.messages):
        if isinstance(m, dict):
            role = m.get("role")
            if role == "assistant":
                reply = m.get("content", "")
                break
        else:
            if getattr(m, "role", None) == "assistant":
                reply = getattr(m, "content", "")
                break

    return ChatOut(reply=reply, state=new_state.model_dump())
