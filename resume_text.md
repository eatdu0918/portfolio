**\[이름\]**

웹 풀스택 개발자 · 경력 약 3년

+--------------+----------------------------------+
| 📧 \[이메일\] | 🔗 GitHub: \[GitHub URL\]         |
|              |                                  |
| 📱 \[연락처\] | 🌐 포트폴리오: \[포트폴리오 URL\] |
+--------------+----------------------------------+

> **👋 자기소개**

웹 프론트엔드(Vue 3, React/Next.js)와 Spring Boot 백엔드, AI 추론
파이프라인 연동까지 아우르는 풀스택 개발자입니다.

지도 기반 군사 지휘통제 시스템(C4I)에서 OpenLayers·Cesium 3D와 NATO 표준
전술 심볼(MIL-STD-2525D) 렌더링, 실시간 WebSocket 기반 아키텍처를
설계·구현했습니다. 영상·이미지 비식별화 SaaS(Heidi)에서는 Electron
데스크톱, Spring Boot 멀티모듈, RabbitMQ로 복수 AI 모델을 서비스에
연결하는 파이프라인을 직접 설계했습니다.

개인 프로젝트로 Next.js App Router 기술 블로그와 Spring
Cloud·Kafka·Kubernetes 기반 이커머스 MSA를 구축하며 스택을 지속적으로
확장하고 있습니다.

> **🛠 기술 스택**

  --------------- ---------------------------------------------------------------------------------------------------------------------
  **Frontend**    Vue 3 / Nuxt 3 · React 19 / Next.js (App Router) · TypeScript · Electron · Pinia · Tailwind CSS · PrimeVue · Quasar
  **Backend**     Spring Boot 3 · Spring Cloud · Spring Security / JWT · REST API · MyBatis · Kafka · RabbitMQ · WebSocket (STOMP)
  **GIS**         OpenLayers · Cesium 3D · MIL-STD-2525D · Turf.js · MGRS / proj4
  **AI · 연동**   Python · YOLOv8 · Stable Diffusion · OpenCV · ONNX Runtime · TensorRT
  **Data**        PostgreSQL · MariaDB / MySQL · MongoDB · Redis · SQLite · Prisma
  **Infra**       Docker · Kubernetes · Nginx · Prometheus · GitHub Actions (CI/CD)
  --------------- ---------------------------------------------------------------------------------------------------------------------

> **💼 경력 사항**

**AI Studio** 2023.04 \~ 현재 (약 3년)

*웹 풀스택 개발자*

**AETEM v2 --- 공통작전상황도(COP)** 2025.12 \~ 현재

*프론트엔드 개발 · 아키텍처 설계*

-   OpenLayers + MIL-STD-2525D 기반 NATO 표준 군사 부호 렌더링 시스템
    설계 및 구현 (부대 심볼 + 전술 그래픽)

-   Provider / Manager 계층 아키텍처(Facade 패턴) 도입으로
    지도·심볼·상태 모듈 책임 분리 및 독립성 확보

-   SVG 캐시(LRU 120개) 기반 대량 군사 부호 고성능 렌더링, 3개 독립 맵
    화면 동시 관리(keep-alive 캐싱)

-   전술 그래픽 실시간 미리보기 + GeoJSON 변환 렌더링 파이프라인 구현

-   Vue Flow 기반 전투편성표(ORBAT) 다이어그램 시각화 및 레이어 기반
    가시성/편집 권한 관리 체계 구축

**기술 스택:** Vue 3 · OpenLayers 10 · MIL-STD-2525D · Vue Flow ·
Turf.js · Tailwind CSS 4 · Pinia

**AETEM --- AI 기술 접목 군사 지휘통제(C4I)** 2025.06 \~ 2025.11

*풀스택 개발*

-   Cesium 3D 지도 기반 실시간 작전 상황판 구현 (부대 배치, 기동로,
    타격범위 시각화)

-   AI 이동로·타격범위 분석 모델 API 연동 및 서비스 바인딩 (비동기 콜백
    패턴, GeoTIFF 오버레이)

-   WebSocket STOMP 기반 실시간 GPS 위치 추적 및 상황 공유, 엣지
    장비(드론/LiDAR) HLS 스트리밍 연동

-   Spring Boot 3 멀티모듈(main-api / admin-api / common) RESTful API
    설계, MapStruct 기반 DTO-VO 자동 변환

-   PostgreSQL → SQLite 엣지 DB 동기화 기능 구현, 3개 Vue 3
    클라이언트(지휘 Main / 관리 Admin / 현장 Edge) 동시 개발

**기술 스택:** Vue 3 · Cesium 1.128 · PrimeVue 4 · Quasar 2 · Spring
Boot 3 · PostgreSQL · WebSocket · HLS.js · Docker

