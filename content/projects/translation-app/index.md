---
title: "오프라인 문서 번역 데스크탑 앱"
slug: "translation-app"
summary: "Electron 30 · React 18 · Python FastAPI · Ollama(aya-expanse:8b) 로 구성한 완전 오프라인 문서 번역기. DOCX · XLSX · HWP · PDF 4가지 형식을 지원하며, 모든 AI 추론이 사용자 PC에서만 실행되어 기밀 문서를 외부로 전송하지 않습니다. NSIS 단일 인스톨러로 Ollama 설치와 모델 다운로드까지 자동화했습니다."
period: "2026.05"
role: "풀스택 개발 (기획 · 설계 · 구현 · 배포 패키징)"
thumbnail: "/images/projects/translation-app/main.png"
gallery:
  - src: "/images/projects/translation-app/main.png"
    alt: "문서 번역기 — 메인 화면 (파일 선택 · 언어 설정 · 번역 완료)"
demoLinks:
  - label: "GitHub"
    url: "https://github.com/eatdu0918/translation-app"
  - label: "다운로드 (.exe)"
    url: "https://github.com/eatdu0918/translation-app/releases/latest"
tags:
  [
    "Electron",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Ollama",
    "Local LLM",
    "PyInstaller",
    "NSIS",
  ]
techStack:
  frontend:
    [
      "Electron 30",
      "React 18",
      "TypeScript",
      "Vite 5",
    ]
  backend:
    [
      "Python 3.10",
      "FastAPI",
      "uvicorn",
      "python-docx 1.1",
      "openpyxl 3.1",
      "pyhwp (HWP→DOCX 변환)",
      "pdf2docx (PDF→DOCX 변환)",
      "httpx (Ollama 비동기 스트리밍)",
    ]
  ai:
    [
      "Ollama (로컬 LLM 런타임)",
      "aya-expanse:8b (다국어 8B LLM)",
    ]
  packaging:
    [
      "PyInstaller (backend.exe 번들)",
      "electron-builder",
      "NSIS 인스톨러 (Ollama 자동 설치)",
    ]
highlights:
  - "완전 오프라인 AI 번역 — Ollama 로컬 LLM으로 기밀 문서를 외부 서버에 전송하지 않음"
  - "DOCX 6단계 후처리 파이프라인 — 가타카나 분할 셀 병합, 일본어 폰트 교체, 과도한 여백 정규화, 표 행높이 자동화"
  - "4개 문서 형식 지원 (DOCX · XLSX · HWP/HWPX · PDF) — HWP·PDF는 DOCX 변환 후 번역"
  - "3-paragraph 병렬 청크 번역으로 LLM 처리 속도 최적화"
  - "NSIS 단일 인스톨러 — Ollama 런타임 및 aya-expanse:8b 모델 다운로드까지 자동화"
  - "14개 언어 지원 (한국어, 영어, 日本語, 中文, 프랑스어, 독일어 외)"
order: 0
featured: true
aiGenerated: false
workType: personal
category: fullstack
---

## 왜 만들었는가

업무용 번역 도구는 대부분 **클라우드 API** 기반이라 파일 내용이 외부 서버로 전송된다. 계약서·내부 보고서처럼 외부 유출이 불가한 문서는 사용할 수 없다는 한계가 있었다. Ollama가 경량 LLM을 로컬에서 구동하는 환경을 제공해 주는 덕분에, **완전 오프라인 번역기**를 개인 PC에서 돌릴 수 있다는 아이디어에서 시작했다.

## 내가 풀려던 문제

1. **기밀 문서 보호** — API 키나 외부 연결 없이 사용자 PC 안에서만 AI 추론이 끝나야 한다.
2. **다양한 사내 문서 형식** — DOCX 외에도 HWP·PDF·XLSX가 혼재하는 실무 환경을 커버해야 한다.
3. **설치 장벽 제거** — Ollama 설치, 모델 풀, 환경변수 설정을 일반 사용자가 직접 할 수 없다. 인스톨러 하나로 해결해야 한다.
4. **DOCX 품질 문제** — 일본어 원본 문서를 한국어로 변환할 때 가타카나 셀 분할, 고정 행높이, 일본어 전용 폰트로 인해 출력물이 깨지는 문제.

## 아키텍처

```
Electron (Chromium + main.js)
        │ HTTP :8003
        ▼
Python FastAPI (PyInstaller 번들)
        │ HTTP :11434
        ▼
Ollama  ←  aya-expanse:8b (로컬)
```

Electron 메인 프로세스가 앱 기동 시 `backend.exe` (PyInstaller 번들)를 child process로 실행한다. React SPA는 Electron 내장 Chromium에서 렌더링되며, FastAPI와 localhost HTTP로 통신한다. 모든 파일 I/O와 AI 추론이 사용자 PC 내부에서 완결된다.

## DOCX 후처리 파이프라인

일반 LLM 번역 이후 원본 포맷 유지가 핵심 품질 지표다. 특히 일본어 → 한국어 변환 시 문제가 집중되어 6단계 후처리를 구현했다.

| 단계 | 문제 | 해결 |
|------|------|------|
| 아티팩트 제거 | 웹→DOCX 변환 잔여 URL·헤더 | 정규식 필터링 |
| 간격 정규화 | CSS margin이 80 twips 초과 여백으로 | 임계치 초과 spacing 제거 |
| 빈 단락 정리 | 연속 빈 줄 중복 | 연속 2개 이상 → 1개로 압축 |
| 표 행높이 자동화 | `exact` 고정 높이로 한글 텍스트 잘림 | `auto` 모드로 전환 |
| 가타카나 셀 병합 | 세로쓰기로 분할된 셀(ソ\|ウ\|ル) | 행 병합 후 단일 셀로 번역 |
| 폰트 교체 | Meiryo 등 일본어 전용 폰트 | Malgun Gothic으로 일괄 교체 |

## 배포 패키징

```
build.ps1 실행
  1. PyInstaller → backend.exe 번들
  2. Vite build → frontend/dist
  3. electron-builder NSIS → DocumentTranslator-Setup.exe
```

인스톨러 실행 시 Ollama 다운로드·설치, `aya-expanse:8b` 모델 풀까지 자동으로 처리된다. 사용자는 exe 하나만 실행하면 된다.

## 기술적 판단

- **Ollama + aya-expanse:8b** — 다국어 성능과 로컬 구동 가능한 모델 크기(~5 GB) 사이의 균형점으로 선택.
- **FastAPI + PyInstaller** — Python 생태계의 문서 처리 라이브러리(`python-docx`, `pyhwp`, `pdf2docx`)를 활용하면서 단일 exe로 번들하기 위한 조합.
- **Electron child process 방식** — 백엔드를 별도 프로세스로 격리해 앱 종료 시 정상 정리가 보장되고, 향후 CLI로도 실행 가능하도록 경계를 유지했다.
