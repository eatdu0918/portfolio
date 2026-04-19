---
title: "전장 정보 편집기"
slug: "tactical-viz-cop"
summary: "브라우저 기반 전장정보 편집기. OpenLayers와 MIL-STD-2525D로 NATO 표준 군사 부호·전술 그래픽을 다루고, 3개 독립 맵·ORBAT·레이어 권한을 퍼사드 중심 구조로 묶은 군사 지도 프론트엔드입니다."
period: "2025.12 - 현재"
role: "프론트엔드 개발 (아키텍처 설계)"
liveUrl: "https://aetem-v2-cop.dev-aistudio.com/"
demoLinks:
  [
    {
      "label": "전장 정보 편집기(메인)",
      "url": "https://aetem-v2-cop.dev-aistudio.com/",
    },
    {
      "label": "레퍼런스 화면",
      "url": "https://aetem-v2-cop.dev-aistudio.com/screen2",
    },
    {
      "label": "프로젝트 API 문서",
      "url": "https://aetem-v2-cop.dev-aistudio.com/api",
    },
  ]
thumbnail: "/images/projects/tactical-viz-cop/dashboard.png"
gallery:
  - src: "/images/projects/tactical-viz-cop/dashboard.png"
    alt: "전장정보 편집기 — 상황판 개요"
  - src: "/images/projects/tactical-viz-cop/map_editor.png"
    alt: "전장정보 편집기 — 지도 기반 편집 화면"
  - src: "/images/projects/tactical-viz-cop/orbat.png"
    alt: "전장정보 편집기 — 전투편성표(ORBAT) 편집기"
  - src: "/images/projects/tactical-viz-cop/features.png"
    alt: "전장정보 편집기 — 주요 기능 목록"
  - src: "/images/projects/tactical-viz-cop/docs.png"
    alt: "전장정보 편집기 — 아키텍처 및 API 문서화"
tags: ["Vue 3", "OpenLayers", "MIL-STD-2525D", "Tailwind CSS", "Pinia", "Vue Flow", "Turf.js", "기술문서"]
techStack:
  frontend: ["Vue 3", "Vite 7", "Pinia", "Vue Router", "Tailwind CSS 4"]
  map: ["OpenLayers 10", "Turf.js", "MGRS", "proj4"]
  military: ["MIL-STD-2525D", "milsymbol", "mil-sym-ts-web", "milgraphics"]
  visualization: ["Vue Flow", "D3.js", "html-to-image", "xlsx"]
  infrastructure: ["AWS EC2", "GitHub Actions", "Docker", "Nginx"]
highlights:
  - "전장정보 편집기: MIL-STD-2525D 부대 심볼·전술 그래픽을 한 제품에서 다루는 렌더링·파이프라인 설계"
  - "Provider(Facade) + Manager/Renderer로 지도·심볼·그래픽 결합도를 낮추고 Screen 1~3을 동일 패턴으로 확장"
  - "OpenLayers 3개 독립 맵 + 라우터 keep-alive로 인스턴스·타일·심볼 상태 유지"
  - "이중 렌더러 + LRU SVG 캐시(120)로 대량 심볼 반복 배치 구간 성능 확보"
  - "Draw → 미리보기 → GeoJSON 단방향 파이프라인으로 전술 그래픽 UX·규격 경로 분리"
  - "Vue Flow ORBAT와 지도 배치 모드 연동으로 편성표→지도 동선 단축"
  - "레이어 가시성·편집 권한: assignment / rule 모드로 화면별 작전 뷰 표현"
  - "지도 캡처 및 Excel보내기"
  - "저장소 내 기술 문서: 퍼사드 공개 계약·멀티 맵 상태 키 규칙·Draw 파이프라인 시퀀스·온보딩 체크리스트 정리"
order: 6
featured: true
aiGenerated: false
workType: company
category: fullstack
---

## 왜 이 프로젝트인가

