"""
토큰 사용량 및 비용 계산 유틸리티
"""

# 모델별 가격 (USD per 1M tokens)
PRICING = {
    "gpt-5": {
        "input": 1.25,    # $1.25 per 1M input tokens
        "output": 10.00   # $10.00 per 1M output tokens
    },
    "gpt-5-mini": {
        "input": 0.25,    # $0.25 per 1M input tokens
        "output": 2.00    # $2.00 per 1M output tokens
    },
    "gpt-4o-mini": {
        "input": 0.15,    # $0.15 per 1M input tokens
        "output": 0.60    # $0.60 per 1M output tokens
    }
}

def calculate_cost(model_name: str, input_tokens: int, output_tokens: int, exchange_rate: float = 1400) -> float:
    """
    모델명과 토큰 수를 기반으로 비용 계산
    
    Args:
        model_name: 사용한 모델명
        input_tokens: 입력 토큰 수
        output_tokens: 출력 토큰 수
        exchange_rate: 환율 (기본값 1400원/달러)
    
    Returns:
        예상 비용 (KRW)
    """
    # 모델명 정규화
    model_key = model_name.lower()
    
    # 기본값 (gpt-4o-mini 가격 사용)
    pricing = PRICING.get("gpt-4o-mini")
    
    # 정확한 모델 가격 찾기
    for key in PRICING:
        if model_key == key:
            pricing = PRICING[key]
            break
    
    # 비용 계산 (토큰을 1M 단위로 변환)
    input_cost_usd = (input_tokens / 1_000_000) * pricing["input"]
    output_cost_usd = (output_tokens / 1_000_000) * pricing["output"]
    total_cost_usd = input_cost_usd + output_cost_usd
    
    # KRW로 변환
    return total_cost_usd * exchange_rate