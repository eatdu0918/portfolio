---
title: 통합 이력서 (팀스파르타)
order: 0
name: 이두현
role: 웹 풀스택 개발자 · 경력 약 3년 1개월
email: eatdu0918@gmail.com
phone: 010-8310-1753
github: https://github.com/eatdu0918
portfolio: http://13.210.147.17/:8082
---

## 자기소개

기능 요구사항보다 "왜 이게 필요한가"를 먼저 묻는 개발자입니다. 증상이 아닌 Root Cause를 찾을 때까지 파고들고, 찾으면 TypeScript 기반 풀스택으로 처음부터 끝까지 구현합니다.

3년여간 AI 추론 파이프라인, 대규모 실시간 지도 UI, 분산 시스템을 1~3인 팀에서 설계·구현·배포했습니다. Vue 3 · Nuxt와 React 19 · Next.js 프론트엔드, Spring Boot 3 · Spring Cloud 백엔드, Python AI 파이프라인까지 End-to-End로 담당했습니다.

AI는 보조 도구가 아닌 제품의 핵심 로직으로 활용합니다. YOLOv8 · Stable Diffusion 추론을 서비스 파이프라인에 연결했고, 개발 과정에서는 CLAUDE.md 하네스 · 자동 검증 훅 · 커스텀 커맨드 · 전문 에이전트로 이루어진 AI 개발 시스템을 직접 설계해 운용합니다.

---

## 기술 스택

| 구분          | 키워드                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| Frontend      | Vue 3, Nuxt 3, React 19, Next.js (App Router), TypeScript, Electron, Pinia, Tailwind CSS, PrimeVue, Quasar |
| Backend       | Spring Boot 3, Spring Cloud, Spring Security / JWT, REST, MyBatis, Kafka, RabbitMQ, WebSocket (STOMP)      |
| GIS           | OpenLayers, Cesium 3D, MIL-STD-2525D, Turf.js, MGRS / proj4                                               |
| AI · ML 연동  | Python, YOLOv8, Stable Diffusion, BYTETracker, OpenCV, FFmpeg                                             |
| AI 활용 개발  | Claude Code (CLAUDE.md 하네스, 자동 검증 훅 4종, 커스텀 커맨드 6종, 전문 에이전트 3종), Cursor            |
| Data          | PostgreSQL, MariaDB / MySQL, MongoDB, Redis, SQLite, Prisma                                                |
| Infra         | Docker, Kubernetes, Nginx, Prometheus, Git, CI/CD (GitHub Actions)                                        |

---

## 경력 사항

### 인피닉(infiniq - AI Studio) — 2023.04 ~ 현재 (약 3년 1개월)

**웹 풀스택 개발자**

#### 전장 정보 편집기 | 2025.12 ~ 현재

> 프론트엔드 개발 · 아키텍처 설계 (브라우저 기반 전장정보 편집기 · 공통작전상황도)

- v1에서 Vue 컴포넌트가 OpenLayers SDK를 직접 참조하면서 규격 변경마다 전체 수정이 필요했던 문제를 → **Provider(Facade) + Manager/Renderer** 레이어로 외부 의존을 한 축에 격리, Screen 1~3이 동일 패턴으로 확장 가능하도록 재설계
- 3개 맵 화면을 전환할 때마다 타일·심볼이 재로드되어 UX 단절이 생기는 문제를 → **vue-router keep-alive + 뷰별 샤딩 Pinia 상태**로 인스턴스를 유지, 화면 전환을 즉시 응답 수준으로 개선
- 수백 개 SVG 심볼 배치 환경에서 화면 이동마다 재생성이 일어나는 병목을 → 프로파일링으로 특정 후 **LRU SVG 캐시(120)** 도입, 동일 심볼 즉시 반환으로 지도 인터랙션 지연 해소
- 드로잉 중 미리보기와 확정 데이터가 같은 레이어에 섞여 취소 시 잔상이 남거나 잘못된 GeoJSON이 전송되는 리스크를 → **Draw → 미리보기 → GeoJSON Commit** 단방향 파이프라인으로 분리, 규격 정합성 확보
- ORBAT 편성표 노드를 지도에 드롭할 때 배치 모드 전환 타이밍이 충돌해 인터랙션이 깨지는 문제를 → **드래그 시작~드롭 구간에만 배치 모드를 한정 활성화** 후 즉시 복귀하는 방식으로 해결, 레이어 가시성·편집 권한(assignment / rule)으로 화면별 뷰 표현
- LRU 키 조합·Draw 취소 순서 같은 구현 디테일이 PR·이슈에만 남아 맥락이 사라지는 문제를 → 모듈 README·ADR·시퀀스 다이어그램·온보딩 체크리스트로 공개 계약과 내부 구현 경계를 저장소에 문서화
- **기술:** Vue 3 · OpenLayers 10 · MIL-STD-2525D · Vue Flow · Turf.js · Tailwind CSS 4 · Pinia

