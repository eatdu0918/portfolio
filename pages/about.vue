<script setup lang="ts">
useHead({
  title: 'About | Portfolio',
})

const experiences = [
  {
    period: '2024 - 현재',
    role: '1인 풀스택',
    company: '개인 프로젝트',
    project: 'dev-blog (기술 블로그)',
    description:
      'Next.js App Router 기반 개인 기술 블로그. Markdown을 unified(remark/rehype)로 확장해 Sandpack·Mermaid·커스텀 컴포넌트를 본문에 삽입하고, Prisma·PostgreSQL·Server Actions로 댓글을 처리합니다. Vercel 배포.',
    techs: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vitest', 'Sandpack'],
  },
  {
    period: '2025.01 - 2025.02',
    role: '풀스택 (교육 과제)',
    company: '개인 프로젝트',
    project: 'Sparta e-commerce MSA',
    description:
      '이커머스 도메인 기준 MSA 학습·구현. Spring Cloud Gateway, 서비스별 MySQL, Kafka 이벤트·보상 트랜잭션, React(Vite) 클라이언트, Docker/Kubernetes·GitHub Actions → GHCR 파이프라인까지 구성.',
    techs: ['Spring Boot 3', 'Spring Cloud Gateway', 'Kafka', 'Redis', 'React 19', 'Kubernetes', 'Docker', 'GitHub Actions'],
  },
  {
    period: '2025.03 - 현재',
    role: '프론트엔드 개발자 (아키텍처 설계)',
    company: 'AI Studio',
    project: 'AETEM v2 COP',
    description: 'OpenLayers + MIL-STD-2525D 기반 공통작전상황도(COP) 시스템 개발. Provider/Manager 계층 아키텍처 설계, NATO 표준 군사 부호 렌더링 시스템 구현, Vue Flow 기반 전투편성표(ORBAT) 다이어그램 개발.',
    techs: ['Vue 3', 'OpenLayers', 'MIL-STD-2525D', 'Tailwind CSS', 'Pinia', 'Vue Flow', 'Turf.js'],
  },
  {
    period: '2024.06 - 2025.03',
    role: '풀스택 개발자',
    company: 'AI Studio',
    project: 'AETEM',
    description: 'Cesium 3D 지도 기반 군사 작전 지휘통제(C4I) 시스템 개발. 3개 Vue 3 클라이언트(지휘 Main, 관리 Admin, 현장 Edge) 동시 개발, 외부 AI 분석 모델(이동로/타격범위) 서비스 바인딩 및 데이터 연동, 엣지 장비 HLS 스트리밍 구현.',
    techs: ['Vue 3', 'Cesium', 'PrimeVue', 'Quasar', 'Spring Boot 3', 'PostgreSQL', 'WebSocket', 'HLS.js'],
  },
  {
    period: '2024.01 - 2025.06',
    role: '풀스택 개발자 + AI 파이프라인 통합',
    company: 'AI Studio',
    project: 'Heidi',
    description: '영상/이미지 비식별화 SaaS 서비스 풀스택 개발. Vue 3 + Electron 데스크톱 앱, Spring Boot 3 멀티모듈 백엔드, RabbitMQ 기반 5개 AI 추론 모델(YOLO, SD 등) 바인딩 및 파이프라인 설계/구현. Redis Pub/Sub 실시간 상태 관리.',
    techs: ['Vue 3', 'Electron', 'Spring Boot 3', 'Python', 'RabbitMQ', 'Redis', 'YOLOv8', 'Docker'],
  },
  {
    period: '2023.03 - 2024.01',
    role: '풀스택 개발자',
    company: 'AI Studio',
    project: 'RMS',
    description: 'AI 학습 데이터 관리 시스템(Raw Data Management System) 개발. Spring Boot + JSP 프론트엔드, REST API 백엔드, 플러그인 기반 비디오→이미지 변환 파이프라인, MongoDB + MariaDB 듀얼 DB 구조 설계.',
    techs: ['Spring Boot', 'JSP', 'jQuery', 'MyBatis', 'MariaDB', 'MongoDB', 'RabbitMQ', 'Python'],
  },
]

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'heroicons:computer-desktop-20-solid',
    skills: [
      { name: 'Vue 3 / Nuxt 3', summary: 'AETEM·COP·Heidi 등 SPA, 본 포트폴리오 Nuxt 3 구축' },
      { name: 'Next.js / React 19', summary: 'dev-blog(App Router·Server Actions), Sparta 쇼핑 클라이언트(Vite)' },
      { name: 'Electron', summary: 'Heidi 비식별화 데스크톱 클라이언트 패키징·배포' },
      { name: 'PrimeVue / Quasar', summary: 'AETEM 지휘/관리 UI, Quasar 기반 멀티 클라이언트' },
      { name: 'Tailwind CSS', summary: 'COP·관리 화면 위주 유틸리티 퍼스트 UI 스타일링' },
      { name: 'Pinia', summary: '대규모 지도·실시간 상태 전역 스토어 설계' },
      { name: 'TypeScript', summary: '컴포넌트·지도 모듈 타입 정의 및 유지보수성 강화' },
    ],
  },
  {
    title: 'Backend',
    icon: 'heroicons:server-20-solid',
    skills: [
      { name: 'Spring Boot 3', summary: 'Heidi·AETEM·RMS 멀티모듈 REST API·비즈니스 로직' },
      { name: 'Spring Cloud / MSA', summary: 'Sparta: Gateway·OpenFeign·서비스 분리·통합 테스트(TestContainers)' },
      { name: 'Spring Security / JWT', summary: 'SaaS·C4I 서비스 인증·인가·세션 정책' },
      { name: 'MyBatis / JPA', summary: 'RMS·레거시 연동 구간 SQL 매핑 및 엔티티 설계' },
      { name: 'REST API Design', summary: '프론트·AI·외부 시스템 연동용 API 계약 설계' },
      { name: 'Kafka', summary: 'Sparta 서비스 간 이벤트·Saga 학습 범위' },
      { name: 'RabbitMQ', summary: 'Heidi AI 추론 큐, RMS 비동기 작업 파이프라인' },
      { name: 'WebSocket (STOMP)', summary: 'AETEM 실시간 상황·알림 브로드캐스트' },
    ],
  },
  {
    title: 'GIS / Map',
    icon: 'heroicons:map-20-solid',
    skills: [
      { name: 'OpenLayers', summary: 'AETEM v2 COP 공통작전상황도 레이어·인터랙션' },
      { name: 'Cesium 3D', summary: 'AETEM 3D 지형·자산 시각화 및 카메라 제어' },
      { name: 'MIL-STD-2525D', summary: 'NATO 표준 군사 부호 렌더링·스타일 규칙 적용' },
      { name: 'MGRS / proj4', summary: '작전 좌표 변환·그리드 오버레이' },
      { name: 'GeoTools / JTS', summary: '서버 측 지오메트리·공간 연산 보조' },
      { name: 'Turf.js', summary: 'COP 클라이언트 측 거리·범위 등 지리 분석' },
    ],
  },
  {
    title: 'AI / ML',
    icon: 'heroicons:cpu-chip-20-solid',
    skills: [
      { name: 'Python', summary: 'RMS 변환 플러그인, Heidi 모델 래퍼·배치 스크립트' },
      { name: 'YOLOv8 / Object Detection', summary: 'Heidi 얼굴·번호판 등 탐지 파이프라인 연동' },
      { name: 'ONNX Runtime / TensorRT', summary: '추론 지연 최적화·엣지 배포 검토' },
      { name: 'Stable Diffusion', summary: 'Heidi 교체형 비식별화 추론 서비스 바인딩' },
      { name: 'OpenCV', summary: '영상 전처리·프레임 단위 처리 유틸' },
      { name: 'PyTorch', summary: '실험·모델 수정 시 프로토타이핑' },
    ],
  },
  {
    title: 'Database',
    icon: 'heroicons:circle-stack-20-solid',
    skills: [
      { name: 'PostgreSQL', summary: 'AETEM 운영 데이터·공간 확장, dev-blog 댓글·Prisma' },
      { name: 'MariaDB / MySQL', summary: 'RMS 정형 메타·트랜잭션 저장, Sparta 서비스별 DB' },
      { name: 'Redis', summary: 'Heidi Pub/Sub 실시간 작업 상태·캐시' },
      { name: 'MongoDB', summary: 'RMS 비정형 Raw·대용량 메타 저장' },
      { name: 'SQLite', summary: '로컬·엣지 경량 임베디드 저장' },
      { name: 'Ehcache / Caffeine', summary: 'API 응답·도형 스타일 등 애플리케이션 캐시' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'heroicons:cloud-20-solid',
    skills: [
      { name: 'Docker', summary: '서비스·추론 워커 컨테이너화 및 배포' },
      { name: 'Kubernetes', summary: 'Sparta 매니페스트·로컬/클러스터 배포 구조' },
      { name: 'Linux / Shell', summary: '서버 운영·배치·로그 점검 자동화' },
      { name: 'Git', summary: '멀티 프로젝트 브랜치 전략·코드 리뷰' },
      { name: 'Nginx', summary: '리버스 프록시·정적·업스트림 구성' },
      { name: 'Prometheus', summary: '메트릭 수집·기본 대시보드 연동' },
      { name: 'CI/CD', summary: 'Sparta: GitHub Actions → GHCR, 기타 빌드·배포 파이프라인' },
    ],
  },
]

const strengths = [
  {
    icon: 'heroicons:puzzle-piece-20-solid',
    title: '풀스택 통합 역량',
    description: 'Vue 3 프론트엔드, Spring Boot 백엔드, Python AI 모델 바인딩 및 파이프라인까지 전체 서비스 시스템을 설계하고 구현합니다.',
  },
  {
    icon: 'heroicons:map-20-solid',
    title: 'GIS/지도 시스템 전문',
    description: 'OpenLayers, Cesium 3D 기반의 군사 지도 시스템을 설계했습니다. MIL-STD-2525D 군사 부호 렌더링 경험.',
  },
  {
    icon: 'heroicons:bolt-20-solid',
    title: '실시간 시스템 설계',
    description: 'WebSocket STOMP, RabbitMQ, Redis Pub/Sub를 활용한 이벤트 드리븐 아키텍처 경험.',
  },
  {
    icon: 'heroicons:squares-2x2-20-solid',
    title: '모듈 아키텍처 설계',
    description: 'Provider/Manager 패턴, 마이크로서비스, 멀티모듈 구조 등 확장 가능한 아키텍처 설계.',
  },
  {
    icon: 'heroicons:chart-bar-20-solid',
    title: 'AI 파이프라인 통합',
    description: 'YOLOv8, Stable Diffusion 등 외부 AI 모델을 서비스와 연결하기 위한 RabbitMQ 기반 마이크로서비스 바인딩 및 배포.',
  },
  {
    icon: 'heroicons:device-phone-mobile-20-solid',
    title: '멀티 클라이언트 개발',
    description: 'Electron 데스크톱 앱, Quasar 모바일 대응, PrimeVue 관리자 화면 동시 개발 경험.',
  },
  {
    icon: 'heroicons:academic-cap-20-solid',
    title: '개인 프로젝트로 스택 확장',
    description: '실무 외에 Next.js 콘텐츠 파이프라인·기술 블로그와 이커머스 MSA(게이트웨이·Kafka·K8s)를 끝까지 구축해 학습을 결과물로 남깁니다.',
  },
]
</script>

<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">
            About Me
          </p>
          <h1 class="text-3xl sm:text-4xl font-display font-bold text-surface-800 leading-tight tracking-tight mb-4">
            서비스의 처음부터 끝까지
            <span class="gradient-text">함께하는 개발자</span>
          </h1>
          <p class="text-base text-surface-600 leading-relaxed">
            웹 프론트엔드와 백엔드, AI 모델 바인딩 및 추론 파이프라인까지 아우르는 풀스택 개발자입니다. 개인 프로젝트로 Next.js 기술 블로그와 Spring Cloud 기반 MSA를 병행해 확장합니다.
          </p>
        </div>
      </div>
    </section>

    <!-- Strengths -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container">
        <h2 class="text-lg font-bold text-surface-800 mb-8 tracking-tight">핵심 강점</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="s in strengths"
            :key="s.title"
            class="p-5 rounded-xl bg-surface-50 border border-surface-100 hover:border-brand-200 transition-colors"
          >
            <div class="w-9 h-9 rounded-lg bg-white border border-surface-200 flex items-center justify-center mb-3">
              <Icon :name="s.icon" class="w-4 h-4 text-brand-500" />
            </div>
            <h3 class="text-base font-bold text-surface-800 mb-1.5">{{ s.title }}</h3>
            <p class="text-sm text-surface-500 leading-relaxed">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <h2 class="text-lg font-bold text-surface-800 mb-2 tracking-tight">기술 역량</h2>
        <p class="text-sm text-surface-500 mb-8">
          해당 스택으로 진행한 프로젝트·업무 맥락을 한 줄로 정리했습니다.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="cat in skillCategories"
            :key="cat.title"
            class="p-5 rounded-xl bg-white border border-surface-100"
          >
            <div class="flex items-center gap-2.5 mb-5">
              <div class="w-8 h-8 rounded-lg bg-surface-50 border border-surface-200 flex items-center justify-center">
                <Icon :name="cat.icon" class="w-4 h-4 text-brand-500" />
              </div>
              <h3 class="text-base font-bold text-surface-800">{{ cat.title }}</h3>
            </div>
            <div class="space-y-3.5">
              <div v-for="skill in cat.skills" :key="skill.name">
                <div class="text-sm font-medium text-surface-700 mb-1">{{ skill.name }}</div>
                <p v-if="skill.summary" class="text-xs text-surface-500 leading-snug">
                  {{ skill.summary }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container">
        <h2 class="text-lg font-bold text-surface-800 mb-8 tracking-tight">경력</h2>
        <div class="space-y-4">
          <div
            v-for="exp in experiences"
            :key="exp.period"
            class="p-5 sm:p-6 rounded-xl bg-surface-50 border border-surface-100"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
              <div>
                <h3 class="text-base font-bold text-surface-800">{{ exp.role }}</h3>
                <p class="text-sm text-brand-600 font-medium">{{ exp.company }} · {{ exp.project }}</p>
              </div>
              <span class="text-xs text-surface-400 whitespace-nowrap">{{ exp.period }}</span>
            </div>
            <p class="text-sm text-surface-600 leading-relaxed mb-3">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <TechBadge v-for="tech in exp.techs" :key="tech" :label="tech" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
