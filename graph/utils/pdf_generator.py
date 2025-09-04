import json
import requests
import os
from typing import Dict, Any, Optional
from datetime import datetime, timedelta

def send_to_pdf_server(pdf_data: Dict[str, Any], session_id: Optional[str] = None) -> Dict[str, Any]:
    """
    점수 계산 결과를 PDF 생성 서버로 전송합니다.
    
    Args:
        pdf_data: PDF 생성용 데이터 (data와 config 포함)
        session_id: 세션 ID (파일명에 포함)
        
    Returns:
        PDF 서버 응답 또는 에러
    """
    pdf_server_url = os.getenv("PDF_SERVER_URL", "http://localhost:3000/api/generate-pdf")
    
    headers = {
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(
            pdf_server_url,
            json=pdf_data,
            headers=headers,
            timeout=60
        )
        response.raise_for_status()
        
        # PDF 파일 바이너리 저장 (선택적)
        if response.headers.get('Content-Type') == 'application/pdf':
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            
            # 세션 ID가 있으면 파일명에 포함
            if session_id:
                # 세션 ID의 처음 8자리만 사용
                short_session_id = session_id[:8] if len(session_id) > 8 else session_id
                pdf_path = f"generated_report_{timestamp}_{short_session_id}.pdf"
            else:
                pdf_path = f"generated_report_{timestamp}.pdf"
            
            with open(pdf_path, 'wb') as f:
                f.write(response.content)
            print(f"PDF 생성 성공: {pdf_path}")
            return {"status": "success", "pdf_path": pdf_path}
        else:
            return response.json()
        
    except requests.exceptions.Timeout:
        print("PDF 서버 타임아웃")
        return {"status": "error", "message": "PDF server timeout"}
        
    except requests.exceptions.RequestException as e:
        print(f"PDF 서버 전송 실패: {str(e)}")
        return {"status": "error", "message": str(e)}
    
    except Exception as e:
        print(f"PDF 생성 중 오류: {str(e)}")
        return {"status": "error", "message": str(e)}


def extract_user_info(conversation: list) -> Dict[str, str]:
    """
    대화 내역에서 사용자 정보를 추출합니다.
    
    Args:
        conversation: 대화 내역
        
    Returns:
        사용자 정보 딕셔너리
    """
    # 실제 구현에서는 대화 내용에서 정보를 추출하거나 
    # 별도의 사용자 정보 소스에서 가져와야 함
    return {
        "companyName": os.getenv("COMPANY_NAME", "TEST"),
        "position": os.getenv("USER_POSITION", "TEST"),
        "name": os.getenv("USER_NAME", "TEST"),
        "department": os.getenv("USER_DEPARTMENT", "TEST"),
        "testDate": datetime.now().strftime("%Y-%m-%d"),
        "reportId": f"RC-{datetime.now().strftime('%Y%m%d')}-001"
    }


def calculate_coverages(conversation: list) -> Dict[str, int]:
    """
    대화 내역에서 커버리지를 계산합니다.
    
    Args:
        conversation: 대화 내역
        
    Returns:
        각 영역별 커버리지 (0-100)
    """
    # 간단한 계산 로직 (실제로는 더 정교한 분석 필요)
    conversation_count = len([m for m in conversation if m.role == "assistant"])
    base_coverage = min(100, conversation_count * 10)
    
    return {
        "coverage1": base_coverage,  # 심리적 안전감
        "coverage2": base_coverage,  # 정서상태
        "coverage3": base_coverage,  # 정서문화
        "coverage4": base_coverage,  # 감성지능
        "coverage5": base_coverage,  # 리더십 감성역량
        "conversationCount": conversation_count
    }


def prepare_result_for_pdf(conversation: list, score_data: dict, 
                          user_info: Optional[Dict[str, str]] = None) -> Dict[str, Any]:
    """
    대화 내역과 점수 데이터를 PDF API 형식으로 변환합니다.
    
    Args:
        conversation: 대화 내역 리스트
        score_data: LLM이 반환한 점수 계산 결과 (이미 올바른 형식)
        user_info: 사용자 정보 (선택적)
        
    Returns:
        PDF 생성 API 요청 형식
    """
    # 사용자 정보가 없으면 추출 또는 기본값 사용
    if not user_info:
        user_info = extract_user_info(conversation)
    
    # 커버리지 계산
    coverage_data = calculate_coverages(conversation)
    
    # score_data가 이미 올바른 형식인 경우 그대로 사용
    # 프롬프트가 정확한 형식을 반환하도록 설계됨
    if "data" in score_data:
        # 이미 완전한 형식인 경우
        pdf_request_data = score_data
        # page1과 page3 정보 업데이트
        pdf_request_data["data"]["page1"] = user_info
        pdf_request_data["data"]["page3"] = coverage_data
    else:
        # data 래퍼가 없는 경우 추가
        pdf_request_data = {
            "data": score_data
        }
        pdf_request_data["data"]["page1"] = user_info
        pdf_request_data["data"]["page3"] = coverage_data
    
    # config 추가
    if "config" not in pdf_request_data:
        pdf_request_data["config"] = {
            "scale": 1,
            "margin": {
                "top": "0mm",
                "right": "0mm",
                "bottom": "0mm",
                "left": "0mm"
            }
        }
    
    return pdf_request_data