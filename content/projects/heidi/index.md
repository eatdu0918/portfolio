---
title: "Heidi - 영상/이미지 비식별화 SaaS"
slug: "heidi"
summary: "AI 기술을 접목한 얼굴/번호판 자동 탐지 및 비식별화 처리 플랫폼. 비디오와 이미지에서 개인정보를 자동으로 감지하고 블러/교체 처리하는 엔터프라이즈 SaaS 서비스입니다."
period: "2024.04 - 2025.05"
role: "풀스택 개발 + AI 모델 바인딩 및 파이프라인 통합"
thumbnail: "/images/projects/heidi/image_deident.png"
gallery:
  - src: "/images/projects/heidi/image_deident.png"
    alt: "이미지 비식별화"
  - src: "/images/projects/heidi/video_deident.png"
    alt: "영상 비식별화"
  - src: "/images/projects/heidi/keyword_search.png"
    alt: "키워드 검색"
  - src: "/images/projects/heidi/point_management.png"
    alt: "포인트 관리"
  - src: "/images/projects/heidi/timeline_tracking.png"
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
  - "ONNX Runtime + TensorRT 추론 최적화를 통한 GPU 가속 서비스 구축"
  - "수동 비식별화 편집 기능 (이미지/비디오 캔버스 기반 영역 선택)"
  - "다국어 지원 (한국어, 영어, 일본어)"
order: 1
featured: true
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

## 상세는 탭에서

- **아키텍처**: REST / 실시간 메시징 / RabbitMQ / Redis의 역할 분담
- **프론트엔드**: Electron IPC, 실시간 구독, 수동 편집 UX
- **백엔드**: 멀티모듈 API, 인증·테넌트, 메시징 연계
- **AI/ML**: Consumer별 목적·GPU/CPU 분리

## 나의 역할

**Vue 3 + Electron, Spring Boot 3, Python Consumer**까지 포함한 풀스택으로 파이프라인을 설계·구현했다. 오픈소스 모델을 **운영 가능한 형태**로 묶는 데 집중했다.