#### 3D 전장 상황 인지 시스템 | 2025.06 ~ 2025.11

> 풀스택 개발 (Cesium 기반 C4I)

- AI 분석 모델 호출이 수 분씩 걸려 동기 HTTP로 붙이면 API 스레드 전체가 묶이는 문제를 → **세션 키 기반 콜백 + WebSocket STOMP 비동기 푸시**로 분리, API는 요청 접수까지만 책임지고 결과는 지휘 화면에 실시간 반영
- 지휘·관리·현장 클라이언트가 같은 도메인 모델을 쓰면서도 배포·권한·성능 경계가 달라야 하는 요구를 → **Spring Boot 3 멀티모듈(main-api / admin-api / common)** + MapStruct DTO-VO로 계층 계약을 컴파일 타임에 고정
- 현장 단말은 네트워크 단절 상황에서도 동작해야 하는데 PostgreSQL 전체를 내려줄 수 없는 제약을 → **필요한 테이블만 SQLite로 선택적 동기화**해 용량·유출 범위를 줄이고 오프라인 연속성 확보
- 3개 Vue 3 클라이언트(지휘 PrimeVue / 관리 PrimeVue / 현장 Quasar)를 같은 도메인 타입·API 스키마 위에서 병렬 개발, 드론·LiDAR 장비 HLS 영상을 지휘 화면에 통합
- **기술:** Vue 3 · Cesium 1.128 · PrimeVue 4 · Quasar 2 · Spring Boot 3.3 · PostgreSQL · WebSocket(STOMP) · HLS.js · Docker

#### 지능형 영상 비식별화 플랫폼 | 2024.04 ~ 2025.05

> 풀스택 개발 · AI 모델 바인딩 및 파이프라인 통합

- GPU 추론이 수 분씩 걸려 동기 HTTP로 연결하면 모델 하나의 지연이 전체 파이프라인을 블로킹하는 문제를 → **RabbitMQ 모델별 큐 분리**로 재설계, API는 큐 투입 시점까지만 책임져 응답 시간을 일정하게 유지 (YOLOv8·Stable Diffusion·BYTETracker 등 5개 모델 병렬 처리)
- Python 워커가 늘어날수록 상태를 Spring Boot로 역전송하는 콜백 엔드포인트가 난립하는 문제를 → **Redis Pub/Sub → Spring → WebSocket STOMP 단일 경로**로 단순화, 사용자에게 처리 진행률·완료 이벤트 실시간 반영
- 대용량 파일 SFTP 전송과 로컬 편집이 동시에 필요한 현장 환경을 → **Electron 메인 프로세스에 SFTP·SQLite·FFmpeg 책임을 집중**하고, `isElectron()` 분기로 웹과 동일한 Vue 3 코드베이스 유지 (하이브리드 전략)
- 자동 AI 처리와 수동 비식별화 편집이 상태·로컬 저장을 공유해야 하는 요구를 → **Spring Boot 3 멀티모듈(front_api / back_api / common)** 위에서 캔버스 기반 영역 선택 편집기를 동일 도메인 모델로 통합
- **기술:** Vue 3 · Electron 30 · Spring Boot 3.2 · Python · RabbitMQ · Redis · YOLOv8 · Stable Diffusion · Docker

#### AI 학습 데이터 관리 플랫폼 | 2023.04 ~ 2024.03

> 풀스택 개발 (첫 직장 · 입문 프로젝트)

