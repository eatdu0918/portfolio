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
      "댓글 반영 시 경로 캐시 무효화",
    ]
  quality:
    ["Vitest", "Testing Library", "jsdom", "글 주제별 예제·테스트 쌍"]
  deployment:
    - "Vercel (프로덕션 호스팅)"
highlights:
  - "파일 시스템 기반 Markdown 포스트를 빌드 시 파싱·정적 경로 사전 생성하는 구조"
  - "코드 샌드박스·다이어그램·삽입 컴포넌트용 MD 확장 문법과 HTML 플레이스홀더 재주입 패턴"
  - "인라인 에디터·테스트 모드로 글 속 코드를 브라우저에서 바로 실행·검증"
  - "Prisma + PostgreSQL 댓글 저장, Server Actions·IP 헤더 처리·캐시 무효화로 UX 정합성 유지"
  - "프로덕션에서 발행 플래그·카테고리 쿼리로 목록 필터링, 개발 환경에서는 전체 노출"
  - "Ramda, MSA, 트랜잭션, 보안, 브라우저·JVM 등 폭넓은 주제의 글과 동기화된 예제·단위 테스트"
  - "https://dev-blog-snowy-alpha.vercel.app/ 에 배포되어 실제 서비스 형태로 바로 확인 가능"
order: 6
featured: true
workType: personal
category: "fullstack"
---

## 왜 이 프로젝트인가

기술 블로그는 “글을 올린다” 이상이어야 한다고 봤다. **읽는 것 → 실행·검증하는 것**까지 한 페이지에 담으려면 MDX로 전면 전환하거나, **Markdown 파이프라인을 확장**해야 한다. 후자를 택해 **Git 친화적인 작성 경험**을 지키고 싶었다.

**라이브:** [https://dev-blog-snowy-alpha.vercel.app/](https://dev-blog-snowy-alpha.vercel.app/)

## 내가 풀려던 문제

1. Sandpack·Mermaid·커스텀 컴포넌트를 **서버 HTML 생성과 섞으면** hydration·CLS가 깨진다.
2. 댓글은 동적 데이터인데, 글 전체를 클라이언트로 가져가면 **TTFB·SEO**가 나빠진다.
3. 예제 코드와 본문 설명이 어긋나면 **신뢰가 떨어진다**.

## 접근과 결과 (요약)

- 코드 샌드박스·다이어그램·삽입 컴포넌트 블록을 **추출→토큰→HTML→플레이스홀더 재주입**으로 처리해 작성 흐름은 Markdown에 남겼다.
- 글은 **서버 컴포넌트 + 정적 경로**, 댓글은 **Prisma + Server Actions + 경로 캐시 무효화**로 경계를 나눴다.
- **예제 소스 폴더**와 **Vitest**로 글 주제와 코드를 짝지어 드리프트를 줄였다.

## 제품 관점에서의 가치

독자는 **같은 탭에서 다이어그램·실행·테스트**를 본다. 작성자는 여전히 **마크다운 원고와 상단 메타데이터**만으로 발행을 제어한다 — **콘텐츠 자산과 제품 코드가 같은 저장소**에 남는다.

## 상세는 탭에서

- **아키텍처**: unified 파이프라인과 데이터 경계
- **프론트엔드**: App Router, 인터랙티브 블록 렌더링, 읽기 경험
- **백엔드**: 댓글 스키마, Server Actions, IP 헤더
- **인프라**: Vercel·환경 변수·관측 여지

## 나의 역할

기획·UI·콘텐츠 파이프라인·DB·테스트까지 **1인 풀스택**으로 구현했다. “MD 작성 경험을 깨지 않고 확장 문법을 얹는다”는 목표를 최우선으로 두었다.
