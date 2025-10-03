FROM python:3.11-slim AS builder

# Copy uv binary
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /app

# Install dependencies without project first
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project

# Copy the rest of the project
COPY . /app

# Install the project
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen

FROM python:3.11-slim

WORKDIR /app

# Copy the virtual environment from builder
COPY --from=builder /app/.venv /app/.venv

# Copy application code
COPY . .

# Set environment to use the venv
ENV VIRTUAL_ENV=/app/.venv \
    PATH="/app/.venv/bin:$PATH"

# Expose port
EXPOSE 8000

# Run the application using the venv's Python directly
CMD ["/app/.venv/bin/python", "-m", "uvicorn", "apps.api.main:app", "--host", "0.0.0.0", "--port", "8000"]