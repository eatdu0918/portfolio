---
title: "3D 전장 상황 인지 시스템"
slug: "tactical-viz"
summary: "Cesium 3D 지도 기반의 군사 작전 지휘통제 플랫폼. 국면/부대/무기/환경 관리, AI 모델 바인딩을 통한 이동로/타격범위 분석, 엣지 장비(드론/LiDAR) 연동, 실시간 WebSocket 상황 공유까지 지원하는 C4I 시스템입니다."
period: "2025.06 - 2025.11"
role: "풀스택 개발"
thumbnail: "/images/projects/tactical-viz/battlefield_overview.png"
gallery:
  - src: "/images/projects/tactical-viz/battlefield_overview.png"
    alt: "전장 개요 (3D 작전 상황판)"
  - src: "/images/projects/tactical-viz/optimal_path.png"
    alt: "AI 최적 이동로 분석"
  - src: "/images/projects/tactical-viz/terrain_analysis.png"
    alt: "지형 분석"
  - src: "/images/projects/tactical-viz/unit_info.png"
    alt: "부대 정보 패널"
  - src: "/images/projects/tactical-viz/unit_settings.png"
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
order: 5
featured: true
aiGenerated: true
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

## 세부 문서

- **아키텍처**: 멀티모듈·실시간 메시징·AI 비동기 콜백 흐름
- **프론트엔드**: Cesium·다중 클라이언트·WebSocket/STOMP
- **백엔드**: Spring Boot 3·보안·캐시·지오/AI 연동 처리

## 상세 설명 및 주요 특징

### 1. Cesium 3D 기반 고확률 전장 시각화
본 시스템은 Cesium 3D 엔진을 활용하여 지형, 기상, 부대 배치 및 기동 정보를 실시간으로 시각화합니다. 특히 단순한 지도 표시를 넘어 **3D 작전 상황판**으로서의 역할을 수행하며, 드론 및 LiDAR 장비에서 유입되는 HLS 실시간 영상을 지휘관 화면에 통합하여 입체적인 상황 판단을 보조합니다.

### 2. AI 분석 모델 연동 및 실시간 전파
이동로 최적화, 타격 범위 분석 등 외부 AI 모델과의 연동을 **비동기 이관 패턴**으로 설계했습니다. 분석 결과는 WebSocket STOMP를 통해 접속 중인 모든 클라이언트에 즉시 전파되며, 지휘(Main)·관리(Admin)·현장(Edge) 클라이언트 간의 데이터 동기화를 통해 작전 연속성을 보장합니다.

### 3. 엣지 장비 최적화 및 오프라인 연속성
통신 환경이 불안정한 현장 장비(Edge)를 위해 PostgreSQL의 핵심 데이터를 **엣지용 SQLite**로 동기화하는 기능을 구현했습니다. 이를 통해 네트워크가 끊긴 상황에서도 필수 데이터 조회 및 현장 보고가 가능하도록 설계하여 작전 효율성을 높였습니다.

## 담당 역할 및 기여

3종 클라이언트(지휘·관리·현장) 개발 및 Spring Boot 3 API 서버 설계와 구현을 포함한 **풀스택 역할을 주도적으로 수행**했습니다. Cesium 엔진의 객체 모델 관리와 WebSocket을 이용한 실시간 상태 동기화 로직을 구축하여, 복잡한 전장 정보를 사용자에게 직관적으로 전달하는 시스템의 핵심 기틀을 마련했습니다.


