---
title: "Heidi - 영상/이미지 비식별화 SaaS"
slug: "heidi"
summary: "AI 기술을 접목한 얼굴/번호판 자동 탐지 및 비식별화 처리 플랫폼. 비디오와 이미지에서 개인정보를 자동으로 감지하고 블러/교체 처리하는 엔터프라이즈 SaaS 서비스입니다."
period: "2024.01 - 2025.06"
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
  frontend: ["Vue 3", "Electron 30", "PrimeVue 4", "Tailwind CSS", "Pinia", "SockJS/STOMP", "vue-i18n"]
  backend: ["Spring Boot 3.2", "Spring Security", "JWT (HS512)", "MyBatis", "JPA", "WebSocket STOMP"]
  infrastructure: ["RabbitMQ", "Redis", "MariaDB", "Docker", "Prometheus/Micrometer"]
  ai: ["YOLOv8 (바인딩)", "BYTETracker (연동)", "ONNX Runtime", "TensorRT", "Stable Diffusion 1.5 (바인딩)", "ControlNet", "IP-Adapter-FaceID", "ODTrack", "SPIGA"]
highlights:
  - "마이크로서비스 기반 5개 AI 추론 모델 바인딩 및 Consumer 파이프라인 설계/구현"
  - "RabbitMQ + Redis Pub/Sub 이벤트 드리븐 아키텍처로 실시간 처리 상태 관리"
  - "WebSocket STOMP 기반 실시간 처리 진행률 및 완료 알림 시스템"
  - "Electron + Vue 3 크로스플랫폼 데스크톱 앱 (SFTP 파일 전송, SQLite 로컬 DB)"
  - "Spring Boot 3 멀티모듈 아키텍처 (front_api / back_api / common)"
  - "ONNX Runtime + TensorRT 추론 최적화를 통한 GPU 가속 서비스 구축"
  - "수동 비식별화 편집 기능 (이미지/비디오 캔버스 기반 영역 선택)"
  - "다국어 지원 (한국어, 영어, 일본어)"
order: 1
featured: true
category: "fullstack"
---

## 프로젝트 개요

Heidi는 영상 및 이미지에서 개인정보(얼굴, 번호판)를 AI 모델로 자동 탐지하고 비식별화(블러/교체) 처리하는 엔터프라이즈 SaaS 플랫폼입니다.

사용자가 파일을 업로드하면 연동된 **AI 추론 파이프라인**이 자동으로 객체를 탐지하고, 선택한 방식(블러 또는 합성 교체)으로 비식별화를 수행합니다. 전체 과정은 WebSocket을 통해 실시간으로 진행률이 전달됩니다.

### 주요 기능

- **자동 비식별화**: YOLOv8 기반 얼굴/번호판 탐지 및 블러/AI 합성 교체 바인딩
- **수동 비식별화**: 사용자가 캔버스에서 직접 영역을 지정하여 블러 처리
- **비디오 트래킹**: 제로샷 객체 트래킹 모델 연동을 통한 프레임 간 일관성 유지
- **배치 처리**: 대량 파일 일괄 업로드 및 처리
- **실시간 모니터링**: WebSocket 기반 처리 진행률 실시간 표시
- **다국어 지원**: 한국어, 영어, 일본어
- **크로스플랫폼**: Electron 기반 데스크톱 앱 + 웹 백오피스

### 나의 역할

프론트엔드(Vue 3 + Electron), 백엔드(Spring Boot 3), 그리고 AI 모델 바인딩을 위한 Python Consumer 영역까지 전 영역에 걸친 풀스택 개발을 담당했습니다. 오픈소스 AI 모델들을 실제 서비스 환경에 맞게 통합하고, 안정적인 추론 파이프라인 아키텍처를 설계하여 배포했습니다.

