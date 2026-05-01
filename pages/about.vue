<script setup lang="ts">
useHead({
  title: '소개 | 이두현 포트폴리오',
})

const experiences = [
  {
    type: 'work',
    period: '2025.12 - 현재',
    role: '프론트엔드 개발 · 아키텍처 설계',
    company: '인피닉(Infiniq)',
    project: '전장 정보 편집기',
    description:
      '지도 모듈을 Provider/Manager 패턴으로 분리해 팀이 동시에 작업할 수 있는 구조를 설계했습니다. MIL-STD-2525D 부대 심볼·ORBAT 다이어그램, LRU SVG 캐시로 대량 심볼 렌더링 성능을 확보했습니다.',
    techs: ['Vue 3', 'OpenLayers 10', 'MIL-STD-2525D', 'Tailwind CSS 4', 'Pinia', 'Vue Flow', 'Turf.js'],
  },
  {
    type: 'work',
    period: '2025.06 - 2025.11',
    role: '풀스택 개발',
    company: '인피닉(Infiniq)',
    project: '3D 전장 상황 인지 시스템 (C4I)',
    description:
      '지휘·관리·엣지 클라이언트 3개를 동시에 개발하며 API 계약을 맞췄습니다. AI 분석 모델·HLS 스트리밍 연동, WebSocket STOMP 실시간 GPS 추적을 구현했습니다.',
    techs: ['Vue 3', 'Cesium 1.128', 'PrimeVue 4', 'Quasar 2', 'Spring Boot 3.3', 'PostgreSQL', 'WebSocket', 'HLS.js'],
  },
  {
    type: 'work',
    period: '2024.04 - 2025.05',
    role: '풀스택 개발 · AI 파이프라인 통합',
    company: '인피닉(Infiniq)',
    project: '지능형 영상 비식별화 플랫폼',
    description:
      'AI 추론 모델 5개를 RabbitMQ · Redis Pub/Sub · WebSocket 3-tier 파이프라인으로 연결했습니다. Electron 데스크톱 앱, SFTP 파일 전송, 수동 비식별화 캔버스 편집기를 같은 코드베이스에서 구현했습니다.',
    techs: ['Vue 3', 'Electron 30', 'Spring Boot 3.2', 'Python', 'RabbitMQ', 'Redis', 'YOLOv8', 'Docker'],
  },
  {
    type: 'work',
    period: '2023.04 - 2024.03',
    role: '풀스택 개발',
    company: '인피닉(Infiniq)',
    project: 'AI 학습 데이터 관리 플랫폼',
    description:
      '플러그인 기반 데이터 처리 파이프라인, RabbitMQ 비동기 작업 자동화, 공통 라이브러리 설계를 담당했습니다. JSP 레거시와 REST 신규 기능이 공존하도록 모듈 경계를 정리했습니다.',
    techs: ['Spring Boot 2.7', 'JSP', 'jQuery', 'MyBatis', 'MariaDB', 'MongoDB', 'RabbitMQ', 'Python'],
  },
  {
    type: 'personal',
    period: '2026.02 - 현재',
    role: '풀스택 (개인 프로젝트)',
    company: '개인',
    project: 'dev-blog — 기술 블로그',
    description:
      'Next.js 16 App Router · Server Actions · unified(remark/rehype) 파이프라인으로 기술 블로그를 구축했습니다. Sandpack 인라인 코드 실행, Prisma 댓글, Vitest 단위 테스트, Vercel 배포까지 직접 운영합니다.',
    techs: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL', 'Vitest', 'Sandpack'],
  },
  {
    type: 'personal',
    period: '2026.01 - 현재',
    role: '풀스택 (개인 프로젝트)',
    company: '개인',
    project: 'e-commerce MSA',
    description:
      'Spring Cloud Gateway · Kafka · Kubernetes 기반 이커머스 MSA를 처음부터 설계했습니다. Blue/Green 배포, TestContainers 통합 테스트, PortOne 결제 연동, GHCR CI/CD까지 직접 구성합니다.',
    techs: ['Spring Boot 3.2', 'Spring Cloud Gateway', 'Kafka', 'Redis', 'React 19', 'Kubernetes', 'Docker', 'GitHub Actions'],
  },
]

const strengths = [
  {
    icon: 'heroicons:magnifying-glass-20-solid',
    title: '문제 정의 · Root Cause 분석',
    description: '기능 요청 뒤에 숨은 진짜 문제를 찾습니다. 렌더링 지연을 SVG 생성 비용으로, 파이프라인 블로킹을 동기 구조로 추적한 것처럼 증상이 아닌 원인을 해결합니다.',
  },
  {
    icon: 'heroicons:puzzle-piece-20-solid',
    title: 'End-to-End 제품 개발',
    description: 'TypeScript 기반 Vue 3 · Nuxt · React 19 · Next.js 프론트엔드, Spring Boot 3 · Spring Cloud 백엔드, Python AI 파이프라인까지 한 사람이 처음부터 끝까지 구현합니다.',
  },
  {
    icon: 'heroicons:sparkles-20-solid',
    title: 'AI를 제품 핵심 로직으로',
    description: 'YOLOv8 · Stable Diffusion 추론을 서비스 파이프라인에 연결하고, 개발 과정에서 Claude Code · Cursor 에이전트 워크플로우로 탐색·리팩터링을 자동화합니다.',
  },
  {
    icon: 'heroicons:bolt-20-solid',
    title: '실시간 이벤트 처리',
    description: 'WebSocket STOMP, RabbitMQ, Kafka, Redis Pub/Sub로 이벤트 드리븐 파이프라인과 실시간 다중 클라이언트 연동을 설계합니다.',
  },
  {
    icon: 'heroicons:squares-2x2-20-solid',
    title: '모듈 아키텍처 설계',
    description: 'Provider/Manager 퍼사드, Spring Boot 멀티모듈, Spring Cloud Gateway 기반 MSA 등 확장 가능한 서비스 경계 설계와 기술 문서 작성 경험이 있습니다.',
  },
  {
    icon: 'heroicons:chat-bubble-left-right-20-solid',
    title: '팀 협업 · 기술 공유',
    description: '아키텍처 변경은 다이어그램과 문서로 팀에 공유하고 리뷰를 요청합니다. AI 연구팀과 메시지 계약을 맞추며 기술적 제약을 숨기지 않고 함께 해결합니다.',
  },
]

