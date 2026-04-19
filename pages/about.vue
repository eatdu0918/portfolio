<script setup lang="ts">
useHead({
  title: 'About | Portfolio',
})

import { ref, computed } from 'vue'

const experiences = [
  {
    type: 'work',
    period: '2025.12 - 현재',
    role: '프론트엔드 개발 (아키텍처 설계)',
    company: 'AI/GIS 솔루션즈',
    project: '전장 정보 편집기',
    description:
      '지도 모듈을 Provider/Manager 패턴으로 쪼개 팀이 동시에 손댈 수 있는 뼈대를 잡았고, MIL-STD-2525D 부호·ORBAT 다이어그램처럼 요구가 무거운 UI를 Vue 쪽에서 끝까지 밀어 넣었습니다. 상세 지도·부호 스펙은 프로젝트 탭을 참고해 주세요.',
    techs: ['Vue 3', 'OpenLayers', 'MIL-STD-2525D', 'Tailwind CSS', 'Pinia', 'Vue Flow', 'Turf.js'],
  },
  {
    type: 'work',
    period: '2025.06 - 2025.11',
    role: '풀스택 개발',
    company: 'AI/GIS 솔루션즈',
    project: '3D 전장 상황 인지 시스템',
    description:
      '지휘·관리·엣지 3클라이언트를 동시에 맡아 화면·API 계약을 맞췄고, 외부 분석 모델·HLS 스트리밍처럼 “연결만 어렵다”는 구간을 직접 이어 붙였습니다. 시스템이 무엇을 하는지는 프로젝트 상세에서 다룹니다.',
    techs: ['Vue 3', 'Cesium', 'PrimeVue', 'Quasar', 'Spring Boot 3', 'PostgreSQL', 'WebSocket', 'HLS.js'],
  },
  {
    type: 'work',
    period: '2024.04 - 2025.05',
    role: '풀스택 개발 + AI 파이프라인 통합',
    company: 'AI/GIS 솔루션즈',
    project: '지능형 영상 비식별화 플랫폼',
    description:
      'Electron·SFTP·로컬 SQLite와 Spring API·큐·Redis를 한 흐름으로 엮는 데 집중했습니다. 다단계 AI 워커와 수동 비식별 분기에서 메시지·상태 이벤트가 끊기지 않게 설계·디버깅을 반복했고, 기술별로 무엇을 했는지는 기술 스택 탭에 정리했습니다.',
    techs: ['Vue 3', 'Electron', 'Spring Boot 3', 'Python', 'RabbitMQ', 'Redis', 'YOLOv8', 'Docker'],
  },
  {
    type: 'work',
    period: '2023.04 - 2024.03',
    role: '풀스택 개발',
    company: 'AI/GIS 솔루션즈',
    project: 'AI 학습 데이터 관리 플랫폼',
    description:
      '공통 라이브러리·프론트·API·컨슈머가 같은 도메인 규칙을 쓰도록 모듈 경계를 정리하고, JSP 레거시와 REST·큐 기반 신규 기능이 공존하도록 이관 구간을 맡았습니다. 듀얼 DB·플러그인 파이프라인의 책임 분리를 설계에 반영했습니다.',
    techs: ['Spring Boot', 'JSP', 'jQuery', 'MyBatis', 'MariaDB', 'MongoDB', 'RabbitMQ', 'Python'],
  },
  {
    type: 'personal',
    period: '2026.02 - 현재',
    role: '풀스택 (개인 프로젝트)',
    company: '개인 프로젝트',
    project: 'dev-blog (기술 블로그)',
    description:
      '콘텐츠 파이프라인(remark/rehype 확장)과 본문 임베딩(Sandpack·Mermaid) 설계를 주도했고, 댓글 도메인은 Prisma·Server Actions로 서버 측에서 일관되게 처리하도록 맡았습니다. 배포·품질은 Vercel·Vitest로 끝까지 책임졌습니다.',
    techs: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vitest', 'Sandpack'],
  },
  {
    type: 'personal',
    period: '2026.01 - 현재',
    role: '풀스택 (개인 프로젝트)',
    company: '개인 프로젝트',
    project: 'e-commerce MSA',
    description:
      '도메인을 기준으로 서비스 경계를 나누고 Gateway·이벤트 흐름을 직접 연결해 “끊기지 않는” 주문·재고 시나리오를 검증했습니다. 클라이언트·인프라(K8s, GHCR)까지 한 사람이 맥락을 유지하도록 구성했습니다.',
    techs: ['Spring Boot 3', 'Spring Cloud Gateway', 'Kafka', 'Redis', 'React 19', 'Kubernetes', 'Docker', 'GitHub Actions'],
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
    description: 'OpenLayers, Cesium 3D 기반의 군사 지도 시스템을 설계했습니다. 표준 전술 심볼 렌더링 경험.',
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

const activeCategory = ref('all')
const categories = [
  { id: 'all', label: '전체' },
  { id: 'work', label: '회사 프로젝트' },
  { id: 'personal', label: '개인 프로젝트' },
]

const filteredExperiences = computed(() => {
  if (activeCategory.value === 'all') return experiences
  return experiences.filter((exp) => exp.type === activeCategory.value)
})
</script>

<template>
  <div class="pt-24">
    <!-- Hero -->
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">
            About Me
          </p>
          <h1 class="text-3xl sm:text-4xl font-display font-bold text-surface-800 leading-tight tracking-tight mb-4">
            서비스의 처음부터 끝까지
            <span class="gradient-text">관여하는 개발자</span>
          </h1>
          <p class="text-base text-surface-600 leading-relaxed">
            안녕하세요, 복잡한 도메인 요구사항을 아키텍처 수준에서 해석하고, 서비스의 엔드투엔드 흐름을 직접 설계·구축하는 것에 즐거움을 느끼는 풀스택 개발자 이두현입니다.
          </p>
          <div class="mt-6 space-y-4 text-base text-surface-600 leading-relaxed">
            <p>
              실무에서는 주로 <strong>GIS 기반 군사 지휘통제 시스템(C4I)</strong>과 <strong>지능형 영상 비식별화 플랫폼</strong>을 개발해 왔습니다. 
              Cesium 3D 환경에서 NATO 표준 군사 기호(MIL-STD-2525D)를 대량으로 렌더링하기 위한 최적화 파이프라인을 구축하고, 
              다단계 AI 모델의 추론 데이터를 RabbitMQ와 Redis를 활용해 실시간으로 처리하는 이벤트 드리븐 시스템을 설계했습니다.
            </p>
            <p>
              단순한 기능 구현을 넘어, <strong>Electron 데스크톱 앱</strong>부터 <strong>WebSocket 기반의 실시간 다중 클라이언트 연동</strong>까지 
              복잡한 비즈니스 로직을 구조적으로 나누고 비동기 처리를 통해 사용자 경험을 개선하는 데 강점이 있습니다. 
              기획 및 AI 연구팀과 긴밀히 소통하며 기술적 제약을 함께 풀어나가는 과정을 소중히 여깁니다.
            </p>
            <p>
              현재는 서비스 전체를 조망하는 시야를 넓히기 위해 <strong>Spring Cloud와 Kubernetes 기반의 MSA</strong> 환경을 구축하며 
              분산 시스템의 정합성과 배포 자동화를 탐구하고 있습니다. 또한 <strong>기술 블로그</strong>를 통해 최신 웹 기술의 성능 최적화를 실천하며, 
              제가 배운 지식을 기록하고 공유하는 일을 즐깁니다.
            </p>
          </div>
          <p class="mt-4 text-sm text-surface-500 leading-relaxed">
            기술별 활용 내역은
            <NuxtLink to="/skills" class="text-brand-600 font-semibold hover:underline">기술 스택</NuxtLink>,
            제품·시스템 설명은
            <NuxtLink to="/projects" class="text-brand-600 font-semibold hover:underline">프로젝트</NuxtLink>
            탭에서 확인할 수 있습니다.
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

    <!-- Experience -->
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 class="text-lg font-bold text-surface-800 tracking-tight">경력</h2>
          
          <!-- Category Tabs -->
          <div class="flex bg-surface-100 p-1 rounded-lg w-fit">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              class="px-4 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap"
              :class="[
                activeCategory === cat.id
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-surface-500 hover:text-surface-700'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="exp in filteredExperiences"
            :key="exp.period + exp.project"
            class="p-5 sm:p-6 rounded-xl bg-white border border-surface-100 shadow-sm hover:shadow-md transition-all"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span 
                    class="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                    :class="exp.type === 'work' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'"
                  >
                    {{ exp.type === 'work' ? 'Work' : 'Personal' }}
                  </span>
                  <h3 class="text-base font-bold text-surface-800">{{ exp.role }}</h3>
                </div>
                <p class="text-sm text-brand-600 font-medium">{{ exp.company }} · {{ exp.project }}</p>
              </div>
              <span class="text-xs text-surface-400 whitespace-nowrap">{{ exp.period }}</span>
            </div>
            <p class="text-sm text-surface-600 leading-relaxed mb-3">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <TechBadge v-for="tech in exp.techs" :key="tech" :label="tech" size="sm" />
            </div>
          </div>

          <p v-if="filteredExperiences.length === 0" class="text-center py-10 text-surface-400 text-sm">
            해당 카테고리의 프로젝트가 없습니다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
