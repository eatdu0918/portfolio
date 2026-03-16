---
title: "AETEM v2 COP - 공통작전상황도 시스템"
slug: "aetem-v2-cop"
summary: "OpenLayers + MIL-STD-2525D 기반의 공통작전상황도(COP) 시스템. NATO 표준 군사 부호 및 전술 그래픽을 3개 독립 맵 화면에 실시간 렌더링하며, Provider/Manager 아키텍처로 설계된 모듈화된 군사 지도 플랫폼입니다."
period: "2025.03 - 현재"
role: "프론트엔드 개발 (아키텍처 설계)"
thumbnail: "/images/projects/aetem-v2-cop/thumbnail.png"
tags: ["Vue 3", "OpenLayers", "MIL-STD-2525D", "Tailwind CSS", "Pinia", "Vue Flow", "Turf.js"]
techStack:
  frontend: ["Vue 3", "Vite 7", "Pinia", "Vue Router", "Tailwind CSS 4"]
  map: ["OpenLayers 10", "Turf.js", "MGRS", "proj4"]
  military: ["MIL-STD-2525D", "milsymbol", "mil-sym-ts-web", "milgraphics"]
  visualization: ["Vue Flow", "D3.js", "html-to-image", "xlsx"]
highlights:
  - "MIL-STD-2525D NATO 표준 군사 부호 렌더링 시스템 설계 및 구현 (부대 심볼 + 전술 그래픽)"
  - "Provider/Manager 계층 아키텍처 설계로 모듈 독립성 확보 (Facade 패턴)"
  - "OpenLayers 기반 3개 독립 맵 화면 동시 관리 (keep-alive 캐싱)"
  - "SVG 캐시(LRU 120개) 기반 대량 군사 부호 고성능 렌더링"
  - "전술 그래픽 실시간 미리보기 + GeoJSON 변환 렌더링 파이프라인"
  - "Vue Flow 기반 전투편성표(ORBAT) 다이어그램 시각화"
  - "레이어 기반 가시성/편집 권한 관리 체계 (assignment/rule 모드)"
  - "지도 캡처 및 Excel 내보내기 기능"
order: 4
featured: true
category: "fullstack"
---

## 프로젝트 개요

AETEM v2 COP(Common Operational Picture)는 NATO 표준 MIL-STD-2525D 군사 부호 체계를 OpenLayers 지도에 렌더링하는 공통작전상황도 시스템입니다.

지휘관이 **3개의 독립 맵 화면**에서 부대 배치, 전술 그래픽(경계선, 작전 영역, 타격 목표 등)을 시각적으로 관리할 수 있습니다.

### 핵심 기능

- **군사 부호 배치**: MIL-STD-2525D 20~30자리 SIDC 기반 부대 심볼을 지도에 배치 및 편집
- **전술 그래픽**: 경계선(Boundary), 작전 영역(Area), 화력참조점, 원형/사각 목표 등 전술 그래픽 그리기
- **멀티 맵 화면**: 3개 독립 맵 화면(Screen 1/2/3)을 keep-alive로 캐싱하여 동시 관리
- **레이어 관리**: assignment/rule 모드 기반 레이어 가시성 및 편집 권한 제어
- **전투편성표**: Vue Flow 기반 ORBAT(Order of Battle) 다이어그램 시각화
- **지도 캡처**: html-to-image로 현재 맵 뷰 캡처 및 관리
- **데이터 내보내기**: 심볼/그래픽 데이터 Excel 내보내기

### 아키텍처 특징

기존 AETEM v1과 달리 **프론트엔드 아키텍처 설계**에 중점을 두었습니다:
- **Provider 패턴**: 외부에서는 `MilitarySymbolProvider` Facade만 사용
- **Manager 계층**: Visualization, Layer, Item, Selection, Interaction, Visibility 6개 Manager로 책임 분리
- **Renderer 추상화**: milsymbol / mil-sym-ts-web 렌더러를 런타임 교체 가능
- **Store 분리**: 맵, 심볼 데이터, 레이어, 캡처 등 관심사별 독립 Store

### 나의 역할

프론트엔드 전체 아키텍처를 설계하고, 군사 부호 모듈(military-symbol), 지도 모듈(map), 전투편성표 모듈(battle-schedule)을 개발했습니다. Provider/Manager 패턴 기반의 모듈 구조를 설계하여 재사용성과 확장성을 확보했습니다.