const activeCategory = ref('all')
const categories = [
  { id: 'all', label: '전체' },
  { id: 'work', label: '실무' },
  { id: 'personal', label: '개인' },
]

const filteredExperiences = computed(() => {
  if (activeCategory.value === 'all') return experiences
  return experiences.filter(exp => exp.type === activeCategory.value)
})
</script>

<template>
  <div class="pt-24">

    <!-- ── Hero ──────────────────────────────────────────── -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-4">About Me</p>
          <h1 class="text-3xl sm:text-4xl font-display font-bold text-black leading-tight tracking-tight mb-5">
            문제를 먼저 정의하고<br/>
            끝까지 해결합니다.
          </h1>
          <div class="space-y-4 text-sm sm:text-base text-surface-600 leading-relaxed">
            <p>
              기능 요구사항을 받아도 <strong class="text-black">"왜 이게 필요한가"를 먼저 묻습니다.</strong>
              증상이 아닌 Root Cause를 찾을 때까지 파고드는 방식으로
              3년간 AI 파이프라인 · 대규모 지도 UI · 분산 시스템을 설계해왔습니다.
            </p>
            <p>
              <strong class="text-black">TypeScript를 공통 기반으로 Vue 3 · Nuxt와 React 19 · Next.js</strong> 프론트엔드,
              <strong class="text-black">Spring Boot 3 · Spring Cloud</strong> 백엔드, Python AI 파이프라인까지
              <strong class="text-black">End-to-End로 혼자 설계·구현·배포</strong>한 경험이 있습니다.
            </p>
            <p>
              AI는 보조 도구가 아닌 제품의 핵심 로직으로 씁니다. YOLOv8 · Stable Diffusion 추론을 서비스에 연결하고,
              개발 과정에서 <strong class="text-black">Claude Code · Cursor 기반 에이전트 워크플로우</strong>로 탐색·리팩터링을 자동화합니다.
              아키텍처 변경은 다이어그램과 문서로 팀에 먼저 공유하고, 기술적 제약도 숨기지 않고 함께 풀어나갑니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 핵심 강점 ──────────────────────────────────────── -->
    <section class="py-14 sm:py-20 bg-surface-100">
      <div class="section-container">
        <h2 class="text-xl font-bold text-black mb-8 tracking-tight">핵심 강점</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="s in strengths"
            :key="s.title"
            class="card-base p-5"
          >
            <div class="w-9 h-9 rounded-[8px] bg-black flex items-center justify-center mb-3">
              <Icon :name="s.icon" class="w-4 h-4 text-white" />
            </div>
            <h3 class="text-sm font-bold text-black mb-1.5">{{ s.title }}</h3>
            <p class="text-xs text-surface-500 leading-relaxed">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 경력 타임라인 ──────────────────────────────────── -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 class="text-xl font-bold text-black tracking-tight">경력 · 프로젝트</h2>

          <div class="flex bg-surface-200 p-1 rounded-[999px] w-fit gap-1">
            <button
              v-for="cat in categories"
              :key="cat.id"
              class="px-4 py-1.5 text-xs font-semibold rounded-[999px] transition-all whitespace-nowrap"
              :class="[
                activeCategory === cat.id
                  ? 'bg-black text-white'
                  : 'text-surface-600 hover:text-black'
              ]"
              @click="activeCategory = cat.id"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="exp in filteredExperiences"
            :key="exp.period + exp.project"
            class="card-base p-5 sm:p-6"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="text-[10px] px-2.5 py-0.5 rounded-[999px] font-bold"
                    :class="exp.type === 'work' ? 'bg-black text-white' : 'bg-brand-300 text-black'"
                  >
                    {{ exp.type === 'work' ? '실무' : '개인' }}
                  </span>
                  <h3 class="text-sm font-bold text-black">{{ exp.role }}</h3>
                </div>
                <p class="text-xs text-surface-500 font-medium">{{ exp.company }} · {{ exp.project }}</p>
              </div>
              <span class="text-xs text-surface-400 whitespace-nowrap font-mono">{{ exp.period }}</span>
            </div>
            <p class="text-sm text-surface-600 leading-relaxed mb-3">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <TechBadge v-for="tech in exp.techs" :key="tech" :label="tech" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────── -->
    <section class="py-14 sm:py-20 bg-black">
      <div class="section-container">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 class="text-xl font-bold text-white mb-1">프로젝트 더 보기</h2>
            <p class="text-sm text-surface-400">각 프로젝트의 기술 선택 이유와 아키텍처를 상세히 정리했습니다.</p>
          </div>
          <div class="flex flex-wrap gap-3 shrink-0">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-[999px] hover:bg-brand-100 transition-colors"
            >
              프로젝트 보기
            </NuxtLink>
            <NuxtLink
              to="/resume"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-[999px] hover:bg-white/20 transition-colors"
            >
              이력서 보기
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
