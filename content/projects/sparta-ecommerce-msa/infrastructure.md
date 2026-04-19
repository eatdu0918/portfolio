---
title: "인프라"
slug: "sparta-ecommerce-msa-infrastructure"
category: "infrastructure"
order: 4
---

## 핵심 기술 (한 줄 요약)

**Docker 이미지 + Kubernetes 매니페스트**, **GitHub Actions → GHCR**, 로컬/CI 검증은 **Docker Compose 또는 로컬 K8s + TestContainers**를 병행합니다.

## 기술적 도전과 해결

### Challenge: “내 PC에서만 되는” 배포 파이프라인

**상황** — 이미지 빌드·레지스트리 푸시·클러스터 적용이 한 흐름이어야 합니다.

**문제** — 수동 kubectl은 재현이 어렵습니다.

**접근** — GitHub Actions로 **빌드·푸시**를 자동화하고, 매니페스트는 저장소로 버전 관리했습니다.

**해결** — ConfigMap/Secret/Service/Deployment를 환경별로 재사용 가능하게 쪼갰습니다.

**성과** — PR마다 **같은 경로로 배포 연습**이 가능합니다.

### Challenge: Kafka 브로커 운영 복잡도

**상황** — 이벤트 버스는 로컬과 운영 모두에서 띄워야 합니다.

**문제** — 브로커 설정이 조금만 어긋나도 컨슈머가 묵사부일 수 있습니다.

**접근** — Zookeeper(또는 선택한 구성)와 함께 **매니페스트로 고정**하고, 토픽/그룹 설계를 문서에 남겼습니다.

**해결** — TestContainers로 브로커 의존 테스트를 돌립니다.

**성과** — “이벤트 기반 연동”을 **실제 인프라 전제**로 학습했습니다.

### Challenge: 관측 없는 MSA는 운영 불가

**상황** — 게이트웨이와 각 서비스에서 지연이 어디서 나는지 알아야 합니다.

**문제** — 메트릭이 제각각이면 대시보드를 못 만듭니다.

**접근** — Actuator 노출을 표준화하고 Prometheus 스크랩을 전제로 했습니다.

**해결** — 로그는 JSON 계열 encoder로 맞췄습니다.

**성과** — 장애 시 **관측 가능성**을 확보했습니다.

### Challenge: ngrok으로 외부 콜백 검증

**상황** — 결제·웹훅은 인터넷에서 들어오는 URL이 필요합니다.

**문제** — 무료 터널 URL은 바뀔 수 있고, 경고 페이지가 끼어듭니다.

**접근** — 개발용 환경 변수로만 쓰고, **시크릿은 저장소에 두지 않았습니다**.

**해결** — 클라이언트도 같은 터널 호스트를 바라보게 맞췄습니다.

**성과** — 로컬에서 **엔드투엔드 결제 플로우**를 재현했습니다.

## 설계 메모

- ngrok 등 **터널 URL은 재시작 시 바뀔 수 있어**, 공개 데모 주소는 README가 아니라 **배포·소개에 쓰는 단일 `liveUrl` 및 `demoLinks`(프론트매터)를 정본**으로 맞춘다.
- **터널을 단일 진입점으로 모은다.** ngrok 터널은 K8s에 떠 있는 `client(nginx)` 컨테이너 한 곳만 가리키고, nginx 가 SPA·API·Kafka UI·K8s 대시보드·통합 Swagger 를 모두 sub-path 로 라우팅한다.
  - `/` → SPA(메인·어드민)
  - `/api` → `gateway-service:8000`
  - `/kafka` → `kafka-ui:8080`
  - `/k8s/` → `dashboard-bridge:80` (`sparta-msa` ns 의 ExternalName → `kubernetes-dashboard.kubernetes-dashboard:80`)
  - `/swagger-ui.html`·`/swagger-ui/`·`/v3/api-docs`·`/webjars/` → `gateway-service:8000` (springdoc 통합)
- 그 결과 외부에서 클러스터 내부 상태를 클릭 한 번으로 관측할 수 있다.
  - [Kubernetes 대시보드](https://gossipy-jeanetta-sulkier.ngrok-free.dev/k8s/)
  - [Kafka UI](https://gossipy-jeanetta-sulkier.ngrok-free.dev/kafka)
  - [통합 Swagger UI](https://gossipy-jeanetta-sulkier.ngrok-free.dev/swagger-ui.html)
