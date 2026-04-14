# 🚀 포트폴리오 배포 설정 가이드

이 파일은 `portfolio` 프로젝트를 AWS EC2 서버(`selekhome.kr`)에 배포하기 위한 가이드입니다.

## 🛠️ 적용된 설정 요약

### 1. Nuxt 설정 (`nuxt.config.ts`)
- 서버 루트 경로 배포를 위해 `baseURL`을 `'/'`로 수정했습니다.

### 2. Docker 설정 (`Dockerfile`)
- Nuxt 3 SSG 빌드와 Nginx 서빙을 위한 멀티 스테이지 도커 파일을 생성했습니다.

### 3. Nginx 설정 (`nginx/default.conf`)
- 정적 파일 호스팅 및 SPA 라우팅을 위한 설정을 추가했습니다.

### 4. CI/CD 워크플로우 (`.github/workflows/deploy.yml`)
- 코드가 `main` 브랜치에 푸시될 때 자동으로 빌드하고 서버에 배포하도록 설정했습니다.

---

## 🔑 필수 후속 작업 (GitHub Secrets 설정)

배포 프로세스가 정상적으로 작동하려면 GitHub 저장소의 `Settings > Secrets and variables > Actions`에 다음 비밀값을 등록해 주셔야 합니다.

| Secret 이름 | 설명 | 권장 값 |
| :--- | :--- | :--- |
| `EC2_HOST` | 접속할 서버 주소 | `selekhome.kr` |
| `EC2_USER` | SSH 접속 계정 | (예: `ubuntu`) |
| `EC2_SSH_KEY` | SSH 개인키 내용 | `selekhome_dev_key.pem` 파일 내용 전체 |
| `HOST_PORT` | 서비스를 노출할 서버 포트 | `8082` |

---

## ✅ 완료 후 확인 방법

1. 위 Secrets 설정을 완료합니다.
2. 코드를 커밋하고 `main` 브랜치로 푸시합니다.
3. GitHub의 `Actions` 탭에서 배포가 성공하는지 확인합니다.
4. 배포 완료 후 `http://selekhome.kr:8082` 접속을 통해 정상 작동 여부를 확인합니다.

> [!TIP]
> 만약 서버 접속이 되지 않는다면, AWS 보안 그룹(Security Group) 설정에서 **8082** 포트의 인바운드 규칙이 허용되어 있는지 확인해 주세요.
