---
title: "AI 학습 데이터 관리 플랫폼"
slug: "resource-admin"
summary: "AI 학습용 원천 데이터를 체계적으로 수집, 정제, 변환, 관리하는 데이터 파이프라인 플랫폼. 플러그인 기반 아키텍처로 SFTP, 비디오 변환, LLM 서비스 바인딩을 통한 텍스트 정제, 비식별화 등 다양한 데이터 처리를 자동화합니다."
period: "2023.04 - 2024.03"
role: "풀스택 개발"
thumbnail: "/images/projects/resource-admin/pipeline_workflow.png"
gallery:
  - src: "/images/projects/resource-admin/pipeline_workflow.png"
    alt: "데이터 파이프라인 워크플로"
  - src: "/images/projects/resource-admin/task_execution_list.png"
    alt: "작업 실행 목록"
  - src: "/images/projects/resource-admin/video_frame_meta.png"
    alt: "비디오 프레임·메타데이터"
  - src: "/images/projects/resource-admin/llm_refine_plugin.png"
    alt: "LLM 텍스트 정제 플러그인"
  - src: "/images/projects/resource-admin/video_refine_plugin.png"
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
  - "Spring Boot 멀티 프로젝트 공통 라이브러리 설계 (웹·소비자·API 공유 모듈)"
order: 3
featured: true
aiGenerated: true
workType: company
category: fullstack
---

## 왜 이 프로젝트인가

학습용 원천 데이터는 **수집 경로(SFTP·RTSP·API)**와 **변환 단계(비디오→이미지·JSONL)**가 제각각이다. 모든 단계를 동기 HTTP로 묶으면 타임아웃과 재시도 지옥이 되므로, **플러그인 + 큐 + 공통 라이브러리**를 중심축으로 삼았다.

## 내가 풀려던 문제

1. 단계마다 **실행 시간·실패 방식**이 달라 동기 파이프라인으로는 유지보수가 불가능하다.
2. Java Consumer와 **Python OpenCV**가 같은 작업 버스를 써야 한다.
3. 운영 메타(RDB)와 **실험적 텍스트 산출(문서 DB)**를 한 스키마에 억지로 넣기 어렵다.

## 접근과 결과 (요약)

- **작업 데이터셋**에 **Import / Transform / Export / Profile** 파이프라인 모델을 두고, 무거운 단계는 **RabbitMQ**로 넘겼다.
- **MariaDB + MongoDB**로 메타와 비정형 산출을 분리해 각각 튜닝 가능하게 했다.
- **공용 라이브러리 모듈**로 서비스·메시지 소비자·웹이 같은 도메인 로직을 공유하게 했다.

## 제품 관점에서의 가치

운영자는 한 UI에서 파이프라인을 조립하고, 백그라운드가 파일·스트림 처리를 맡는다. 작업자는 **별도 레이아웃**으로 배정 작업만 빠르게 처리한다 — 역할에 맞는 화면이 제품 구조와 일치한다.

## 세부 문서

- **아키텍처**: 멀티모듈·파이프라인·MariaDB/MongoDB 분리
- **프론트엔드**: JSP/Tiles·파이프라인 시각화·운영 UI
- **백엔드**: Spring Boot 2.7·큐·플러그인·MyBatis

## 상세 설명 및 주요 특징

### 1. 서비스 간 도메인 공유를 위한 멀티모듈 설계
본 플랫폼은 프론트엔드 웹, API 서버, 메시지 소비자(Consumer)가 동일한 비즈니스 로직을 공유할 수 있도록 **Spring 기반 멀티모듈 아키텍처**를 채택했습니다. 이를 통해 복잡한 데이터 처리 규칙을 일관되게 유지하며, 각 모듈의 독립적인 배포와 확장이 가능하도록 구현했습니다.

### 2. 하이브리드 데이터베이스 시스템 (MariaDB + MongoDB)
정형화된 관리 메타데이터와 권한 정보는 **MariaDB**에 저장하고, 파이프라인 처리 결과물이나 LLM 정제 데이터와 같이 스키마가 유동적인 비정형 데이터는 **MongoDB**에 적재하는 하이브리드 전략을 사용했습니다. 이를 통해 데이터의 특성에 맞는 최적의 저장 성능과 유연성을 확보했습니다.

### 3. 비동기 메시지 큐 기반 대량 데이터 전처리
영상 프레임 추출, SFTP 대용량 파일 전송, 외부 AI 모델 연동 등 부하가 큰 작업들을 **RabbitMQ 기반의 비동기 작업**으로 분리했습니다. 작업의 진행 상태를 실시간으로 추적하고 실패 시 재처리 로직을 갖춘 탄탄한 데이터 파이프라인을 구축하여 운영의 안정성을 크게 높였습니다.

## 담당 역할 및 기여

JSP 기반 관리 UI부터 Spring Boot 백엔드, RabbitMQ 소비자 로직까지 **시스템 전체의 풀스택 개발을 주도**했습니다. 특히 Java/Python 등 서로 다른 스택과 SQL/NoSQL DB가 혼재된 환경에서 결합도를 낮추고 데이터 무결성을 유지하는 아키텍처 설계 및 구현에 핵심적인 역할을 수행했습니다.

