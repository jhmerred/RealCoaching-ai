from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from pathlib import Path
import os
from typing import Optional

router = APIRouter(prefix="/pdf", tags=["pdf"])

@router.get("/{session_id}")
async def download_pdf(session_id: str):
    """세션 ID에 대한 PDF 파일을 다운로드합니다."""
    
    # PDF 파일 경로 패턴들
    # 세션 ID의 처음 8자리만 사용
    short_session_id = session_id[:8] if len(session_id) > 8 else session_id
    pdf_patterns = [
        f"generated_report_*_{short_session_id}.pdf",  # 세션 ID가 포함된 패턴
        f"generated_report_*_{session_id}.pdf",  # 전체 세션 ID (호환성)
        f"{session_id}.pdf",  # 세션 ID로 직접 저장된 경우
        f"generated_report_*.pdf",  # 최신 생성된 PDF (폴백)
    ]
    
    # 프로젝트 루트 디렉토리
    root_dir = Path.cwd()
    
    # PDF 파일 찾기
    pdf_file = None
    
    # 세션별 PDF 찾기
    for pattern in pdf_patterns:
        files = list(root_dir.glob(pattern))
        if files:
            # 가장 최근 파일 선택
            pdf_file = max(files, key=lambda f: f.stat().st_mtime)
            break
    
    if not pdf_file or not pdf_file.exists():
        # 개발 중 테스트를 위해 가장 최근 생성된 PDF 반환
        all_pdfs = list(root_dir.glob("generated_report_*.pdf"))
        if all_pdfs:
            pdf_file = max(all_pdfs, key=lambda f: f.stat().st_mtime)
        else:
            raise HTTPException(
                status_code=404, 
                detail=f"PDF not found for session {session_id}"
            )
    
    # PDF 파일 반환
    return FileResponse(
        path=str(pdf_file),
        media_type="application/pdf",
        filename=f"realcoaching_report_{session_id[:8]}.pdf",
        headers={
            "Content-Disposition": f"attachment; filename=realcoaching_report_{session_id[:8]}.pdf"
        }
    )

@router.get("/status/{session_id}")
async def check_pdf_status(session_id: str):
    """PDF 생성 상태를 확인합니다."""
    
    root_dir = Path.cwd()
    
    # PDF 파일 존재 여부 확인
    short_session_id = session_id[:8] if len(session_id) > 8 else session_id
    pdf_patterns = [
        f"generated_report_*_{short_session_id}.pdf",
        f"generated_report_*_{session_id}.pdf",
        f"{session_id}.pdf"
    ]
    
    for pattern in pdf_patterns:
        files = list(root_dir.glob(pattern))
        if files:
            pdf_file = max(files, key=lambda f: f.stat().st_mtime)
            return {
                "status": "ready",
                "filename": pdf_file.name,
                "size": pdf_file.stat().st_size,
                "created": pdf_file.stat().st_mtime
            }
    
    # 개발 중 테스트를 위해 가장 최근 PDF 확인
    all_pdfs = list(root_dir.glob("generated_report_*.pdf"))
    if all_pdfs:
        pdf_file = max(all_pdfs, key=lambda f: f.stat().st_mtime)
        return {
            "status": "ready",
            "filename": pdf_file.name,
            "size": pdf_file.stat().st_size,
            "created": pdf_file.stat().st_mtime,
            "note": "Using latest generated PDF for testing"
        }
    
    return {"status": "not_found"}