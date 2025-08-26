import sqlite3
import json
from typing import Optional
from pathlib import Path
from graph.state import State

class SQLiteStorage:
    def __init__(self, db_path: str = "sessions.db"):
        self.db_path = db_path
        self._init_db()
    
    def _init_db(self):
        """데이터베이스 초기화 및 테이블 생성"""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS sessions (
                    session_id TEXT PRIMARY KEY,
                    state_data TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()
    
    def load(self, session_id: str) -> State:
        """세션 상태 로드, 없으면 새 State 생성"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute(
                "SELECT state_data FROM sessions WHERE session_id = ?",
                (session_id,)
            )
            row = cursor.fetchone()
            
            if row is None:
                # 새 세션 생성
                new_state = State()
                self.save(session_id, new_state)
                return new_state
            
            # JSON에서 State 객체로 복원
            state_dict = json.loads(row[0])
            return State.model_validate(state_dict)
    
    def save(self, session_id: str, state: State) -> None:
        """세션 상태 저장"""
        state_json = state.model_dump_json()
        
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                INSERT OR REPLACE INTO sessions (session_id, state_data, updated_at)
                VALUES (?, ?, CURRENT_TIMESTAMP)
            """, (session_id, state_json))
            conn.commit()
    
    def delete(self, session_id: str) -> bool:
        """세션 삭제"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute(
                "DELETE FROM sessions WHERE session_id = ?",
                (session_id,)
            )
            conn.commit()
            return cursor.rowcount > 0
    
    def get_session_data(self, session_id: str) -> Optional[dict]:
        """세션 전체 데이터 조회 (state + 메타데이터)"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute("""
                SELECT state_data, created_at, updated_at 
                FROM sessions WHERE session_id = ?
            """, (session_id,))
            row = cursor.fetchone()
            
            if row is None:
                return None
            
            state_dict = json.loads(row[0])
            return {
                "session_id": session_id,
                "state": state_dict,
                "created_at": row[1],
                "updated_at": row[2]
            }
    
    def list_sessions(self) -> list[dict]:
        """세션 목록 조회"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute("""
                SELECT session_id, created_at, updated_at 
                FROM sessions 
                ORDER BY updated_at DESC
            """)
            return [
                {
                    "session_id": row[0],
                    "created_at": row[1],
                    "updated_at": row[2]
                }
                for row in cursor.fetchall()
            ]