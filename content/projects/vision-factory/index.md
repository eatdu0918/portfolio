---
title: "지능형 영상 비식별화 플랫폼"
slug: "vision-factory"
summary: "Vue 3 · Electron · Spring Boot 3 풀스택 미디어 처리 플랫폼. RabbitMQ 큐 분리 · Redis Pub/Sub · WebSocket 3-tier 비동기 파이프라인으로 AI 추론 모델 5개를 동시에 구동하고, Electron 데스크톱에서 SFTP 파일 전송 · 캔버스 수동 편집 · 오프라인 SQLite 저장까지 하나의 흐름으로 엮었습니다."
period: "2024.04 - 2025.05"
role: "풀스택 개발 + AI 모델 바인딩 및 파이프라인 통합"
thumbnail: "/images/projects/vision-factory/image_deident.png"
gallery:
  - src: "/images/projects/vision-factory/image_deident.png"
    alt: "이미지 비식별화"
  - src: "/images/projects/vision-factory/video_deident.png"
    alt: "영상 비식별화"
  - src: "/images/projects/vision-factory/keyword_search.png"
    alt: "키워드 검색"
  - src: "/images/projects/vision-factory/point_management.png"
    alt: "포인트 관리"
  - src: "/images/projects/vision-factory/timeline_tracking.png"
    alt: "타임라인 추적"
tags: ["Vue 3", "Spring Boot 3", "Python", "YOLOv8", "RabbitMQ", "Redis", "Electron", "Docker"]
techStack:
  frontend: ["Vue 3", "Electron 30", "PrimeVue 4", "Tailwind CSS", "Pinia", "웹소켓 메시징", "vue-i18n"]
  backend: ["Spring Boot 3.2", "Spring Security", "JWT (HS512)", "MyBatis", "JPA", "실시간 웹소켓"]
  infrastructure: ["RabbitMQ", "Redis", "MariaDB", "Docker", "Prometheus/Micrometer"]
  ai: ["YOLOv8 (바인딩)", "BYTETracker (연동)", "ONNX Runtime", "TensorRT", "Stable Diffusion 1.5 (바인딩)", "ControlNet", "IP-Adapter-FaceID", "ODTrack", "SPIGA"]
highlights:
  - "마이크로서비스 기반 5개 AI 추론 모델 바인딩 및 Consumer 파이프라인 설계/구현"
  - "RabbitMQ + Redis Pub/Sub 이벤트 드리븐 아키텍처로 실시간 처리 상태 관리"
  - "웹소켓 기반 실시간 처리 진행률 및 완료 알림 시스템"
  - "Electron + Vue 3 크로스플랫폼 데스크톱 앱 (SFTP 파일 전송, SQLite 로컬 DB)"
  - "Spring Boot 3 멀티모듈(사용자 API·관리 API·공통 모듈)"
  - "수동 비식별화 편집 기능 (이미지/비디오 캔버스 기반 영역 선택)"
  - "다국어 지원 (한국어, 영어, 일본어)"
order: 4
featured: true
aiGenerated: true
workType: company
category: fullstack
---

## 왜 이 프로젝트인가

**대용량 미디어 처리**는 분 단위 이상의 GPU 추론이 필연이라, 동기 HTTP·단일 브라우저 모델로는 응답 시간·파일 전송·로컬 편집을 한 번에 커버할 수 없다. 그래서 **Vue 3 + Electron 클라이언트**와 **Spring Boot 3 멀티모듈 API**, **RabbitMQ·Redis·WebSocket 기반 이벤트 파이프라인**을 처음부터 한 세트로 설계했다.

## 내가 풀려던 문제

1. GPU 추론은 **API 응답 시간과 분리**되어야 한다 — 동기 HTTP로 워커를 붙잡으면 전체 요청 스레드가 묶인다.
2. Python 워커가 늘어날수록 **콜백 엔드포인트 난립**이 생기므로, 실시간 UI로 가는 경로를 하나의 메시지 계약으로 단순화해야 한다.
3. 같은 앱 안에서 **자동 처리**와 **사용자 수동 편집**이 상태·로컬 저장을 공유해야 한다.

## 접근과 결과 (요약)

- **RabbitMQ 단계형 큐**로 추론 파이프라인을 구성하고, API는 작업을 큐에 넣는 지점까지만 책임져 응답 시간을 일정하게 유지했다.
- 워커 → **Redis Pub/Sub** → Spring → **WebSocket STOMP**로 진행률·완료 이벤트를 푸시해 폴링 없이 UI를 갱신했다.
- **Electron 메인 프로세스**에 SFTP·SQLite·FFmpeg 책임을 두고, 렌더러는 `isElectron()` 분기로 웹과 동일한 Vue 3 코드베이스를 유지했다.
- **Spring Boot 3 멀티모듈(front_api·back_api·common)** 로 사용자 API와 관리 API를 분리하고 Spring Security·JWT로 인증을 통일했다.

## 제품 관점에서의 가치

고객사는 **배치 처리와 실시간 진행률**을 동시에 원하고, 운영팀은 **웹 백오피스**로 테넌트를 관리한다. 개발팀은 언어·프로세스가 다른 구성요소를 **메시지 계약**으로 묶어 확장할 수 있다.

## 세부 문서

- **아키텍처**: 이벤트·큐·API·워커 경계
- **프론트엔드**: Vue·Electron·실시간 진행 UI
- **백엔드**: Spring Boot·보안·메시징 연동
- **AI/ML 파이프라인**: 컨슈머·모델 바인딩·큐 분리

## 상세 설명 및 주요 특징

### 1. 실시간 이벤트 기반 처리 아키텍처
본 플랫폼은 수 분에서 수십 분이 소요되는 대용량 영상 처리의 특성을 고려하여, **비동기 이벤트 드리븐 방식**을 채택했습니다. 사용자가 영상 업로드를 완료하면 RabbitMQ를 통해 즉시 작업이 할당되며, 처리가 완료될 때까지 브라우저를 붙잡지 않고 백그라운드에서 모든 공정이 진행됩니다.

### 2. 하이브리드 클라이언트 전략 (Web + Electron)
대용량 파일 전송(SFTP)과 로컬 시스템 자원 활용(FFmpeg, SQLite)이 필수적인 작업 환경을 위해 **Electron 데스크톱 앱**을 제공합니다. 반면, 관리 계정이나 이력 조회와 같은 범용 기능은 웹 브라우저에서도 동일하게 접근 가능한 하이브리드 구조를 통해 운영 효율성을 극대화했습니다.

### 3. 고도화된 AI 파이프라인 연동
단순히 하나의 모델을 사용하는 것이 아니라, **객체 탐지(Detection), 추적(Tracking), 생성형 AI(Generative AI)를 이용한 교체** 등 5가지 이상의 AI 기능을 파이프라인 형태로 연결했습니다. 특히 수동 비식별화 단계에서는 제로샷(Zero-shot) 트래킹 기술을 적용하여 실무자의 작업 시간을 획기적으로 단축했습니다.

## 담당 역할 및 기여

**시스템 전체 아키텍처 설계 및 구현을 주도**했습니다. Vue 3 기반 프론트엔드와 Electron 데스크톱 앱 개발, Spring Boot 백엔드 아키텍처 설계, Python 기반 AI 컨슈머 연동까지 풀스택 역할을 수행하며, 기술 스택 간의 데이터 계약(Data Contract) 정립을 통해 시스템 안정성을 확보했습니다.
