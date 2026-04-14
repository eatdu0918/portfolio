---
title: "AETEM - AI 기술 접목 군사 지휘통제 시스템"
slug: "aetem"
summary: "Cesium 3D 지도 기반의 군사 작전 지휘통제 플랫폼. 국면/부대/무기/환경 관리, AI 모델 바인딩을 통한 이동로/타격범위 분석, 엣지 장비(드론/LiDAR) 연동, 실시간 WebSocket 상황 공유까지 지원하는 C4I 시스템입니다."
period: "2025.06 - 2025.11"
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
workType: company
category: "fullstack"
---

## 왜 이 프로젝트인가

C4I는 **3D 상황 인지**, **현장(Edge) 데이터 유입**, **관리(Admin) 정합성**이 동시에 돌아가야 하는 제품이다. 한 코드베이스에 몰리면 배포·권한·성능이 모두 엉키기 쉬워, **역할별 클라이언트 + API 분리 + 공통 모듈**을 전제로 설계했다.

## 내가 풀려던 문제

1. AI 분석은 **비동기·역호출**인데 지휘판은 **실시간**이어야 한다 — HTTP 한 방으로는 시간 스케일이 맞지 않는다.
2. Main·Admin·Edge는 **같은 도메인**을 다루지만 **노출 API와 권한**이 달라야 한다.
3. 현장은 **오프라인**도 견뎌야 하므로 중앙 DB 전체를 엣지에 내려줄 수는 없다.

## 접근과 결과 (요약)

- AI 연동은 **전달·콜백·세션 키 기반 실시간 푸시**로 API 스레드를 붙잡지 않고 결과만 지휘판에 반영했다.
- **지휘용·관리용 API + 공유 라이브러리** 멀티모듈로 배포 경계와 권한을 나누고, DTO 매핑·MyBatis로 대규모 CRUD를 안전하게 유지했다.
- 엣지는 **필요한 테이블만 SQLite로 동기화**해 용량·유출 범위를 줄이면서 오프라인 연속성을 확보했다.

## 제품 관점에서의 가치

지휘관은 **Cesium 한 화면**에서 국면·AI 결과·실시간 장비 상태를 같이 본다. 현장은 **HLS·보고**로 끊김 없이 데이터를 올리고, 관리자는 **별도 Admin**에서 마스터 데이터를 깨끗이 유지한다 — 운영 책임이 코드 구조와 맞닿게 정렬된다.

## 상세는 탭에서

- **아키텍처**: 클라이언트·API·실시간·AI·엣지 동기화의 한 줄 연결
- **프론트엔드**: Cesium 객체 모델, STOMP, Edge 영상 생명주기
- **백엔드**: 멀티모듈, 비동기 AI, WebSocket 채널 설계, 캐시

## 나의 역할

**3개 Vue 3 클라이언트와 Spring Boot 3 API 전반**을 풀스택으로 구현했다. Cesium 통합, AI 모델 바인딩, STOMP, 엣지 장비·DB 동기화까지 **한 제품 스토리**로 이어지게 묶는 데 집중했다.

