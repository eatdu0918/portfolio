# Portfolio

Nuxt 3 기반 포트폴리오 웹사이트입니다.

## 기술 스택

- **Nuxt 3** (SSG)
- **Tailwind CSS** (다크모드 지원)
- **@nuxt/content** (Markdown 기반 프로젝트 관리)
- **Mermaid.js** (아키텍처 다이어그램)

## 실행

```bash
pnpm install
pnpm dev
```

## 빌드 및 배포

```bash
pnpm generate
```

`.output/public` 폴더를 Vercel, Netlify 등 정적 호스팅에 배포합니다.

## 새 프로젝트 추가

`content/projects/<project-name>/index.md` 파일을 생성합니다.

```yaml
---
title: "프로젝트 제목"
slug: "project-name"
summary: "프로젝트 한 줄 요약"
period: "2024.01 - 현재"
role: "역할"
tags: ["Vue 3", "Spring Boot"]
techStack:
  frontend: ["Vue 3"]
  backend: ["Spring Boot"]
highlights:
  - "주요 성과 1"
  - "주요 성과 2"
order: 2
featured: true
category: "fullstack"
---

본문 내용 (Markdown)
```

상세 문서가 필요하면 같은 디렉터리에 추가 `.md` 파일을 만들고 `category` 필드로 탭을 구분합니다.
