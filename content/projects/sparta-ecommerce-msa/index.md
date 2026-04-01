---
title: "Sparta e-commerce MSA"
slug: "sparta-ecommerce-msa"
summary: "이커머스 도메인을 기준으로 한 마이크로서비스 아키텍처 학습·구현 프로젝트입니다. Spring Cloud Gateway를 단일 진입점으로 두고, 주문·결제·취소·환불 흐름과 Kafka 기반 이벤트·보상 트랜잭션을 다루며, 회사 업무에서는 접하기 어려웠던 MSA를 스스로 설계·구축했습니다."
period: "2025.01 - 2025.02"
liveUrl: "https://gossipy-jeanetta-sulkier.ngrok-free.dev/"
role: "풀스택 (개인 프로젝트)"
tags:
  [
    "Spring Boot",
    "Spring Cloud Gateway",
    "Kafka",
    "MySQL",
    "Redis",
    "React",
    "Vite",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "ngrok",
  ]
techStack:
  backend:
    [
      "Spring Boot 3.2",
      "Java 17",
      "Spring Cloud Gateway (WebFlux)",
      "OpenFeign",
      "서비스별 MySQL",
      "Redis",
      "Apache Kafka",
      "Spring Actuator / Prometheus",
      "Logstash Logback Encoder",
    ]
  frontend:
    [
      "React 19",
      "Vite 7",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "Zustand",
      "PortOne / Toss Payments SDK",
    ]
  infrastructure:
    [
      "Docker",
      "Kubernetes",
      "GitHub Actions → GHCR",
      "Zookeeper + Kafka (매니페스트)",
      "ngrok (로컬 결제·웹훅·외부 콜백 검증)",
    ]
highlights:
  - "개인 프로젝트로 서비스 경계·게이트웨이 라우팅·JWT 인증 흐름을 끝까지 설계·구현"
  - "회사 업무 환경에서 MSA를 직접 다루기 어려워, 교육 과정 최종 과제를 통해 MSA를 체득"
  - "Kafka 이벤트 기반 연동 및 보상 트랜잭션(Saga) 등 분산 환경 이슈 학습"
  - "Aggregation API 등 게이트웨이·서비스 간 조합 패턴 적용"
  - "TestContainers 기반 통합 테스트로 멀티 서비스·인프라 의존 검증"
  - "Blue/Green 기반 클라이언트 배포 전략 및 CI/CD 파이프라인 구성"
  - "서비스별 MySQL, Redis, Prometheus 모니터링 등 운영 관점 구성"
  - "ngrok으로 로컬 게이트웨이를 공개해 결제 리다이렉트·웹훅 등 외부 콜백 플로우 검증"
order: 5
featured: true
workType: personal
category: "fullstack"
---

## 프로젝트 개요

스파르타(내일배움단) 교육 과정 **최종 개인 프로젝트**로, 이커머스 시나리오를 바탕으로 **8개의 백엔드 마이크로서비스**(user, product, order, discount, payment, cancel, refund, gateway)와 **React(Vite) 클라이언트**, **Kafka**, **서비스별 MySQL**, **Kubernetes 매니페스트**, **GitHub Actions → GHCR**까지 한 흐름으로 구성했습니다.

현재 소속에서는 **MSA 환경에서 개발할 기회가 없어**, 실무와 별도로 이 프로젝트를 통해 서비스 분리, API 게이트웨이, 이벤트 기반 연동, 배포·관측까지 **MSA를 직접 적용하며 학습**하는 것을 목표로 했습니다.

**웹 데모(ngrok)**: 터널이 동작 중일 때 클라이언트는 [https://gossipy-jeanetta-sulkier.ngrok-free.dev/](https://gossipy-jeanetta-sulkier.ngrok-free.dev/) 로 접속할 수 있습니다. (URL은 터널 설정에 따라 변경될 수 있으며, 상세는 **인프라** 탭을 참고하세요.)

### 핵심 기능(MVP)

- 사용자·상품·주문·할인 등 도메인별 서비스 분리 및 API 제공
- 게이트웨이를 통한 라우팅·인증(JWT)·Redis 등 공통 관심사 처리
- 주문·결제·취소·환불 등 이커머스 핵심 시나리오
- Kafka를 활용한 서비스 간 비동기 연동 및 분산 트랜잭션 대응(보상 트랜잭션/Saga 등 학습 범위)
- Docker/Kubernetes 기반 배포 구조 및 CI/CD
