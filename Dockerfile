# 1단계: 빌드 환경
FROM node:20-alpine AS build-stage

# pnpm 설치
RUN npm install -g pnpm

# 빌드 필수 도구 설치 (better-sqlite3 등 네이티브 모듈 대비)
RUN apk add --no-cache python3 make g++

WORKDIR /app

# 의존성 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 소스 복사 및 정적 사이트 생성 (SSG)
COPY . .
RUN pnpm generate

# 2단계: 실행 환경 (Nginx)
FROM nginx:stable-alpine AS production-stage

# Nginx 설정 복사
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 빌드된 정적 파일 복사
COPY --from=build-stage /app/.output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
