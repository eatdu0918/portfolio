---
title: 한글 (상세)
order: 2
---

# 이력서 (한글 · 상세 도메인 표현)

> 민감 고객사·보안 서류용으로는 동일 폴더의 `resume-ko-sanitized.md` 사용을 권장합니다.  
> 개인 정보는 저장소 `content/personal-info-template.md`를 채운 뒤 이 문서 상단에 반영하세요.

---

## 기본 정보

- **이름:** [이름]
- **연락처:** [휴대폰] · [이메일]
- **GitHub / 블로그 / 포트폴리오:** [URL 정리]

---

## 핵심 요약

웹 프론트엔드(Vue 3, React/Next.js)와 Spring Boot 백엔드, AI 추론 파이프라인 연동까지 아우르는 풀스택 개발자입니다. 지도 기반 업무 시스템에서 OpenLayers·Cesium 3D, 표준 전술 심볼(MIL-STD-2525D) 렌더링, 실시간 WebSocket·메시지 큐 기반 아키텍처를 설계·구현해 왔습니다. SaaS(영상·이미지 비식별화)에서는 Electron 데스크톱, Spring 멀티모듈, RabbitMQ로 복수 AI 모델을 서비스에 연결했습니다. 실무 외 개인 프로젝트로 Next.js App Router 기술 블로그와 Spring Cloud·Kafka·Kubernetes 기반 이커머스 MSA를 구축하며 스택을 확장하고 있습니다.

---

## 경력

### AI Studio

**기간:** 2023.04 ~ 현재  
**소속:** 풀스택 개발자 → 풀스택·AI 파이프라인 (Heidi) → 풀스택 (AETEM) → 프론트엔드 개발·아키텍처 설계 (AETEM v2 COP) *(실제 직함은 회사 기준으로 수정)*  

#### AETEM v2 — 공통작전상황도(COP) (2025.12 ~ 현재)

- OpenLayers와 MIL-STD-2525D 기반 공통작전상황도 프론트엔드 개발 및 지도 레이어·인터랙션 구현.
- Provider/Manager 계층 구조로 지도·심볼·상태 모듈을 분리해 확장 가능한 클라이언트 아키텍처 설계.
- NATO 표준 군사 부호 렌더링·스타일 규칙 적용 및 도형·스타일 일관성 유지.
- Vue Flow 기반 전투편성표(ORBAT) 다이어그램 UI 구현, Turf.js로 클라이언트 측 지리 분석 보조.
- **기술:** Vue 3, OpenLayers, MIL-STD-2525D, Tailwind CSS, Pinia, Vue Flow, Turf.js.

#### AETEM — 군사 작전 지휘통제(C4I) (2025.06 ~ 2025.11)

- Cesium 3D 지도 기반 지휘통제 클라이언트 및 운영·엣지 화면 개발, 3개 Vue 3 클라이언트(지휘 Main, 관리 Admin, 현장 Edge) 동시 유지보수.
- 외부 AI 분석 모델(이동로, 타격범위 등) API·데이터 바인딩 및 프론트–백엔드 연동.
- 엣지 장비 환경에서 HLS 스트리밍 재생·연동 구현.
- Spring Boot 3, PostgreSQL, WebSocket(STOMP) 기반 실시간 상황·알림 등 백엔드·실시간 통신과 협업.
- **기술:** Vue 3, Cesium, PrimeVue, Quasar, Spring Boot 3, PostgreSQL, WebSocket, HLS.js.

#### Heidi — 영상·이미지 비식별화 SaaS (2024.04 ~ 2025.05)

- Vue 3 및 Electron 기반 데스크톱 클라이언트 개발·배포, Spring Boot 3 멀티모듈 REST API·비즈니스 로직 구현.
- RabbitMQ 기반 비동기 큐로 YOLOv8, Stable Diffusion 등 5개 AI 추론 모델 바인딩 및 추론 파이프라인 설계·구현.
- Redis Pub/Sub로 작업·추론 상태 실시간 반영.
- Python 연동(RMS·추론 워커), Docker 기반 서비스·워커 컨테이너화.
- **기술:** Vue 3, Electron, Spring Boot 3, Python, RabbitMQ, Redis, YOLOv8, Docker.

#### RMS — AI 학습 데이터 관리 시스템 (2023.04 ~ 2024.03)

- Spring Boot REST API 및 JSP·jQuery 기반 웹 UI 개발, 플러그인 구조의 비디오→이미지 변환 파이프라인 설계.
- MongoDB(MariaDB와 병행) 듀얼 DB 구조로 비정형 Raw와 정형 메타데이터 분리 저장.
- RabbitMQ·Python 기반 비동기 작업 처리.
- **기술:** Spring Boot, JSP, jQuery, MyBatis, MariaDB, MongoDB, RabbitMQ, Python.

---

## 개인 프로젝트

### dev-blog — 기술 블로그 (2026.02 ~ 현재)

- Next.js App Router, React 19, TypeScript로 개인 기술 블로그 구축·Vercel 배포.
- Markdown 파이프라인을 unified(remark/rehype)로 확장해 Sandpack, Mermaid, 커스텀 컴포넌트를 본문에 삽입.
- Prisma, PostgreSQL, Server Actions로 댓글 처리, Vitest로 테스트.
- **기술:** Next.js, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Vitest, Sandpack.

### Sparta e-commerce MSA — 개인 프로젝트 (2026.01 ~ 현재)

- 이커머스 도메인 기준 MSA 학습·구현 및 레퍼런스 유지: Spring Cloud Gateway, 서비스별 MySQL, Kafka 이벤트·보상 트랜잭션(Saga 범위).
- React(Vite) 주문·상품 클라이언트, Docker·Kubernetes, GitHub Actions → GHCR CI/CD 파이프라인 구성.
- **기술:** Spring Boot 3, Spring Cloud Gateway, Kafka, Redis, React 19, Kubernetes, Docker, GitHub Actions.

---

## 학력 · 병역 · 자격

- [학력: personal-info-template 참고]
- [병역]
- [자격증 — 선택]

---

## 기술 요약

| 구분 | 키워드 |
|------|--------|
| Frontend | Vue 3, Nuxt 3, React 19, Next.js(App Router), TypeScript, Electron, Pinia, Tailwind CSS, PrimeVue, Quasar |
| Backend | Spring Boot 3, Spring Cloud, Spring Security/JWT, REST, MyBatis, Kafka, RabbitMQ, WebSocket(STOMP) |
| GIS | OpenLayers, Cesium 3D, MIL-STD-2525D, Turf.js, MGRS/proj4 |
| AI·연동 | Python, YOLOv8, Stable Diffusion, OpenCV, ONNX/TensorRT(검토) |
| Data | PostgreSQL, MariaDB/MySQL, MongoDB, Redis, SQLite, Prisma |
| Infra | Docker, Kubernetes, Nginx, Prometheus, Git, CI/CD(GitHub Actions) |

---

## 제출 시 체크리스트 (관행 첨삭)

- [ ] 회사 단위로 묶었는지, 프로젝트 기간이 겹치면 한 줄로 병행 여부를 명시했는지.
- [ ] bullet이 **역할 + 수단 + 범위**를 담는지 (기술 나열만 하지 않았는지).
- [ ] 수치는 검증 가능한 것만 포함했는지.
- [ ] 대기업은 자소서 문항에 맞춰 이 이력서의 스토리를 분산 링크할 준비가 되었는지.
