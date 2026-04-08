---
title: "개인 개발 블로그 (dev-blog)"
slug: "dev-blog"
summary: "Next.js 기반 개인 기술 블로그입니다. Markdown을 unified(remark/rehype) 파이프라인으로 확장해 Sandpack 인라인 실행, Mermaid 다이어그램, 커스텀 React 컴포넌트를 글 본문에 삽입하고, PostgreSQL·Prisma·Server Actions로 댓글을 처리합니다. 백엔드·프론트·인프라·CS 주제의 글과 예제·Vitest 테스트를 함께 관리합니다. Vercel에 배포되어 누구나 접속해 글과 댓글 기능을 확인할 수 있습니다."
period: "2026.02 - 현재"
liveUrl: "https://dev-blog-snowy-alpha.vercel.app/"
role: "개인프로젝트"
tags:
  [
    "Next.js",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Vitest",
    "Markdown",
    "Sandpack",
    "Mermaid",
  ]
techStack:
  frontend:
    [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "@tailwindcss/typography",
      "next-themes (다크 모드)",
      "Geist 폰트",
      "lucide-react",
    ]
  content:
    [
      "gray-matter (front matter)",
      "unified + remark-parse / remark-gfm / remark-rehype",
      "rehype-pretty-code + Shiki",
      "@codesandbox/sandpack-react",
      "mermaid",
      "커스텀 플레이스홀더 → Sandpack / Mermaid / DataStructuresCanvas",
    ]
  backend:
    [
      "Prisma 5",
      "PostgreSQL",
      "Next.js Server Actions",
      "revalidatePath (댓글 반영)",
    ]
  quality:
    ["Vitest", "Testing Library", "jsdom", "글 주제별 예제·테스트 쌍"]
  deployment:
    - "Vercel (프로덕션 호스팅)"
highlights:
  - "파일 시스템 기반 Markdown 포스트를 빌드 시 파싱·정적 생성(generateStaticParams)하는 구조"
  - ":::sandpack / ```mermaid``` / :::component 등 MD 확장 문법과 HTML 플레이스홀더 재주입 패턴"
  - "Sandpack 에디터·테스트 모드로 글 속 코드를 브라우저에서 바로 실행·검증"
  - "Prisma + PostgreSQL 댓글 저장, Server Actions·IP 헤더 처리·revalidatePath로 UX 정합성 유지"
  - "프로덕션에서 published 플래그·카테고리 쿼리로 목록 필터링, 개발 환경에서는 전체 노출"
  - "Ramda, MSA, 트랜잭션, 보안, 브라우저·JVM 등 폭넓은 주제의 글과 동기화된 예제·단위 테스트"
  - "https://dev-blog-snowy-alpha.vercel.app/ 에 배포되어 실제 서비스 형태로 바로 확인 가능"
order: 6
featured: true
workType: personal
category: "fullstack"
---

## 프로젝트 개요

**라이브 URL:** [https://dev-blog-snowy-alpha.vercel.app/](https://dev-blog-snowy-alpha.vercel.app/) — Vercel에 올려 두었으며, 카테고리별 글 목록·본문 렌더링·댓글까지 동일하게 동작합니다.

**dev-blog**는 학습과 정리를 한곳에 모으기 위한 개인 기술 블로그입니다. 단순히 Markdown을 HTML로 바꾸는 수준을 넘어, **본문 안에서 코드 실행·다이어그램·인터랙티브 컴포넌트**를 쓸 수 있도록 콘텐츠 파이프라인을 직접 설계했습니다.

포스트는 `src/posts` 아래 `.md` 파일로 관리되며, front matter로 제목·날짜·카테고리·발행 여부를 제어합니다. 상세 페이지는 **정적 경로 생성**과 **서버 컴포넌트**로 HTML을 만들고, Sandpack·Mermaid 등은 **클라이언트 컴포넌트**에서 하이드레이션됩니다.

### 주요 기능

- **글 목록·필터**: 카테고리 쿼리 파라미터, 최신순 정렬
- **리치 Markdown**: GFM, Shiki 기반 코드 하이라이트, 이미지 경로 정규화
- **Sandpack**: 다중 파일 블록, 에디터/테스트 모드
- **Mermaid**: 시퀀스·플로우 등 다이어그램 렌더링
- **확장 컴포넌트**: 예) 자료구조 시각화 캔버스
- **댓글**: 익명 닉네임, 본문, 작성 시각, 선택적 IP 기록

### 나의 역할

기획부터 UI·콘텐츠 파이프라인·DB 스키마·Server Actions·테스트 구조까지 **1인 전 과정**을 담당했습니다. 특히 Markdown AST 전처리와 플레이스홀더 치환으로 **기존 MD 작성 흐름을 유지하면서** 인터랙티브 블록을 끼워 넣는 방식을 정리·구현했습니다.