[전장정보 편집기](https://aetem-v2-cop.dev-aistudio.com/)는 **규격(MIL-STD-2525D)**과 **운용 속도(다중 맵·대량 심볼·드로잉)**를 동시에 만족해야 합니다. v1에서 겪은 결합도를 줄이기 위해, **화면이 OpenLayers·군사 렌더러 세부를 직접 들여다보지 않게** 경계를 먼저 잡았습니다.

## 데모 및 기술 문서

- **전장 정보 편집기 (메인)**: [https://aetem-v2-cop.dev-aistudio.com/](https://aetem-v2-cop.dev-aistudio.com/)
- **레퍼런스 화면**: [/screen2](https://aetem-v2-cop.dev-aistudio.com/screen2)
- **프로젝트 API 문서**: [/api](https://aetem-v2-cop.dev-aistudio.com/api)

## 내가 풀려던 문제

1. **지도·부대 심볼·전술 그래픽·ORBAT**가 한 제품에 얽이면 변경 비용이 기하급수로 늘어난다.
2. **3개의 독립 맵**은 화면마다 레이어·가시성·편집 권한이 달라야 하는데, 전역 단일 상태로는 간섭이 난다.
3. 부대 심볼은 **대량·반복**, 전술 그래픽은 **규격·미리보기·GeoJSON 반영**이 중요해 **같은 렌더 경로로 묶기 어렵다**.
4. 군사 규격·맵 SDK가 겹치면 **코드만으로는 의도가 전달되지 않아**, 신규 투입자와 QA가 같은 그림을 갖기 어렵다.

## 접근과 결과 (요약)

- **퍼사드 + 내부 Manager/Renderer**로 외부 의존을 한 축에 모아, Screen 1~3을 같은 패턴으로 확장했다.
- **뷰·경로 단위 키로 샤딩한 레이어 상태**와 assignment / rule 모드로 “같은 COP, 화면마다 다른 뷰”를 중복 없이 표현했다.
- **이중 렌더러 + LRU 캐시**로 심볼 반복 비용을 줄이고, 그래픽은 **Draw → 미리보기 → 확정** 파이프라인만 공개했다.
- **기술 문서**로 퍼사드 진입점·상태 샤딩 키·그래픽 단계를 고정해, 구현과 리뷰·온보딩이 같은 어휘를 쓰게 했다.

## 제품 관점에서의 가치

운용자는 **여러 맵 화면을 오가도** 타일·심볼 맥락이 유지되고, 개발 측면에서는 규격·레이어 정책이 바뀌어도 **수정 범위가 모듈 내부**에 머물도록 했다.

## 세부 문서

- **아키텍처**: 퍼사드·멀티 맵·레이어/권한 모델·문서 계층
- **프론트엔드**: OpenLayers·MIL-STD-2525D·ORBAT·Draw 파이프라인

## 상세 설명 및 주요 특징

### 1. NATO 표준 군사 부호(MIL-STD-2525D) 구현
OpenLayers 지도 위에 NATO 표준 군사 부호와 전술 그래픽을 자유롭게 배치하고 편집할 수 있는 전문 도구입니다. 복잡한 스타일 규칙과 도형 사양을 코드화하여, 사용자가 직관적인 UI를 통해 표준에 맞는 전술 정보를 생성할 수 있도록 구현했습니다.

### 2. 고수준 프론트엔드 아키텍처 (퍼사드 패턴)
여러 개의 독립된 지도 뷰와 대규모 전술 객체를 효율적으로 관리하기 위해 **퍼사드(Facade) 및 매니저 패턴**을 도입했습니다. 이를 통해 컴포넌트 간의 결합도를 낮추고, 복잡한 지도 인터랙션과 상태 변화를 예측 가능하게 관리할 수 있는 탄탄한 클라이언트 구조를 설계했습니다.

### 3. ORBAT 다이어그램 및 공간 연산
부대의 편제를 시각화하는 **전투편성표(ORBAT) 다이어그램**을 Vue Flow를 활용하여 구현했습니다. 또한 Turf.js를 연동하여 기동로의 거리 측정, 작전 범위 계산 등 지리 공간 연산을 클라이언트 측에서 즉각적으로 수행할 수 있도록 보조 기능을 강화했습니다.



## 기술 문서로 무엇을 맞췄는가

동작하는 UI만으로는 **“어디까지가 공개 계약이고 어디부터가 내부 구현인지”**가 흐려지기 쉽습니다. 그래서 저장소 기준으로 다음을 정리해 두었습니다.

- **모듈 README**: `military-symbol`, `map`, `battle-schedule` 등 패키지별 책임, 퍼사드에서 호출해야 하는 API 표면, 금지 사항(예: 화면에서 직접 `ol` 객체 조작)
- **짧은 ADR 스타일 메모**: 이중 렌더러 선택 이유, LRU 크기·무효화 조건, assignment vs rule 가시성 모드 도입 배경
- **시퀀스·상태 다이어그램**: 전술 그래픽 Draw → 미리보기 → GeoJSON 확정 흐름, 멀티 맵 인스턴스와 Pinia 샤딩 키 관계
- **온보딩 체크리스트**: 새 Screen/라우트 추가 시 keep-alive·컨테이너 id·레이어 등록 순서

이 절은 요약이며, **모듈 README·시퀀스·온보딩 체크리스트**는 저장소 문서와 함께 보면 공개 계약과 내부 구현 경계를 빠르게 맞출 수 있다.

## 담당 역할 및 기여

**OpenLayers 기반 지도 라이브러리 및 부호 편집 UI 아키텍처 설계**를 주도했습니다. 대규모 전술 그래픽의 렌더링 최적화뿐만 아니라 military-symbol, map, battle-schedule 등 **핵심 모듈의 구현과 기술 문서 관리**를 병행하여 팀 내 기술적 난도가 높은 GIS 프론트엔드 영역을 완수했습니다.
