from fastapi import APIRouter, Depends, HTTPException
from ..schemas import ChatIn, ChatOut
from ..deps import get_graph, get_storage
from graph.state import State, Turn

router = APIRouter()

@router.post("/chat", response_model=ChatOut)
def chat(body: ChatIn, graph=Depends(get_graph), storage=Depends(get_storage)):
    state = storage.load(body.session_id)
    state.session_id = body.session_id  # 세션 ID를 State에 저장
    state.messages.append(Turn(role="user", content=body.message))
    raw_out = graph.invoke(state)
    # Coerce dict to State
    new_state = State.model_validate(raw_out) if isinstance(raw_out, dict) else raw_out
    storage.save(body.session_id, new_state)

    reply = ""
    for m in reversed(new_state.messages):
        if m.role == "assistant":
            reply = m.content
            break
    
    # 응답 생성 (토큰 정보는 state 안에 포함됨)
    return ChatOut(reply=reply, state=new_state.model_dump())

@router.get("/session/{session_id}")
def get_session(session_id: str, storage=Depends(get_storage)):
    """세션 데이터 조회 (대화 복구용)"""
    session_data = storage.get_session_data(session_id)
    if session_data is None:
        raise HTTPException(status_code=404, detail="Session not found")
    
    return session_data
