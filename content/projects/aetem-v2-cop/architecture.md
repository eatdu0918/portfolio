---
title: "시스템 아키텍처"
slug: "aetem-v2-cop-architecture"
category: "architecture"
order: 1
---

## 전체 시스템 구성

AETEM v2는 3개 프로젝트로 구성되며, COP(cop_front)는 공통작전상황도 전용 프론트엔드입니다.

```mermaid
graph TD
    subgraph aetemV2 ["AETEM v2 시스템"]
        COP["cop_front\nVue 3 + OpenLayers\n공통작전상황도 (COP)"]
        MainWeb["aetem-v2-main-vue3-web\nVue 3 + OpenLayers/Cesium\n메인 작전 화면"]
        API["aetem-v2-api-web\nSpring Boot 3.5\nREST API"]
    end

    subgraph external [External]
        Tile["XYZ 타일 서버\nOSM OpenMapTiles"]
        MilStd["MIL-STD-2525D\n심볼 메타데이터"]
    end

    COP -->|"XYZ Tiles"| Tile
    COP -->|"심볼 규격"| MilStd
    MainWeb -->|"REST + WebSocket"| API
    API --> PostgreSQL["PostgreSQL"]
    API --> RabbitMQ["RabbitMQ"]
```

## 프론트엔드 모듈 아키텍처

cop_front는 **3개의 독립 모듈**로 구성됩니다.

```mermaid
graph TD
    subgraph modules ["src/modules/"]
        Map["map/\nOpenLayers 지도 생성·관리\nmapStore"]
        MilSym["military-symbol/\nMIL-STD-2525D 심볼·전술 그래픽\nProvider/Manager/Renderer"]
        Battle["battle-schedule/\nVue Flow 전투편성표\nORBAT 다이어그램"]
    end

    subgraph layouts ["src/layouts/"]
        Sidebar["Sidebar\n스코프 전환\n심볼/그래픽/핀/레이어"]
        RightPanel["RightPanel\n정보 패널"]
        LayerTab["LayerTab\n화면·탭 전환"]
    end

    subgraph pages ["src/pages/"]
        S1["Screen1\n읽기 전용"]
        S2["Screen2\n편집 가능"]
        S3["Screen3"]
    end

    S1 --> Map
    S2 --> Map
    S3 --> Map
    Map --> MilSym
    Sidebar --> MilSym
    Sidebar --> Battle
    RightPanel --> MilSym
```

## Provider/Manager 계층 아키텍처

**왜 계층을 나눴나**: 지도·심볼·전술 그래픽·캡처·전투편성표가 한 화면에 얽히면, 페이지와 레이아웃이 OpenLayers 상세와 MIL-STD 렌더러에 직접 의존하게 됩니다. 기능을 바꿀 때마다 여러 화면을 동시에 고쳐야 해 유지보수 비용이 커집니다.

**선택**: **Provider(Facade)** 를 유일한 공개 진입점으로 두고, Manager·Renderer·Store는 모듈 내부에 캡슐화합니다. 화면은 “무엇을 할지”만 Provider에 요청하고, 좌표계·레이어·스타일·캐시 정책은 내부에서 일관되게 처리합니다.

**결과**: 심볼 렌더러 교체나 레이어 규칙 변경이 한 축에 묶여, COP 화면(Screen1~3)을 반복 패턴으로 확장하기 쉽습니다. 아래 구조에서 **외부 코드는 Provider만 접근**하고, 내부 core는 직접 import하지 않습니다.

```mermaid
graph TD
    subgraph external ["외부 (Pages, Layouts)"]
        Page["Screen Page"]
        UI["Sidebar / RightPanel"]
    end

    subgraph provider ["Provider Layer (Facade)"]
        MSP["MilitarySymbolProvider\n외부 진입점 (Facade)"]
        MScrP["MapScreenProvider\n지도 화면 초기화"]
        MSetP["MapSettingsProvider\n지도별 설정"]
        MCtlP["MapControlProvider\n줌/회전 컨트롤"]
        CapP["CaptureProvider\n지도 캡처"]
        BatP["BattleScheduleProvider\n전투편성표"]
    end

    subgraph managers ["Manager Layer (Core)"]
        VM["VisualizationManager\n시각화 총괄"]
        LM["LayerManager\nOpenLayers 레이어"]
        IM["ItemManager\n아이템 CRUD"]
        SM["SelectionManager\n선택·하이라이트"]
        IntM["InteractionManager\n드래그·편집·키보드"]
        VisM["VisibilityManager\n가시성 제어"]
    end

    subgraph renderer ["Renderer Layer"]
        SIR["SymbolIconRenderer\n부대 심볼 SVG"]
        GR["GraphicRenderer\n전술 그래픽 GeoJSON"]
        SB["StyleBuilder\nOpenLayers Style"]
    end

    subgraph store ["Store Layer"]
        LS["layerStore"]
        MDS["militaryDataStore"]
        SRS["symbolRendererStore"]
        CS["captureStore"]
    end

    Page --> MSP
    UI --> MSP
    Page --> MScrP
    MSP --> VM
    VM --> LM
    VM --> IM
    VM --> SM
    VM --> IntM
    VM --> VisM
    VM --> SIR
    VM --> GR
    SIR --> SB
    GR --> SB
    MSP --> LS
    MSP --> MDS
    SIR --> SRS
```

## 심볼 렌더링 파이프라인

### 부대 심볼 배치 흐름