- SFTP·RTSP·LLM API 등 수집 경로마다 처리 시간과 실패 방식이 달라 동기 파이프라인으로는 하나의 지연이 전체를 멈추는 문제를 → **RabbitMQ 큐로 단계를 분리**, Java/Python 워커가 같은 큐 계약 위에서 독립 처리 (7종 작업 자동화)
- 운영 메타(관계형)와 LLM 정제 결과·API 산출물(비정형)을 한 스키마에 억지로 넣으면 인덱스 전략이 충돌하는 문제를 → **MariaDB(정형 메타) + MongoDB(비정형 산출) 하이브리드**로 각 DB의 강점을 데이터 특성에 맞게 분리 적용
- JSP 기반 레거시 화면과 JWT REST API 신규 기능이 같은 도메인 모델을 공유해야 하는 제약을 → **resource_front_web / resource_api / resource_consumer / resource_common_lib 4 모듈**로 분리, 공통 라이브러리로 도메인 규칙을 단일 출처로 강제
- Java 파이프라인과 Python OpenCV 워커가 언어·프로세스 경계를 넘어 협력해야 하는 요구를 → **동일 RabbitMQ 큐 계약(메시지 스펙·포맷)으로 결합**, 언어 의존 없이 플러그인 단위로 처리 단계 추가 가능하게 설계
- **기술:** Spring Boot 2.7 · JSP / jQuery · MyBatis · MariaDB · MongoDB · RabbitMQ · Python · Docker

---

## 개인 프로젝트

### dev-blog — 개인 기술 블로그 | 2026.02 ~ 현재

> 배포: https://dev-blog-snowy-alpha.vercel.app/

- Sandpack·Mermaid·커스텀 컴포넌트를 MDX 전환 없이 삽입하려면 Markdown 파이프라인 자체를 확장해야 했고 → unified에서 커스텀 블록을 **추출 → 토큰화 → HTML 플레이스홀더 재주입**하는 방식을 직접 설계해 Git 친화적 작성 흐름 유지
- 인터랙티브 블록을 서버 HTML 생성 시점에 섞으면 hydration·CLS가 깨지는 문제를 → **글은 서버 컴포넌트 정적 경로, 동적 블록은 클라이언트 재주입**으로 경계를 분리해 TTFB와 SEO를 함께 확보
- 댓글은 동적 데이터이지만 글 전체를 클라이언트로 가져가면 TTFB가 나빠지는 문제를 → **Prisma + PostgreSQL + Server Actions + 경로 캐시 무효화**로 글과 댓글의 렌더링 경계를 독립적으로 설계
- 예제 코드와 본문 설명이 어긋나면 신뢰가 떨어진다는 판단 아래 → **예제 소스 폴더 + Vitest**로 글 주제와 코드를 짝지어 드리프트를 방지
- **기술:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Prisma · PostgreSQL · Vitest · Sandpack

### e-commerce MSA — 이커머스 마이크로서비스 | 2026.01 ~ 현재

> 팀스파르타 교육 **최종 과제** 착수 후, 게이트웨이·도메인·이벤트·배포를 스스로 보완하는 **개인 레퍼런스**로 유지

- 클라이언트가 서비스마다 다른 호스트를 알면 CORS·토큰·운영이 지옥이 되는 문제를 → **Spring Cloud Gateway 단일 진입점**에서 JWT·Redis 횡단 관심사를 처리하고, Aggregation API로 서비스 간 조합을 외부에 단일 인터페이스로 노출
- 주문·결제는 즉시 일관성, 취소·환불은 느슨한 결합이 필요한 성격 차이를 → **Feign(동기) + Kafka 이벤트(비동기)** 혼합으로 각 흐름의 특성에 맞는 처리 패턴 분리, Saga 보상 트랜잭션으로 분산 일관성 직접 구현·검증
- "로컬에서만 되는 MSA"는 의미가 없다는 판단 아래 → **Docker/K8s + GitHub Actions → GHCR + TestContainers**로 배포·테스트 전제를 운영 환경과 동일하게 맞추고, ngrok으로 외부 결제 웹훅 콜백까지 로컬에서 검증
- **기술:** Spring Boot 3.2 · Spring Cloud Gateway · Kafka · Redis · React 19 · Kubernetes · Docker · GitHub Actions

---

## 문제 해결 사례

### 사례 1: 수백 개 오브젝트 렌더링 지연 — Root Cause 추적

**상황** — 지도 편집기에서 수백 개의 SVG 심볼을 동시에 배치할 때 화면 이동·확대 시마다 심볼을 재생성하여 눈에 띄는 렌더링 지연이 발생했습니다.

