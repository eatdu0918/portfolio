---
title: "백엔드"
slug: "sparta-ecommerce-msa-backend"
category: "backend"
order: 3
---

## Spring Boot 마이크로서비스

도메인을 **user, product, order, discount, payment, cancel, refund** 등 서비스로 나누고, 각각 **Spring Boot 3.2 · Java 17** 기반의 독립 애플리케이션으로 구동합니다. **서비스마다 전용 MySQL 스키마(또는 DB)**를 두어 데이터 소유권을 분리했습니다.

### API 게이트웨이

**Spring Cloud Gateway(WebFlux)** 를 단일 진입점으로 두고 라우팅·필터 체인으로 다음을 처리합니다.

- 경로별 **다운스트림 서비스 라우팅**
- **JWT 검증·갱신** 등 인증 관련 횡단 관심사
- 필요 시 **Redis** 연동(세션·블랙리스트·레이트 제한 등 용도에 맞게)

### 서비스 간 통신

- **동기**: **OpenFeign** 등으로 타 서비스 HTTP API를 호출해 주문·결제·할인 조합 같은 **즉시 일관성**이 필요한 흐름을 처리합니다.
- **비동기**: **Apache Kafka**로 도메인 이벤트를 발행·구독해 느슨한 결합과 **최종 일관성**을 확보하고, 취소·환불 등 후속 처리를 이어갑니다.

### 분산 트랜잭션

주문·결제·취소·환불이 여러 서비스에 걸릴 때 **로컬 트랜잭션 + 이벤트 + 보상(Saga)** 관점으로 실패 시 상태를 맞추는 패턴을 적용·학습했습니다.

### 관측·로깅

- **Spring Actuator**로 헬스·메트릭 노출
- **Prometheus**가 수집할 수 있도록 게이트웨이·서비스 메트릭을 정리
- **Logstash Logback Encoder** 등으로 구조화 로그를 남겨 분산 환경에서 추적하기 쉽게 구성

### 테스트

**TestContainers**로 MySQL·Kafka 등 외부 의존성을 띄워 **통합 테스트**를 작성해, 로컬과 CI에서 동일한 검증 루프를 돌릴 수 있게 했습니다.