**Heidi --- 영상·이미지 비식별화 SaaS** 2024.04 \~ 2025.05

*풀스택 개발 · AI 모델 바인딩 및 파이프라인 통합*

-   마이크로서비스 기반 5개 AI 추론 모델(YOLOv8, Stable Diffusion,
    BYTETracker 등) 바인딩 및 Consumer 파이프라인 설계

-   RabbitMQ + Redis Pub/Sub 이벤트 드리븐 아키텍처로 실시간 처리 상태
    관리, WebSocket STOMP 진행률 알림

-   Electron + Vue 3 크로스플랫폼 데스크톱 앱 개발 (SFTP 파일 전송,
    SQLite 로컬 DB)

-   Spring Boot 3 멀티모듈(front\_api / back\_api / common) 아키텍처
    설계 및 구현

-   ONNX Runtime + TensorRT GPU 가속 추론 최적화, 다국어(한·영·일) 지원

**기술 스택:** Vue 3 · Electron 30 · Spring Boot 3.2 · Python · RabbitMQ
· Redis · YOLOv8 · Stable Diffusion · Docker

**RMS --- AI 학습 데이터 관리 시스템** 2023.04 \~ 2024.03

*풀스택 개발 (첫 직장 · 입문 프로젝트)*

-   플러그인 기반 데이터 처리 파이프라인 아키텍처 설계 (Import /
    Transform / Export / Profile)

-   RabbitMQ 비동기 메시지 큐로 7종 데이터 처리 작업 자동화 (SFTP,
    비디오→이미지 변환, JSONL→텍스트, 비식별화 등)

-   외부 LLM 연동 텍스트 정제 도구 및 Model API 바인딩/피드백 시스템
    구현

-   MariaDB + MongoDB 하이브리드 데이터 저장 구조 설계 (관계형 메타 +
    비정형 텍스트/API 데이터)

-   Spring Boot 멀티 프로젝트 공통 라이브러리(rms\_common\_lib) 설계

**기술 스택:** Spring Boot 2.7 · JSP / jQuery · MyBatis · MariaDB ·
MongoDB · RabbitMQ · Python · Docker

> **🚀 개인 프로젝트**

**dev-blog --- 개인 기술 블로그** 2026.02 \~ 현재

*개인 프로젝트 · 배포: https://dev-blog-snowy-alpha.vercel.app/*

-   Next.js App Router, React 19, TypeScript로 개인 기술 블로그 구축 및
    Vercel 배포

-   unified(remark/rehype) 파이프라인 확장 --- Sandpack 인라인 코드
    실행, Mermaid 다이어그램, 커스텀 컴포넌트를 MD 본문에 삽입

-   Prisma + PostgreSQL + Server Actions로 댓글 처리, Vitest 단위 테스트

-   백엔드·프론트·CS·MSA 등 폭넓은 주제의 글과 동기화된 예제·테스트 관리

**기술 스택:** Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS · Prisma · PostgreSQL · Vitest · Sandpack

**Sparta e-commerce MSA --- 이커머스 마이크로서비스** 2026.01 \~ 현재

*개인 프로젝트 (교육 과정 착수 후 레퍼런스 유지)*

-   Spring Cloud Gateway 단일 진입점, 서비스별 MySQL, Kafka 이벤트·보상
    트랜잭션(Saga) 이커머스 MSA 설계·구현

-   Aggregation API 등 게이트웨이·서비스 간 조합 패턴 적용, Blue/Green
    기반 클라이언트 배포 전략

-   React 19(Vite) 주문·상품 클라이언트, PortOne/Toss Payments SDK 결제
    연동

-   Docker + Kubernetes + GitHub Actions → GHCR CI/CD 파이프라인 구성,
    TestContainers 통합 테스트

**기술 스택:** Spring Boot 3.2 · Spring Cloud Gateway · Kafka · Redis ·
React 19 · Kubernetes · Docker · GitHub Actions

> **🎓 교육 및 자격**

  ------------------------ -------------------------------------- ----------------- -----------------
  **기간**                 **학교 / 과정명**                      **학위 / 구분**   **상태**
  \[YYYY.MM \~ YYYY.MM\]   \[대학교명 · 전공\]                    학사              \[졸업 / 수료\]
  2025.01 \~ 2025.02       팀스파르타 --- Spring Cloud MSA 과정   수료              수료
  ------------------------ -------------------------------------- ----------------- -----------------

**병역**

\[병역 사항 입력 --- 예: 군필 (육군 병장, 20XX.XX \~ 20XX.XX)\]

**자격증 (선택)**

\[자격증명, 취득일 --- 없으면 삭제\]
