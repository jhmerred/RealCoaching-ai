from pathlib import Path
BASE = Path(__file__).parent
def render(name: str, **kwargs) -> str:
    tmpl = (BASE / "prompts" / name).read_text(encoding="utf-8")
    return tmpl.format_map(kwargs)
