---
title: "지능형 영상 비식별화 플랫폼"
slug: "vision-factory"
summary: "AI 기술을 접목한 얼굴/번호판 자동 탐지 및 비식별화 처리 플랫폼. 비디오와 이미지에서 개인정보를 자동으로 감지하고 블러/교체 처리하는 엔터프라이즈 SaaS 서비스입니다."
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
category: "fullstack"
---

## 왜 이 프로젝트인가

엔터프라이즈 비식별화는 **정확도**와 **처리 시간(수 분~수십 분)**, **테넌트 격리**가 동시에 걸린다. 브라우저만으로는 대용량·SFTP·로컬 편집까지 커버하기 어렵기 때문에 **Electron + 이벤트 파이프라인**을 전제로 제품을 설계했다.

## 내가 풀려던 문제

1. GPU 추론은 **API 응답 시간과 분리**되어야 한다 — 동기 HTTP로 워커를 붙잡으면 전부가 느려진다.
2. Python 워커가 늘어날수록 **콜백 엔드포인트 난립**이 생기므로, 실시간 UI로 가는 길을 단순화해야 한다.
3. “완전 자동”과 “사람이 보정”을 **같은 제품**에서 전환할 수 있어야 한다.

## 접근과 결과 (요약)

- **RabbitMQ로 단계형 파이프라인**을 만들고, API는 작업을 큐에 넣는 데서 빠르게 끝낸다.
- 워커 → **Redis Pub/Sub** → Spring → **실시간 메시지**로 진행률을 푸시해 폴링 없이 신뢰를 만든다.
- **Electron 메인 프로세스**에서 SFTP·SQLite·FFmpeg를 처리하고, 백오피스는 가벼운 웹으로 분리했다.

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
