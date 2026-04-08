---
title: 한글 (일반화)
order: 1
---

# 이력서 (한글 · 도메인 일반화 버전)

> 대기업·핀테크·빅테크 일반 지원, 외부 공개용. 군사·방산 도메인 세부 명칭을 기술·역할 중심으로 완화했습니다.  
> **상세 도메인 표현(프로젝트명·C4I·COP 명시 등)**이 필요하면 동일 폴더의 `resume-ko-base.md`를 사용하세요.

---

## 기본 정보

- **이름:** [이름]
- **연락처:** [휴대폰] · [이메일]
- **GitHub / 블로그 / 포트폴리오:** [URL 정리]

---

## 핵심 요약

웹 프론트엔드(Vue 3, React/Next.js)와 Spring Boot 백엔드, AI 추론 파이프라인 연동까지 담당하는 풀스택 개발자입니다. **대규모 지도·상황 시각화** 프로젝트에서 OpenLayers·Cesium 3D, **국제 표준 전술 심볼 스펙(MIL-STD-2525D 계열)** 렌더링, 실시간(WebSocket, 메시지 큐) 아키텍처를 설계·구현했습니다. **SaaS(영상·이미지 비식별화)**에서는 Electron, Spring 멀티모듈, RabbitMQ로 다중 AI 추론 서비스를 제품에 연결했습니다. 개인 프로젝트로 Next.js 기술 블로그와 Spring Cloud·Kafka·Kubernetes MSA를 구축하며 역량을 확장합니다.

---

## 경력

### AI Studio

**기간:** 2023.04 ~ 현재  

#### 지도 기반 공통 상황도(COP 클래스) 클라이언트 (2025.12 ~ 현재)

- OpenLayers 기반 2D 지도 및 전술 심볼 렌더링, 레이어·사용자 인터랙션 구현.
- Provider/Manager 계층으로 지도·심볼·상태 모듈 분리, 확장 가능한 프론트엔드 아키텍처 설계.
- **표준 전술 심볼 스펙**에 따른 스타일·도형 규칙 적용 및 렌더링 일관성 유지.
- Vue Flow 기반 **조직·편성(ORBAT) 다이어그램** UI, Turf.js로 클라이언트 측 지리 연산 보조.
- **기술:** Vue 3, OpenLayers, MIL-STD-2525D, Tailwind CSS, Pinia, Vue Flow, Turf.js.

#### 지도 기반 지휘·상황 인지 플랫폼 (2025.06 ~ 2025.11)

- Cesium 3D로 지형·자산 시각화 및 카메라·씬 제어, **지휘·관리·현장(엣지)** 3종 Vue 3 클라이언트 동시 개발·유지보수.
- 외부 **분석·시뮬레이션 서비스** API 연동 및 데이터 바인딩.
- 엣지 환경 **HLS 라이브 스트리밍** 연동.
- Spring Boot 3, PostgreSQL, WebSocket(STOMP)와 협업해 실시간 알림·상태 반영.
- **기술:** Vue 3, Cesium, PrimeVue, Quasar, Spring Boot 3, PostgreSQL, WebSocket, HLS.js.

#### 영상·이미지 비식별화 SaaS (2024.04 ~ 2025.05)

- Vue 3·Electron 데스크톱 앱 및 Spring Boot 3 멀티모듈 API·도메인 로직 구현.
- RabbitMQ 기반 큐로 객체 탐지·생성형 등 **다중 AI 추론 워커** 연동 및 파이프라인 설계.
- Redis Pub/Sub로 작업·추론 상태 실시간 UI 반영.
- Python 연동, Docker로 서비스·워커 패키징.
- **기술:** Vue 3, Electron, Spring Boot 3, Python, RabbitMQ, Redis, YOLOv8, Docker.

#### AI 학습 데이터 관리 시스템 (2023.04 ~ 2024.03)

- Spring Boot REST API, JSP·jQuery 웹 UI, 플러그인형 **비디오→이미지 변환** 파이프라인.
- MongoDB + MariaDB 듀얼 저장 처리 비정형·정형 데이터.
- RabbitMQ·Python 비동기 작업.
- **기술:** Spring Boot, JSP, jQuery, MyBatis, MariaDB, MongoDB, RabbitMQ, Python.

---

## 개인 프로젝트

### dev-blog — 기술 블로그 (2026.02 ~ 현재)

- Next.js App Router, React 19, TypeScript, Vercel 배포.
- unified(remark/rehype)로 Markdown 확장(Sandpack, Mermaid, 커스텀 컴포넌트).
- Prisma·PostgreSQL·Server Actions 댓글, Vitest.
- **기술:** Next.js, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Vitest, Sandpack.

### Sparta e-commerce MSA — 개인 프로젝트 (2026.01 ~ 현재)

- Spring Cloud Gateway, 서비스별 MySQL, Kafka 이벤트·보상 트랜잭션, React(Vite) 클라이언트(교육 과정 착수 후 레퍼런스로 유지·보완).
- Docker·Kubernetes, GitHub Actions → GHCR.
- **기술:** Spring Boot 3, Spring Cloud Gateway, Kafka, Redis, React 19, Kubernetes, Docker, GitHub Actions.

---

## 학력 · 병역 · 자격

- [학력]
- [병역]
- [자격증 — 선택]

---

## 기술 요약

| 구분 | 키워드 |
|------|--------|
| Frontend | Vue 3, Nuxt 3, React 19, Next.js, TypeScript, Electron, Pinia, Tailwind CSS, PrimeVue, Quasar |
| Backend | Spring Boot 3, Spring Cloud, Spring Security/JWT, REST, MyBatis, Kafka, RabbitMQ, WebSocket(STOMP) |
| GIS·Map | OpenLayers, Cesium 3D, MIL-STD-2525D, Turf.js |
| AI·연동 | Python, YOLOv8, Stable Diffusion, OpenCV |
| Data | PostgreSQL, MariaDB/MySQL, MongoDB, Redis, Prisma |
| Infra | Docker, Kubernetes, Nginx, Prometheus, CI/CD |

---

## 일반화 시 치환 요약 (상세 ↔ 일반)

| 상세 표현 (base) | 일반화 (이 문서) |
|------------------|------------------|
| 군사 작전 지휘통제(C4I) | 지도 기반 지휘·상황 인지 플랫폼 |
| 공통작전상황도(COP) | 지도 기반 공통 상황도(COP 클래스) 클라이언트 |
| NATO 표준 군사 부호 | 표준 전술 심볼 스펙·렌더링 규칙 |
| 전투편성표(ORBAT) | 조직·편성(ORBAT) 다이어그램 |

MIL-STD-2525D는 **기술 키워드**로 검색·매칭에 도움이 되므로 스택 표에는 유지했습니다. 필요 시 `표준 전술 심볼`만 남기고 코드명은 제거할 수 있습니다.
