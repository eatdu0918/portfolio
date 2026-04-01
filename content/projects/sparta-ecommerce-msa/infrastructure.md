---
title: "인프라"
slug: "sparta-ecommerce-msa-infrastructure"
category: "infrastructure"
order: 4
---

## 컨테이너·오케스트레이션

각 마이크로서비스와 클라이언트는 **Docker** 이미지로 패키징하고, **Kubernetes** 매니페스트로 배포·스케일·서비스 디스커버리를 구성했습니다. 네임스페이스·ConfigMap·Secret·Service·Deployment 등을 나누어 환경별로 재사용 가능하게 두는 것을 목표로 했습니다.

## 메시징·클러스터

**Apache Kafka**는 **Zookeeper**(또는 프로젝트에서 사용한 브로커 구성)와 함께 매니페스트로 기동해, 서비스 간 이벤트 버스 역할을 합니다. 토픽 설계와 컨슈머 그룹을 서비스 경계에 맞춰 나누는 연습을 했습니다.

## 관측

게이트웨이와 각 Spring Boot 서비스에서 **Actuator 메트릭**을 노출하고 **Prometheus**가 스크랩할 수 있게 해, 단일 노드가 아닌 **클러스터 단위**로 상태를 볼 수 있는 기반을 마련했습니다.

## 로컬·검증

개발 시에는 Docker Compose 또는 K8s 로컬 클러스터와 **TestContainers**를 병행해, “내 PC에서만 되는 코드”가 아니라 **파이프라인에서도 같은 전제**로 돌아가게 맞췄습니다.

## 로컬 터널 (ngrok)

로컬에서 띄운 **게이트웨이(또는 특정 서비스)**에 대해 **ngrok**으로 공개 HTTPS URL을 발급해, 인터넷에서 들어오는 요청을 개발 머신으로 포워딩했습니다.

- **결제·웹훅**: PG/결제 모듈이 **redirect URL·웹훅**으로 고정 도메인이 아닌 **외부에서 도달 가능한 주소**를 요구할 때, 로컬 `localhost`만으로는 검증이 어렵습니다. ngrok URL을 콜백/리다이렉트에 넣어 **실제 결제 플로우**를 로컬에서 재현했습니다.
- **모바일·타 기기**: 같은 Wi-Fi 밖의 기기에서 API를 호출해야 할 때도 터널 URL로 게이트웨이를 노출해 **엔드투엔드**를 맞췄습니다.
- **운영 주의**: 터널 URL은 세션마다 바뀔 수 있으므로, 개발용 설정·환경 변수로만 쓰고 **시크릿·토큰은 노출되지 않게** 관리했습니다.

### 웹 클라이언트 접속 (ngrok)

터널이 켜져 있는 동안 **React 클라이언트**는 아래 주소로 브라우저에서 접속할 수 있습니다.

- [https://gossipy-jeanetta-sulkier.ngrok-free.dev/](https://gossipy-jeanetta-sulkier.ngrok-free.dev/)

ngrok 무료 호스트는 **터널을 재시작하면 URL이 바뀔 수** 있으며, 최초 방문 시 **ngrok 브라우저 경고(Visit Site)** 한 번 거친 뒤 앱이 열릴 수 있습니다.
