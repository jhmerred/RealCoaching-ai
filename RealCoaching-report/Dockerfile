FROM node:20-slim AS builder

WORKDIR /app

# Install dependencies for Playwright
RUN apt-get update && apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Playwright browsers
RUN npx playwright install chromium

FROM node:20-slim

WORKDIR /app

# Install runtime dependencies for Playwright
RUN apt-get update && apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /root/.cache/ms-playwright ./root/.cache/ms-playwright

# Copy application files
COPY package*.json ./
COPY *.js ./
COPY page-1 ./page-1
COPY page-2 ./page-2
COPY page-3 ./page-3
COPY page-4 ./page-4
COPY page-5 ./page-5
COPY page-6 ./page-6
COPY page-7 ./page-7
COPY page-8 ./page-8
COPY page-9 ./page-9
COPY page-10 ./page-10
COPY page-11 ./page-11
COPY page-12 ./page-12

# Remove "type": "module" from package.json to use CommonJS
RUN sed -i '/"type": "module",/d' package.json

# Expose port
EXPOSE 3000

# Run the server
CMD ["node", "pdf-api-server.js"]
