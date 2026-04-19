---
title: "e-commerce MSA"
slug: "sparta-ecommerce-msa"
summary: "이커머스 도메인을 기준으로 한 마이크로서비스 아키텍처 학습·구현 프로젝트입니다. Spring Cloud Gateway를 단일 진입점으로 두고, 주문·결제·취소·환불 흐름과 Kafka 기반 이벤트·보상 트랜잭션을 다루며, 회사 업무에서는 접하기 어려웠던 MSA를 스스로 설계·구축했습니다."
period: "2026.01 - 현재"
liveUrl: "https://gossipy-jeanetta-sulkier.ngrok-free.dev/"
demoLinks:
  [
    {
      "label": "e-commerce(메인)",
      "url": "https://gossipy-jeanetta-sulkier.ngrok-free.dev/",
    },
    {
      "label": "e-commerce(어드민)",
      "url": "https://gossipy-jeanetta-sulkier.ngrok-free.dev/admin",
    },
    {
      "label": "Kubernetes 대시보드",
      "url": "https://gossipy-jeanetta-sulkier.ngrok-free.dev/k8s/#/service?namespace=sparta-msa",
    },
    {
      "label": "Kafka UI",
      "url": "https://gossipy-jeanetta-sulkier.ngrok-free.dev/kafka",
    },
    {
      "label": "통합 Swagger UI",
      "url": "https://gossipy-jeanetta-sulkier.ngrok-free.dev/swagger-ui.html",
    },
  ]
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
      "비동기 서버 상태 동기화(React Query 계열)",
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
  - "회사 업무에서 MSA 기회가 제한적이라, 교육 과정에서 체득한 내용을 바탕으로 개인 레퍼런스를 구축·유지"
  - "Kafka 이벤트 기반 연동 및 보상 트랜잭션(Saga) 등 분산 환경 이슈 학습"
  - "Aggregation API 등 게이트웨이·서비스 간 조합 패턴 적용"
  - "TestContainers 기반 통합 테스트로 멀티 서비스·인프라 의존 검증"
  - "Blue/Green 기반 클라이언트 배포 전략 및 CI/CD 파이프라인 구성"
  - "서비스별 MySQL, Redis, Prometheus 모니터링 등 운영 관점 구성"
  - "ngrok으로 로컬 게이트웨이를 공개해 결제 리다이렉트·웹훅 등 외부 콜백 플로우 검증"
order: 1
featured: true
workType: personal
category: "fullstack"
testAccounts:
  [
    {
      "type": "일반 사용자",
      "email": "visitor@sparta-msa.com",
      "password": "test1234!",
      "role": "USER (주문/결제 가능)",
    },
    {
      "type": "관리자",
      "email": "admin@sparta-msa.com",
      "password": "test1234!",
      "role": "ADMIN (상품/주문 관리 가능)",
    },
  ]
---



## 왜 이 프로젝트인가

회사 업무에서 MSA를 끝까지 설계·운영할 기회는 흔치 않다. 교육 **최종 개인 프로젝트**에서 착수한 뒤에도, **게이트웨이·도메인 분리·이벤트·배포·관측**을 스스로 반복할 수 있는 **개인 레퍼런스**로 유지하고 있다.

**데모 및 관리 도구 (ngrok 익스포즈 시에만 접근 가능):**
- **메인 쇼핑몰**: [https://gossipy-jeanetta-sulkier.ngrok-free.dev/](https://gossipy-jeanetta-sulkier.ngrok-free.dev/)
- **어드민 관리**: [/admin](https://gossipy-jeanetta-sulkier.ngrok-free.dev/admin)
- **K8s 대시보드**: [/k8s (sparta-msa)](https://gossipy-jeanetta-sulkier.ngrok-free.dev/k8s/#/service?namespace=sparta-msa)
- **Kafka UI**: [/kafka](https://gossipy-jeanetta-sulkier.ngrok-free.dev/kafka)
- **통합 Swagger UI**: [/swagger-ui.html](https://gossipy-jeanetta-sulkier.ngrok-free.dev/swagger-ui.html)

*URL은 터널 세션마다 달라질 수 있습니다.*



## 내가 풀려던 문제

1. 클라이언트가 서비스마다 다른 호스트를 알면 **CORS·토큰·운영**이 지옥이 된다.
2. 주문·결제는 **즉시 일관성**, 취소·환불은 **느슨한 결합**이 필요해 동기/비동기를 섞어야 한다.
3. “로컬에서만 되는 MSA”는 의미가 없어 **CI·컨테이너·관측**까지 같은 전제로 두고 싶었다.

## 접근과 결과 (요약)

- **Spring Cloud Gateway**를 단일 진입점으로 두고 JWT·Redis 같은 횡단 관심사를 모았다.
- **Feign + Kafka**로 즉시 응답이 필요한 흐름과 이벤트 기반 후속 처리를 나누고, Saga/보상은 학습 목표로 명시했다.
- **Docker/K8s + GitHub Actions → GHCR + TestContainers**로 배포와 테스트 전제를 맞췄다.

## 제품 관점에서의 가치

이커머스 MVP는 “장바구니가 된다”보다 **서비스 경계를 잘못 나눴을 때 비용이 어디로 튀는지**를 체감하게 해준다. 게이트웨이·DB 분리·이벤트를 손으로 만지며 **운영 가능한 MSA 감각**을 쌓는 것이 목표다.

## 세부 문서

- **아키텍처**: 경계 선택·동기/비동기 혼합
- **프론트엔드**: 서버 상태 캐시·결제·ngrok 검증
- **백엔드**: 게이트웨이·Feign·Kafka·관측·테스트
- **인프라**: K8s·CI·Prometheus·터널

## 주요 구현 사항

**풀스택(1인)**으로 서비스 분리, 클라이언트 개발, K8s 인프라 구성을 모두 수행했습니다. 단순히 기능을 완성하는 것을 넘어, 현업에서 접하기 힘든 MSA의 핵심 아키텍처를 스스로 설계하고 검증해 보는 **레퍼런스 프로젝트**로 완성했습니다.