```mermaid
sequenceDiagram
    participant User as 사용자
    participant Sidebar as Sidebar UI
    participant MSP as MilitarySymbolProvider
    participant VM as VisualizationManager
    participant SIR as SymbolIconRenderer
    participant OL as OpenLayers Map

    User->>Sidebar: 심볼 선택 (SIDC)
    Sidebar->>MSP: activateSymbolMode(symbolData)
    MSP->>VM: Draw interaction 활성화 (Point)
    User->>OL: 지도 클릭
    OL->>VM: click event (좌표)
    VM->>SIR: renderSymbolByFullSidc(sidc, options)
    SIR->>SIR: SVG 캐시 확인 (LRU 120)
    alt 캐시 미스
        SIR->>SIR: mil-sym 또는 milsymbol로 SVG 생성
    end
    SIR-->>VM: SVG 데이터
    VM->>VM: StyleBuilder.getMilitarySymbolStyleBySvg()
    VM->>OL: Feature 생성 + symbolSource에 추가
    VM->>VM: ItemManager.addItem() 등록
```

### 전술 그래픽 그리기 흐름

```mermaid
sequenceDiagram
    participant User as 사용자
    participant MSP as MilitarySymbolProvider
    participant VM as VisualizationManager
    participant GR as GraphicRenderer
    participant SGE as SymbolGeometryExpander
    participant OL as OpenLayers Map

    User->>MSP: activateGraphicMode(graphicData)
    MSP->>GR: determineDrawType() → LineString/Polygon
    MSP->>VM: Draw interaction 활성화
    User->>OL: 포인트들 클릭 (그리기)
    OL->>VM: drawstart → sketch geometry 변경
    VM->>GR: renderPreviewGraphic() (실시간 미리보기)

    User->>OL: 그리기 완료 (더블클릭)
    OL->>VM: drawend event
    VM->>SGE: expandCoordinatesBySymbol() (좌표 확장)
    VM->>GR: WebRenderer.RenderSymbol2D() → GeoJSON
    GR->>GR: parseGeoJsonToFeatures()
    GR-->>VM: Feature 배열
    VM->>OL: VectorLayer + VectorSource에 추가
```

## 렌더러 교체 전략

런타임에 군사 부호 렌더러를 교체할 수 있습니다.

```mermaid
graph TD
    SIR["SymbolIconRenderer"]
    SRS["symbolRendererStore\n(localStorage 저장)"]

    SIR -->|"getSymbolRendererPreference()"| SRS

    subgraph renderers ["렌더러 옵션"]
        MS["mil-sym-ts-web\n(기본)\n정밀 MIL-STD 규격"]
        MSym["milsymbol\n경량 SVG 생성"]
    end

    SRS -->|"'mil-sym'"| MS
    SRS -->|"'milsymbol'"| MSym

    Note["부대 심볼: 선택 가능\n전술 그래픽: 항상 mil-sym"]
```

- **부대 심볼 (symbolset ≠ 25)**: `symbolRendererStore`에 따라 mil-sym 또는 milsymbol 중 선택
- **전술 그래픽 (symbolset 25)**: 항상 mil-sym-ts-web의 `WebRenderer.RenderSymbol2D` 사용
- **SVG 캐시**: LRU 방식 최대 120개 캐싱으로 반복 렌더링 성능 최적화

## 레이어 관리 체계

```mermaid
graph TD
    subgraph layerStore ["layerStore (mapKey별 컨텍스트)"]
        AM["assignment 모드\n수동 할당\nassignments[featureId] = [layerIds]"]
        RM["rule 모드\n자동 매칭\nenabledSymbols(symbolset+code)"]
    end

    subgraph control ["제어"]
        LV["layerVisibility[layerId]\n레이어 가시성"]
        LE["layerEditable[layerId]\n레이어 편집 권한"]
        IV["itemVisibility[itemId]\n개별 아이템 가시성"]
        IE["itemEditable[itemId]\n개별 아이템 편집"]
    end

    AM --> LV
    AM --> LE
    RM --> LV
    RM --> LE
    LV --> IV
    LE --> IE
```

- **mapKey**: `route.path` (예: `/screen2`) 또는 `containerId`로 맵별 독립 관리
- **assignment 모드**: `assignments[featureId] = [layerIds]`로 수동 할당
- **rule 모드**: `enabledSymbols` (symbolset+code) 패턴으로 자동 매칭
- **쿠키 저장**: 레이어 설정은 쿠키에 영속

## 데이터 직렬화 형식

```mermaid
graph LR
    subgraph item ["아이템 데이터"]
        ID["id: uuid"]
        SIDC["sidc: 30자리 SIDC"]
        Type["symbolType:\nsymbol | graphic |\nmarker | polygon | polyline"]
        Coord["coordinates: [[x,y], ...]"]
        Meta["metadata: {...}"]
        Layer["layerIds: [...]"]
    end

    item -->|"serializeItems()"| JSON["JSON 직렬화"]
    item -->|"exportToExcel()"| Excel["Excel 내보내기"]
    JSON -->|"loadItemsFromData()"| Restore["지도 복원"]
```

## OpenLayers 레이어 구조

| 레이어 | 용도 |
|--------|------|
| **symbolLayer** | 부대 심볼 (Point Feature) |
| **geometryLayer** | 전술 그래픽 (Line/Polygon) |
| **annotationLayer** | 텍스트 주석 |
| **pointHandleLayer** | 편집 핸들 포인트 |
| **tempLayer** | 임시 그리기 |
| **previewLayer** | 실시간 미리보기 |
| **editTempLayer** | 편집 중 임시 |
