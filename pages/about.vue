<script setup lang="ts">
useHead({
  title: 'About | Portfolio',
})

const experiences = [
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
    period: '2024.01 - 현재',
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
    techs: ['Vue 3', 'Spring Boot', 'JSP', 'MyBatis', 'MariaDB', 'MongoDB', 'RabbitMQ', 'Python'],
  },
]

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'heroicons:computer-desktop-20-solid',
    skills: [
      { name: 'Vue 3 / Nuxt 3', level: 90 },
      { name: 'Electron', level: 80 },
      { name: 'PrimeVue / Quasar', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Pinia', level: 85 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: 'heroicons:server-20-solid',
    skills: [
      { name: 'Spring Boot 3', level: 85 },
      { name: 'Spring Security / JWT', level: 80 },
      { name: 'MyBatis / JPA', level: 85 },
      { name: 'REST API Design', level: 85 },
      { name: 'RabbitMQ', level: 80 },
      { name: 'WebSocket (STOMP)', level: 80 },
    ],
  },
  {
    title: 'GIS / Map',
    icon: 'heroicons:map-20-solid',
    skills: [
      { name: 'OpenLayers', level: 85 },
      { name: 'Cesium 3D', level: 80 },
      { name: 'MIL-STD-2525D', level: 80 },
      { name: 'MGRS / proj4', level: 75 },
      { name: 'GeoTools / JTS', level: 70 },
      { name: 'Turf.js', level: 75 },
    ],
  },
  {
    title: 'AI / ML',
    icon: 'heroicons:cpu-chip-20-solid',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'YOLOv8 / Object Detection', level: 75 },
      { name: 'ONNX Runtime / TensorRT', level: 70 },
      { name: 'Stable Diffusion', level: 70 },
      { name: 'OpenCV', level: 80 },
      { name: 'PyTorch', level: 65 },
    ],
  },
  {
    title: 'Database',
    icon: 'heroicons:circle-stack-20-solid',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MariaDB / MySQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQLite', level: 75 },
      { name: 'Ehcache / Caffeine', level: 70 },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'heroicons:cloud-20-solid',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Linux / Shell', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'Nginx', level: 75 },
      { name: 'Prometheus', level: 65 },
      { name: 'CI/CD', level: 70 },
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
            웹 프론트엔드와 백엔드, AI 모델 바인딩 및 추론 파이프라인까지 아우르는 풀스택 개발자입니다.
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
        <p class="text-sm text-surface-500 mb-8">각 영역에서의 실무 경험 기반 역량 수준입니다.</p>
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
            <div class="space-y-3">
              <div v-for="skill in cat.skills" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-surface-700">{{ skill.name }}</span>
                  <span class="text-xs text-surface-400">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 bg-surface-100 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-brand-500 rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
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
