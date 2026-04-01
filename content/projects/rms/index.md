---
title: "RMS - Raw Data Management System"
slug: "rms"
summary: "AI 학습용 원천 데이터를 체계적으로 수집, 정제, 변환, 관리하는 데이터 파이프라인 플랫폼. 플러그인 기반 아키텍처로 SFTP, 비디오 변환, LLM 서비스 바인딩을 통한 텍스트 정제, 비식별화 등 다양한 데이터 처리를 자동화합니다."
period: "2023.03 - 2024.01"
role: "풀스택 개발"
thumbnail: "/images/projects/rms/pipeline_workflow.png"
gallery:
  - src: "/images/projects/rms/pipeline_workflow.png"
    alt: "데이터 파이프라인 워크플로"
  - src: "/images/projects/rms/task_execution_list.png"
    alt: "작업 실행 목록"
  - src: "/images/projects/rms/video_frame_meta.png"
    alt: "비디오 프레임·메타데이터"
  - src: "/images/projects/rms/llm_refine_plugin.png"
    alt: "LLM 텍스트 정제 플러그인"
  - src: "/images/projects/rms/video_refine_plugin.png"
    alt: "비디오 정제 플러그인"
tags: ["Spring Boot", "JSP", "jQuery", "MariaDB", "MongoDB", "RabbitMQ", "Python", "Docker"]
techStack:
  frontend: ["JSP/JSTL", "Apache Tiles", "jQuery 3.6", "jQuery UI", "Plyr.js", "Moment.js"]
  backend: ["Spring Boot 2.7", "Spring Security", "JWT (HS256)", "MyBatis", "Spring Data MongoDB", "Spring AMQP"]
  infrastructure: ["RabbitMQ", "MariaDB", "MongoDB", "Docker", "SFTP (JSch)", "Nginx"]
  ai: ["OpenCV (이미지 처리)", "Python 3.10", "LLM API 바인딩", "비식별화 로직 연동"]
highlights:
  - "플러그인 기반 데이터 처리 파이프라인 아키텍처 설계 (Import/Transform/Export/Profile)"
  - "RabbitMQ 비동기 메시지 큐로 7종 데이터 처리 작업 자동화"
  - "SFTP Import/Export, 비디오→이미지 변환, JSONL→텍스트 변환, 비식별화 등 다양한 플러그인 구현"
  - "외부 LLM 연동 텍스트 정제 도구 및 Model API 바인딩/피드백 시스템"
  - "MariaDB + MongoDB 하이브리드 데이터 저장 (관계형 메타 + 비정형 텍스트/API 데이터)"
  - "CCTV RTSP 수집기 Docker 컨테이너 원격 실행 및 모니터링"
  - "Apache Tiles 레이아웃 기반 관리자/작업자 분리 UI"
  - "Spring Boot 멀티 프로젝트 공통 라이브러리 설계 (rms_common_lib)"
order: 2
featured: true
workType: company
category: "fullstack"
---

## 프로젝트 개요

RMS(Raw Data Management System)는 AI 모델 학습에 필요한 원천 데이터를 수집, 정제, 변환, 관리하는 엔터프라이즈 데이터 파이프라인 플랫폼입니다.

다양한 형태의 원천 데이터(이미지, 비디오, 텍스트, 센서 데이터 등)를 **플러그인 기반 파이프라인**으로 처리합니다. SFTP로 외부 데이터를 수집하고, 비디오를 프레임 이미지로 변환하며, 외부 LLM 모델을 바인딩하여 텍스트를 정제하고, 비식별화 처리까지 하나의 플랫폼에서 자동화합니다.

### 주요 기능

- **데이터 수집**: SFTP Import, CCTV RTSP 스트림 수집, API 파일 Import, Excel Import
- **데이터 변환**: 비디오→이미지 변환(OpenCV), JSONL→텍스트, JSON→텍스트
- **데이터 정제**: LLM 서비스 연동 텍스트 정제 도구, 이미지/비디오 수동 정제 도구
- **비식별화**: 이미지/비디오 블러 처리 서비스 바인딩
- **데이터 관리**: RawSet/RawFile 계층 관리, 메타데이터, 태그, 필터
- **내보내기**: SFTP Export, Excel Export, JSON Export, ZIP 다운로드
- **모니터링**: CCTV 수집 현황, 수집기 상태, 시간별/일별 차트
- **Model API**: 외부 AI 모델 API 호출 바인딩, 피드백, 학습 데이터 관리
- **통계**: 셋 통계, 작업자별 통계, 상세 통계

### 나의 역할

프론트엔드(JSP + jQuery), 백엔드(Spring Boot REST API), RabbitMQ Consumer, 외부 모델 연동 및 공통 라이브러리 설계까지 전 영역에 걸친 풀스택 개발을 담당했습니다. 특히 다양한 데이터 처리 모듈을 서비스와 연결하는 파이프라인 아키텍처를 주도적으로 구현했습니다.

