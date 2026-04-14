---
title: "AETEM v2 — 전장정보 편집기 (COP)"
slug: "aetem-v2-cop"
summary: "브라우저 기반 전장정보 편집기. OpenLayers와 MIL-STD-2525D로 NATO 표준 군사 부호·전술 그래픽을 다루고, 3개 독립 맵·ORBAT·레이어 권한을 퍼사드 중심 구조로 묶은 군사 지도 프론트엔드입니다."
period: "2025.12 - 현재"
role: "프론트엔드 개발 (아키텍처 설계)"
liveUrl: "https://aetem-v2-cop.dev-aistudio.com/"
thumbnail: "/images/projects/aetem-v2-cop/shared_cop.png"
gallery:
  - src: "/images/projects/aetem-v2-cop/shared_cop.png"
    alt: "전장정보 편집기 — 공유 상황도 화면"
  - src: "/images/projects/aetem-v2-cop/mission_timeline.png"
    alt: "작전 타임라인"
  - src: "/images/projects/aetem-v2-cop/threat_assessment.png"
    alt: "위협 평가"
  - src: "/images/projects/aetem-v2-cop/surveillance_feeds.png"
    alt: "감시 피드"
  - src: "/images/projects/aetem-v2-cop/logistics_supply.png"
    alt: "보급·물류"
tags: ["Vue 3", "OpenLayers", "MIL-STD-2525D", "Tailwind CSS", "Pinia", "Vue Flow", "Turf.js", "기술문서"]
techStack:
  frontend: ["Vue 3", "Vite 7", "Pinia", "Vue Router", "Tailwind CSS 4"]
  map: ["OpenLayers 10", "Turf.js", "MGRS", "proj4"]
  military: ["MIL-STD-2525D", "milsymbol", "mil-sym-ts-web", "milgraphics"]
  visualization: ["Vue Flow", "D3.js", "html-to-image", "xlsx"]
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
order: 4
featured: true
workType: company
category: "fullstack"
---

## 왜 이 프로젝트인가

[전장정보 편집기](https://aetem-v2-cop.dev-aistudio.com/)는 **규격(MIL-STD-2525D)**과 **운용 속도(다중 맵·대량 심볼·드로잉)**를 동시에 만족해야 합니다. v1에서 겪은 결합도를 줄이기 위해, **화면이 OpenLayers·군사 렌더러 세부를 직접 들여다보지 않게** 경계를 먼저 잡았습니다.

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

## 상세는 탭에서

- **아키텍처**: 퍼사드 경계, 멀티 맵 상태, 심볼 vs 그래픽 렌더 전략 분리, **문서로 남긴 설계 규약**
- **프론트엔드**: LRU·keep-alive·Draw 파이프라인·ORBAT 연동 등 구현 단 챌린지와 **코드 옆 기술 문서**

## 기술 문서로 무엇을 맞췄는가

동작하는 UI만으로는 **“어디까지가 공개 계약이고 어디부터가 내부 구현인지”**가 흐려지기 쉽습니다. 그래서 저장소 기준으로 다음을 정리해 두었습니다.

- **모듈 README**: `military-symbol`, `map`, `battle-schedule` 등 패키지별 책임, 퍼사드에서 호출해야 하는 API 표면, 금지 사항(예: 화면에서 직접 `ol` 객체 조작)
- **짧은 ADR 스타일 메모**: 이중 렌더러 선택 이유, LRU 크기·무효화 조건, assignment vs rule 가시성 모드 도입 배경
- **시퀀스·상태 다이어그램**: 전술 그래픽 Draw → 미리보기 → GeoJSON 확정 흐름, 멀티 맵 인스턴스와 Pinia 샤딩 키 관계
- **온보딩 체크리스트**: 새 Screen/라우트 추가 시 keep-alive·컨테이너 id·레이어 등록 순서

포트폴리오 본문은 요약이고, **면접·인수인계 시에는 위 문서와 실제 저장소를 같이** 열어 말할 수 있게 구성했다.

## 나의 역할

전장정보 편집기 프론트의 **아키텍처 설계와 핵심 모듈 구현**(military-symbol, map, battle-schedule)과, 위와 같은 **기술 문서 초안·유지**를 담당했다.