**접근** — "느리다"는 증상 뒤에서 실제 병목을 먼저 측정했습니다. Profiling 결과 SVG 생성 자체가 반복 호출되는 것이 원인이었습니다. LRU 알고리즘 기반 캐시(최대 120개)를 도입해 동일 심볼은 즉시 반환하도록 하고, keep-alive로 맵 화면 전환 시 컴포넌트 재마운트 비용도 제거했습니다.

**결과** — 반복 렌더링 시 심볼 생성 비용을 대폭 절감하여 지도 인터랙션이 눈에 띄게 부드러워졌으며, 레이어 전환 속도도 개선되었습니다.

### 사례 2: AI 추론 파이프라인 비동기 처리 안정성 확보

**상황** — 지능형 영상 비식별화 플랫폼에서 AI 추론 모델(YOLOv8, Stable Diffusion 등) 호출이 동기 방식으로 연결되어, 한 모델 지연이 전체 처리 흐름을 블로킹하는 문제가 있었습니다.

**접근** — 모델별 RabbitMQ 큐를 분리하고, Python Consumer가 각 큐를 독립적으로 처리하도록 재설계했습니다. 처리 상태는 Redis Pub/Sub로 Spring Boot 서버에 전달하고, 서버에서 **웹소켓**으로 클라이언트에 실시간 반영하는 3-tier 비동기 파이프라인을 구축했습니다.

**결과** — 특정 모델의 지연이 다른 모델 처리에 영향을 주지 않게 되었고, 사용자는 처리 진행률을 실시간으로 확인할 수 있어 UX도 함께 개선되었습니다.

---

## 협업 경험

현 직장에서 1~3명 규모의 소규모 팀으로 프로젝트를 진행해 왔습니다. 인원이 적은 만큼 프론트엔드·백엔드 경계 없이 필요한 영역을 담당하고, 기획·디자이너·AI 연구팀과 직접 소통하며 요구사항을 구현으로 연결하는 경험을 쌓았습니다.

- 아키텍처 변경 사항은 다이어그램과 문서로 정리해 팀 내 공유하고 리뷰를 요청하는 방식으로 의사결정 투명성을 유지
- AI 연구팀과의 협업 시, 추론 모델의 입출력 스펙을 문서화·버전 관리하여 인터페이스 변경 시 혼선을 최소화
- 팀스파르타 교육 과정에서는 Git Flow 브랜치 전략과 코드 리뷰 문화를 적용하고, 역할 분담·진척 공유를 위한 데일리 스크럼을 주도
- MSA 프로젝트에서 CLAUDE.md 하네스 · 자동 검증 훅 4종 · 커스텀 커맨드 6종 · 전문 에이전트 3종으로 이루어진 AI 개발 시스템을 직접 설계해, 새 팀 합류 시 3일 이내에 팀 패턴을 AI 컨텍스트에 인코딩하고 팀 전체 속도를 높이는 방식으로 기여할 수 있습니다

작은 팀에서 넓은 역할을 담당하다 보니 스스로 판단하고 실행하는 자율성이 강해졌고, 동시에 팀원의 컨텍스트를 빠르게 이해하고 맞춰가는 유연성도 키웠습니다.

---

## 기타 경력

| 기간              | 회사·기관          | 직무·활동                      | 비고      |
| ----------------- | ------------------ | ------------------------------ | --------- |
| 2023.01 ~ 2023.02 | 대원씨앤씨         | 인턴사원                       | 2개월     |
| 2020.03 ~ 2021.10 | 이앤드엠인터내셔널 | PC/채굴 장비 세팅 및 서버 관리 | 1년 8개월 |

---

## 교육 및 자격

| 기간              | 학교·과정명                                 | 학위·구분 | 상태          |
| ----------------- | ------------------------------------------- | --------- | ------------- |
| 2022.06 ~ 현재    | 학점은행제 · 컴퓨터공학과                   | 학사      | 4학년 재학 중 |
| 2025.10 ~ 2026.02 | 팀스파르타 · Spring Cloud MSA 과정          | 수료      | 수료          |
| 2022.03 ~ 2022.12 | 더조은아카데미학원 · Java 기반 웹 개발 교육 | 수료      | 수료          |
| 2012.03 ~ 2015.02 | 서울영상고등학교 · 영상경영학과             | 졸업      | 졸업          |

### 병역

- 군필 — 육군 만기 전역 (2017.06 ~ 2019.02)

### 자격증

- SQL 개발자, 2022.06 (한국데이터산업진흥원)
