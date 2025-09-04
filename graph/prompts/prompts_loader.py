from pathlib import Path
BASE = Path(__file__).parent
def render(name: str, **kwargs) -> str:
    tmpl = (BASE / name).read_text(encoding="utf-8")
    # score_calculation.txt는 JSON 템플릿이므로 format_map을 사용하지 않음
    if name == "score_calculation.txt":
        return tmpl
    return tmpl.format_map(kwargs)
