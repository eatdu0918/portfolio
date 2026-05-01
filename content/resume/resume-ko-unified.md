---
title: 통합 이력서 (팀스파르타)
order: 0
name: 이두현
role: 웹 풀스택 개발자 · 경력 약 3년 1개월
email: eatdu0918@gmail.com
phone: 010-8310-1753
github: https://github.com/eatdu0918
portfolio: http://3.106.133.249:8082
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

- OpenLayers 10 + MIL-STD-2525D로 NATO 표준 **부대 심볼·전술 그래픽**을 한 제품에서 다루는 렌더링·파이프라인 설계
- Provider(Facade) + Manager/Renderer로 지도·심볼·그래픽 결합도를 낮추고, Screen 1~3을 동일 패턴으로 확장
- OpenLayers **3개 독립 맵** + 라우터 keep-alive로 인스턴스·타일·심볼 상태 유지
- **이중 렌더러 + LRU SVG 캐시(120)** 로 대량 심볼 반복 배치 구간 성능 확보
- 전술 그래픽 **Draw → 미리보기 → GeoJSON** 단방향 파이프라인으로 UX·규격 경로 분리
- Vue Flow **ORBAT**와 지도 배치 모드 연동, 레이어 **가시성·편집 권한(assignment / rule)** 으로 화면별 작전 뷰 표현
- 지도 캡처·Excel 내보내기, 퍼사드 공개 계약·멀티 맵 상태·그래픽 시퀀스 등 **기술 문서** 정리
- **기술:** Vue 3 · OpenLayers 10 · MIL-STD-2525D · Vue Flow · Turf.js · Tailwind CSS 4 · Pinia

#### 3D 전장 상황 인지 시스템 | 2025.06 ~ 2025.11

> 풀스택 개발 (Cesium 기반 C4I)

- Cesium 3D 지도 기반 실시간 작전 상황판 구현 (부대 배치, 기동로, 타격범위 시각화)
- AI 이동로·타격범위 분석 모델 API 연동 및 서비스 바인딩 (비동기 콜백 패턴, GeoTIFF 오버레이)
- WebSocket STOMP 기반 실시간 GPS 위치 추적 및 상황 공유, 엣지 장비(드론/LiDAR) HLS 스트리밍 연동
- Spring Boot 3 멀티모듈(main-api / admin-api / common) RESTful API 설계, MapStruct 기반 DTO-VO 자동 변환
- PostgreSQL → SQLite 엣지 DB 동기화 기능 구현, 3개 Vue 3 클라이언트(지휘 Main / 관리 Admin / 현장 Edge) 동시 개발
- **기술:** Vue 3 · Cesium 1.128 · PrimeVue 4 · Quasar 2 · Spring Boot 3.3 · PostgreSQL · WebSocket(STOMP) · HLS.js · Docker

#### 지능형 영상 비식별화 플랫폼 | 2024.04 ~ 2025.05

> 풀스택 개발 · AI 모델 바인딩 및 파이프라인 통합

- 마이크로서비스 기반 **5개 AI 추론 모델**(YOLOv8, Stable Diffusion, BYTETracker 등) 바인딩 및 Consumer 파이프라인 설계
- RabbitMQ + Redis Pub/Sub 이벤트 드리븐 아키텍처로 실시간 처리 상태 관리, **웹소켓** 기반 진행률·완료 알림
- Electron + Vue 3 크로스플랫폼 데스크톱 앱(SFTP 파일 전송, SQLite 로컬 DB), **수동 비식별화**(캔버스 기반 영역 선택)
- Spring Boot 3 멀티모듈(사용자 API · 관리 API · 공통 모듈) 아키텍처 설계 및 구현
- ONNX Runtime + TensorRT GPU 가속 추론 최적화, 다국어(한·영·일) 지원
- **기술:** Vue 3 · Electron 30 · Spring Boot 3.2 · Python · RabbitMQ · Redis · YOLOv8 · Stable Diffusion · Docker

#### AI 학습 데이터 관리 플랫폼 | 2023.04 ~ 2024.03

