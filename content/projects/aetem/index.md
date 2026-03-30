---
title: "AETEM - AI 기술 접목 군사 지휘통제 시스템"
slug: "aetem"
summary: "Cesium 3D 지도 기반의 군사 작전 지휘통제 플랫폼. 국면/부대/무기/환경 관리, AI 모델 바인딩을 통한 이동로/타격범위 분석, 엣지 장비(드론/LiDAR) 연동, 실시간 WebSocket 상황 공유까지 지원하는 C4I 시스템입니다."
period: "2024.06 - 2025.03"
role: "풀스택 개발"
thumbnail: "/images/projects/aetem/battlefield_overview.png"
gallery:
  - src: "/images/projects/aetem/battlefield_overview.png"
    alt: "전장 개요 (3D 작전 상황판)"
  - src: "/images/projects/aetem/optimal_path.png"
    alt: "AI 최적 이동로 분석"
  - src: "/images/projects/aetem/terrain_analysis.png"
    alt: "지형 분석"
  - src: "/images/projects/aetem/unit_info.png"
    alt: "부대 정보 패널"
  - src: "/images/projects/aetem/unit_settings.png"
    alt: "부대 설정"
tags: ["Vue 3", "Cesium", "Spring Boot 3", "PostgreSQL", "WebSocket", "Quasar", "HLS", "Docker"]
techStack:
  frontend: ["Vue 3", "PrimeVue 4", "Quasar 2", "Pinia", "Cesium 1.128", "HLS.js", "SockJS/STOMP"]
  backend: ["Spring Boot 3.3", "Spring Security", "JWT (HS256)", "MyBatis", "MapStruct", "Ehcache"]
  infrastructure: ["PostgreSQL", "SQLite (Edge)", "WebSocket STOMP", "Docker", "Nginx"]
  ai: ["이동로 분석 API 바인딩 (GeoTools/JTS)", "타격범위 분석 API 바인딩 (GeoTIFF)", "MGRS 군사좌표", "proj4 좌표변환"]
highlights:
  - "Cesium 3D 지도 기반 실시간 작전 상황판 구현 (부대 배치, 기동로, 타격범위 시각화)"
  - "AI 이동로 분석 및 타격범위 분석 모델 API 연동 및 서비스 바인딩 (비동기 콜백 패턴)"
  - "WebSocket STOMP 기반 실시간 GPS 위치 추적 및 상황 공유"
  - "엣지 장비(드론/LiDAR) HLS 스트리밍 영상 연동 및 원격 제어"
  - "PostgreSQL → SQLite 엣지 DB 동기화 기능 구현"
  - "Spring Boot 3 멀티모듈 (main-api / admin-api / common) RESTful API 설계"
  - "MapStruct 기반 DTO-VO 자동 변환으로 레이어 간 타입 안전성 확보"
  - "3개 Vue 3 클라이언트 (지휘용 Main, 관리용 Admin, 현장용 Edge) 동시 개발"
order: 3
featured: true
category: "fullstack"
---

## 프로젝트 개요

AETEM은 AI 기술을 접목한 군사 작전 지휘통제(C4I) 시스템입니다. 지휘관이 3D 지도에서 작전 상황을 실시간으로 파악하고, 연동된 AI 분석 결과를 기반으로 의사결정을 지원받을 수 있는 플랫폼입니다.

**3개의 클라이언트**가 각각의 역할을 수행합니다:
- **Main (지휘)**: Cesium 3D 지도에서 부대/무기 배치, 국면 관리, AI 분석 결과 시각화
- **Admin (관리)**: 부대, 무기, 장비, 국면, 환경, 기상 등 마스터 데이터 CRUD
- **Edge (현장)**: 드론/LiDAR 장비 원격 운용, HLS 실시간 영상, 적 보고 작성

### 주요 기능

- **3D 작전 상황판**: Cesium 지도에 부대 편제부호, 기동로, 방어선, 화력참조점 등 군사 객체 렌더링
- **국면 관리**: 작전 국면(시나리오) 생성/적용으로 부대 배치 상태 전환
- **AI 분석 연동**: 이동로 최적경로 분석, 타격범위(GeoTIFF) 분석 모델 바인딩 및 3D 지도 오버레이
- **실시간 통신**: WebSocket STOMP로 GPS 위치, 장비 상태, AI 분석 결과 실시간 전송
- **엣지 장비 운용**: 드론 EO/IR 영상 HLS 스트리밍, LiDAR 데이터 수집, 적 보고 작성
- **엣지 DB 동기화**: PostgreSQL → SQLite 변환으로 오프라인 환경 지원
- **기상/환경 관리**: 기상셋, 지형, 인프라 환경정보 관리 및 작전 반영
- **보고/지시 체계**: 적 보고, 환경 보고 작성 및 지시 전달

### 나의 역할

3개 Vue 3 클라이언트와 Spring Boot 3 백엔드 API 전 영역의 풀스택 개발을 담당했습니다. Cesium 3D 지도 통합, 외부 AI 분석 모델 API 바인딩 및 데이터 연동, WebSocket 실시간 통신, 엣지 장비 연동까지 시스템 전반에 걸쳐 유기적인 서비스 구성을 구현했습니다.