> 풀스택 개발 (첫 직장 · 입문 프로젝트)

- 플러그인 기반 데이터 처리 파이프라인 아키텍처 설계 (Import / Transform / Export / Profile)
- RabbitMQ 비동기 메시지 큐로 **7종** 데이터 처리 작업 자동화 (SFTP Import/Export, 비디오→이미지, JSONL→텍스트, 비식별화 등)
- 외부 LLM 연동 텍스트 정제 도구 및 Model API 바인딩/피드백 시스템 구현
- MariaDB + MongoDB 하이브리드 저장(관계형 메타 + 비정형 텍스트/API 데이터), **Apache Tiles** 로 관리자/작업자 UI 분리
- **CCTV RTSP** 수집기 Docker 컨테이너 원격 실행·모니터링
- Spring Boot 멀티 프로젝트 **공통 라이브러리**(웹 · 소비자 · API 공유 모듈) 설계
- **기술:** Spring Boot 2.7 · JSP / jQuery · MyBatis · MariaDB · MongoDB · RabbitMQ · Python · Docker

---

## 개인 프로젝트

### dev-blog — 개인 기술 블로그 | 2026.02 ~ 현재

> 배포: https://dev-blog-snowy-alpha.vercel.app/

- Next.js 16 App Router, React 19, TypeScript로 개인 기술 블로그 구축 및 Vercel 배포
- 파일 시스템 기반 Markdown을 unified(remark/rehype)로 확장 — Sandpack 인라인 실행, Mermaid, 커스텀 컴포넌트를 본문에 삽입(플레이스홀더 재주입 패턴)
- Prisma + PostgreSQL + Server Actions로 댓글 처리(Server Actions·경로 캐시 무효화), Vitest·Testing Library 단위 테스트
- **기술:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Prisma · PostgreSQL · Vitest · Sandpack

### e-commerce MSA — 이커머스 마이크로서비스 | 2026.01 ~ 현재

> 팀스파르타 교육 **최종 과제** 착수 후, 게이트웨이·도메인·이벤트·배포를 스스로 보완하는 **개인 레퍼런스**로 유지

- Spring Cloud Gateway 단일 진입점, 서비스별 MySQL, Kafka 이벤트·보상 트랜잭션(Saga 범위) 이커머스 MSA 설계·구현
- Aggregation API 등 게이트웨이·서비스 간 조합 패턴 적용, Blue/Green 기반 클라이언트 배포 전략
- React 19(Vite 7) 주문·상품 클라이언트, PortOne/Toss Payments SDK 결제 연동, **ngrok** 으로 로컬 게이트웨이 공개·웹훅·외부 콜백 검증
- Docker + Kubernetes + GitHub Actions → GHCR CI/CD 파이프라인 구성, TestContainers 통합 테스트
- **기술:** Spring Boot 3.2 · Spring Cloud Gateway · Kafka · Redis · React 19 · Kubernetes · Docker · GitHub Actions

---

## 지원 동기

기능 요청을 받았을 때 가장 먼저 하는 일은 "왜 이게 필요한가"를 묻는 것입니다. 3년여간 복잡한 시스템을 설계하면서, 증상이 아닌 Root Cause를 찾아야 구조가 버틴다는 것을 반복해서 확인했습니다.

이 방식이 어느 도메인에서나 통한다고 생각합니다. 파이프라인 블로킹의 원인을 동기 구조에서 찾아 RabbitMQ 큐를 분리하는 결정, 렌더링 지연을 SVG 생성 비용으로 추적해 LRU 캐시를 도입한 결정 모두 도메인 지식보다 문제를 구조적으로 보는 시각에서 나왔습니다.

새 팀에 합류할 때 제가 제일 먼저 할 일은 팀의 언어로 CLAUDE.md를 작성하는 것입니다. 코드 컨벤션, 서비스 경계, 금지 패턴을 AI 컨텍스트에 인코딩해 팀 전체의 속도를 높이는 방식으로 빠르게 기여하고 싶습니다.

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
