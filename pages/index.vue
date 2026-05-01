<script setup lang="ts">
useHead({
  title: '이두현 | 풀스택 개발자 — TypeScript · Vue · React · Spring',
  meta: [
    { name: 'description', content: '기능이 아닌 문제를 정의하고 End-to-End로 구현합니다. Vue 3 · Nuxt · React 19 · Next.js · Spring Boot 3 · AI 파이프라인 · Kubernetes' },
  ],
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects')
    .where('featured', '=', true)
    .order('order', 'DESC')
    .all(),
)

const capabilities = [
  {
    icon: 'heroicons:queue-list-20-solid',
    title: '비동기 이벤트 파이프라인',
    description:
      'AI 추론 모델 5개를 RabbitMQ · Redis Pub/Sub · WebSocket으로 연결하는 파이프라인을 설계했습니다. 이커머스 주문 처리, 금융 정산, 미디어 트랜스코딩—어느 도메인이든 "오래 걸리는 작업"을 비동기로 풀어내는 패턴은 동일합니다.',
    badge: 'Vision Factory · MSA',
  },
  {
    icon: 'heroicons:computer-desktop-20-solid',
    title: '복잡한 실시간 UI 아키텍처',
    description:
      'WebSocket STOMP로 멀티 클라이언트를 동기화하고, Provider/Manager 패턴으로 수백 개 오브젝트를 LRU 캐시와 함께 렌더링합니다. 실시간 대시보드 · 협업 툴 · 물류 관제 화면에 그대로 전이되는 아키텍처입니다.',
    badge: 'Tactical Viz · COP',
  },
  {
    icon: 'heroicons:circle-stack-20-solid',
    title: '분산 시스템 설계·운영',
    description:
      'Spring Cloud Gateway · Kafka · Kubernetes 기반 MSA를 처음부터 직접 설계하고 GHCR · GitHub Actions로 배포합니다. 서비스 경계 설계, 이벤트 흐름, Blue/Green 전략까지—규모와 도메인에 관계없이 적용됩니다.',
    badge: 'e-commerce MSA',
  },
]

const workingStyle = [
  {
    icon: 'heroicons:magnifying-glass-20-solid',
    title: '문제를 먼저 정의합니다',
    description:
      '기능 요구사항을 받아도 "왜 이게 필요한가"를 먼저 묻습니다. AI 추론 파이프라인의 블로킹 이슈처럼, 증상이 아닌 Root Cause를 찾을 때까지 파고듭니다. Feature가 아닌 문제 단위로 설계를 시작합니다.',
  },
  {
    icon: 'heroicons:bolt-20-solid',
    title: '빠르게 실행하고 검증합니다',
    description:
      '3년간 1~3인 팀에서 프론트 · 백 · 인프라를 동시에 맡아 빠른 판단과 실행을 반복했습니다. 완벽한 설계를 기다리기보다 최소 동작 단위를 먼저 만들고 피드백을 통해 개선합니다.',
  },
  {
    icon: 'heroicons:sparkles-20-solid',
    title: 'AI를 제품 흐름 안에 녹입니다',
    description:
      'YOLOv8 · Stable Diffusion 추론을 서비스 파이프라인에 직접 연결했습니다. CLAUDE.md 하네스 · 자동 검증 훅 4종 · 커스텀 커맨드 6종 · 전문 에이전트 3종으로 이루어진 AI 개발 시스템을 직접 설계해 운용합니다.',
  },
  {
    icon: 'heroicons:chat-bubble-left-right-20-solid',
    title: '팀의 언어로 끝까지 공유합니다',
    description:
      '아키텍처 변경은 다이어그램과 문서로 팀에 먼저 공유하고 리뷰를 요청합니다. AI 연구팀과 메시지 계약 · DTO 스펙을 맞추고, 기술적 제약도 숨기지 않고 함께 풀어나가는 방식으로 협업합니다.',
  },
]

const problemCases = [
  {
    number: '01',
    title: '수백 개 오브젝트 렌더링 지연 — Root Cause 추적',
    situation: '지도 위에 수백 개 SVG 심볼을 동시에 배치할 때, 지도 이동·확대마다 눈에 띄는 렌더링 지연이 발생했습니다. "느리다"는 현상 뒤에 실제 병목이 무엇인지 먼저 측정했습니다.',
    approach: 'Profiling 결과 SVG 생성 자체가 반복 호출되는 것이 원인이었습니다. LRU 알고리즘 기반 캐시(최대 120개)를 도입해 동일 심볼은 즉시 반환하도록 하고, keep-alive로 맵 화면 전환 시 컴포넌트 재마운트 비용도 제거했습니다.',
    result: '심볼 생성 비용을 대폭 절감해 지도 인터랙션이 눈에 띄게 부드러워졌습니다. 증상이 아닌 원인을 해결한 덕에 이후 심볼 종류가 늘어도 구조가 버텼습니다.',
    tags: ['Vue 3', 'OpenLayers', 'LRU Cache', 'Performance'],
  },
  {
    number: '02',
    title: 'AI 추론 파이프라인 블로킹 — 동기 구조의 근본 문제',
    situation: 'AI 추론 모델 5개가 동기 방식으로 연결되어 하나의 모델 지연이 전체 흐름을 블로킹했습니다. 요청이 늘수록 처리 시간이 선형으로 증가하는 구조적 문제였습니다.',
    approach: '"각 모델이 왜 서로를 기다려야 하는가"를 질문하고 의존 관계를 끊었습니다. 모델별 RabbitMQ 큐를 분리해 독립적으로 처리하도록 재설계하고, Redis Pub/Sub → Spring Boot → WebSocket의 3-tier로 상태를 클라이언트까지 실시간 전달했습니다.',
    result: '특정 모델 지연이 다른 모델에 영향을 주지 않게 되었습니다. 처리 진행률을 실시간으로 확인할 수 있어 사용자 경험도 함께 개선됐습니다.',
    tags: ['RabbitMQ', 'Redis Pub/Sub', 'Python', 'WebSocket'],
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────── -->
    <section class="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      <div class="section-container">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-5 animate-fade-in">
            Full-Stack Developer
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-black leading-[1.15] tracking-tight animate-slide-up">
            기능보다 문제를,<br/>
            처음부터 끝까지.
          </h1>
          <p class="mt-6 text-base sm:text-lg text-surface-600 leading-relaxed max-w-2xl animate-fade-in" style="animation-delay: 0.15s">
            군사 C4I · AI 파이프라인 · 3D GIS · 이커머스 MSA—
            도메인이 달라도 문제를 먼저 정의하고 End-to-End로 구현합니다.
            TypeScript 기반 풀스택 개발자 이두현입니다.
          </p>
          <div class="mt-8 flex flex-wrap gap-3 animate-fade-in" style="animation-delay: 0.25s">
            <NuxtLink to="/projects" class="btn-pill-primary">
              프로젝트 보기
              <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="/resume" class="btn-pill-secondary">
              이력서 보기
            </NuxtLink>
          </div>

          <!-- 스펙 칩 -->
          <div class="mt-10 flex flex-wrap gap-2 animate-fade-in" style="animation-delay: 0.35s">
            <span
              v-for="chip in ['경력 3년 1개월', 'Vue 3 · Nuxt', 'React · Next.js', 'Spring Boot 3', 'AI 파이프라인', 'Kubernetes']"
              :key="chip"
              class="text-xs px-3 py-1.5 rounded-[999px] bg-brand-300 text-black font-medium"
            >
              {{ chip }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 일하는 방식 ─────────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-black">
      <div class="section-container">
        <div class="mb-10">
          <p class="text-xs font-semibold text-surface-500 tracking-[0.18em] uppercase mb-3">How I Work</p>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            일하는 방식
          </h2>
          <p class="mt-3 text-sm text-surface-400 max-w-xl leading-relaxed">
            어떤 팀에서 일해도 변하지 않는 네 가지입니다.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(w, i) in workingStyle"
            :key="w.title"
            class="p-5 rounded-[8px] border border-white/10 hover:border-white/25 transition-colors"
          >
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-[8px] bg-white/10 flex items-center justify-center">
                <Icon :name="w.icon" class="w-4 h-4 text-white" />
              </div>
              <span class="text-[11px] font-bold text-white/30 font-mono">0{{ i + 1 }}</span>
            </div>
            <h3 class="text-sm font-bold text-white mb-2">{{ w.title }}</h3>
            <p class="text-xs text-surface-400 leading-relaxed">{{ w.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AI 개발 시스템 ────────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-white border-t border-surface-300">
      <div class="section-container">
        <div class="mb-10">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">AI Development System</p>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
            AI를 보조 도구가 아닌<br class="hidden sm:block"/>
            팀의 생산성 시스템으로 설계합니다.
          </h2>
          <p class="mt-3 text-sm text-surface-500 max-w-xl leading-relaxed">
            MSA 프로젝트에서 직접 설계한 Claude Code 기반 개발 자동화 시스템입니다.
            CLAUDE.md에 팀 규칙을 인코딩하고, 훅·커맨드·에이전트로 반복 작업을 없앱니다.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-5 mb-8">
          <!-- Hooks -->
          <div class="card-base p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-9 h-9 rounded-[8px] bg-black flex items-center justify-center">
                <Icon name="heroicons:shield-check-20-solid" class="w-4 h-4 text-white" />
              </div>
              <div>
                <p class="text-[10px] font-bold text-surface-400 tracking-wider uppercase">자동 검증</p>
                <p class="text-sm font-bold text-black">훅 4종</p>
              </div>
            </div>
            <ul class="space-y-2.5 text-xs text-surface-600">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">pre-bash-danger</strong> — <code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">docker compose down -v</code>, 강제 푸시 등 위험 명령 차단</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">post-java-compile</strong> — 파일 수정 후 Gradle 자동 컴파일 (90초 타임아웃)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">post-flyway-validate</strong> — 마이그레이션 파일 변경 시 charset·엔진·타입 자동 검증</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">on-stop</strong> — 세션 종료 시 git diff 요약 자동 출력</span>
              </li>
            </ul>
          </div>

          <!-- Commands -->
          <div class="card-base p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-9 h-9 rounded-[8px] bg-black flex items-center justify-center">
                <Icon name="heroicons:command-line-20-solid" class="w-4 h-4 text-white" />
              </div>
              <div>
                <p class="text-[10px] font-bold text-surface-400 tracking-wider uppercase">커스텀 커맨드</p>
                <p class="text-sm font-bold text-black">6종</p>
              </div>
            </div>
            <ul class="space-y-2.5 text-xs text-surface-600">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/새서비스</code> — MSA 서비스 전체 스캐폴딩을 10분 내 완성</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/api추가</code> — DTO·Service·Controller·Flyway 전 레이어 일괄 생성</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/saga구현</code> — Kafka Saga 패턴 + 보상 트랜잭션 구현</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/마이그레이션</code> · <code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/상태확인</code> · <code class="text-[10px] bg-brand-300 px-1 py-0.5 rounded">/코드리뷰</code></span>
              </li>
            </ul>
          </div>

          <!-- Agents -->
          <div class="card-base p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-9 h-9 rounded-[8px] bg-black flex items-center justify-center">
                <Icon name="heroicons:cpu-chip-20-solid" class="w-4 h-4 text-white" />
              </div>
              <div>
                <p class="text-[10px] font-bold text-surface-400 tracking-wider uppercase">전문 에이전트</p>
                <p class="text-sm font-bold text-black">3종</p>
              </div>
            </div>
            <ul class="space-y-2.5 text-xs text-surface-600">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">빌드분석</strong> — Gradle 에러 Root Cause 자동 추적·해결 방안 제시</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">성능진단</strong> — N+1 · Kafka Lag · Redis Miss 패턴 탐지 및 분석</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0"></span>
                <span><strong class="text-black">테스트작성</strong> — JUnit5 · Mockito · spring-kafka-test 기반 테스트 자동 생성</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Closing statement -->
        <div class="flex items-center gap-4 p-5 rounded-[8px] bg-surface-100 border border-surface-300">
          <div class="w-9 h-9 rounded-[8px] bg-black flex items-center justify-center flex-shrink-0">
            <Icon name="heroicons:rocket-launch-20-solid" class="w-4 h-4 text-white" />
          </div>
          <p class="text-sm text-surface-700 leading-relaxed">
            <strong class="text-black">새 팀에 합류하면 팀의 패턴을 CLAUDE.md에 인코딩하고 이 시스템을 3일 이내에 세팅합니다.</strong>
            — 코드 컨벤션, 금지 명령, 서비스 포트맵, 팀 아키텍처 결정을 AI 컨텍스트로 주입해 전체 팀의 개발 속도를 높입니다.
          </p>
        </div>
      </div>
    </section>

    <!-- ── 왜 어디서나 통하는가 ──────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-surface-100">
      <div class="section-container">
        <div class="mb-10">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">Why It Works Anywhere</p>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
            스택이 다양한 게 아니라,<br class="hidden sm:block"/>
            문제를 구조적으로 풀어온 겁니다.
          </h2>
          <p class="mt-3 text-sm text-surface-500 max-w-xl leading-relaxed">
            도메인은 바뀌어도 복잡한 시스템에서 반복되는 문제는 같습니다. 아래 세 역량은 어느 회사에서도 즉시 쓸 수 있습니다.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-5">
          <div
            v-for="cap in capabilities"
            :key="cap.title"
            class="card-base p-6"
          >
            <div class="w-10 h-10 rounded-[8px] bg-black flex items-center justify-center mb-4">
              <Icon :name="cap.icon" class="w-5 h-5 text-white" />
            </div>
            <h3 class="text-base font-bold text-black mb-2">{{ cap.title }}</h3>
            <p class="text-sm text-surface-600 leading-relaxed mb-4">{{ cap.description }}</p>
            <span class="text-[10px] px-2.5 py-1 rounded-[999px] bg-brand-300 text-black font-medium">
              {{ cap.badge }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Featured Projects ──────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="section-container">
        <div class="flex items-end justify-between mb-8">
          <div>
            <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-2">Projects</p>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
              주요 프로젝트
            </h2>
          </div>
          <NuxtLink
            to="/projects"
            class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:opacity-60 transition-opacity"
          >
            전체 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            v-for="(project, idx) in projects"
            :key="project.path"
            :title="project.title"
            :summary="project.summary ?? ''"
            :slug="projectRouteSlug(project)"
            :detail-path="project.path"
            :tags="project.tags ?? []"
            :period="project.period"
            :featured="project.featured"
            :thumbnail="project.thumbnail ?? project.gallery?.[0]?.src"
            :live-url="project.liveUrl"
            :work-type="project.workType"
            :ai-generated="project.aiGenerated"
            :index="Number(idx) + 1"
          />
        </div>

        <div class="mt-8 sm:hidden text-center">
          <NuxtLink to="/projects" class="btn-pill-secondary">
            모든 프로젝트 보기
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── 문제 해결 사례 ──────────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-surface-100">
      <div class="section-container">
        <div class="mb-10">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">Problem Solving</p>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
            이렇게 Root Cause를 찾았습니다.
          </h2>
          <p class="mt-3 text-sm text-surface-500 max-w-xl">
            증상이 아닌 원인을 찾아 해결한 사례입니다. 결과보다 접근 방식에 집중했습니다.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="c in problemCases"
            :key="c.number"
            class="card-base p-7"
          >
            <p class="text-[11px] font-bold text-surface-400 tracking-[0.15em] uppercase mb-3">Case {{ c.number }}</p>
            <h3 class="text-base font-bold text-black mb-5 leading-snug">{{ c.title }}</h3>

            <div class="space-y-4 text-sm">
              <div>
                <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-1">상황</p>
                <p class="text-surface-600 leading-relaxed">{{ c.situation }}</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-1">접근 (Root Cause → 해결)</p>
                <p class="text-surface-600 leading-relaxed">{{ c.approach }}</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-1">결과</p>
                <p class="text-surface-700 font-medium leading-relaxed">{{ c.result }}</p>
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span
                v-for="tag in c.tags"
                :key="tag"
                class="text-[10px] px-2.5 py-0.5 rounded-[999px] bg-brand-300 text-black font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Final CTA ──────────────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-white border-t border-surface-300">
      <div class="section-container">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-4">Get In Touch</p>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight mb-4">
            팀에 필요한 개발자라면<br/>
            지금 연락해 주세요.
          </h2>
          <p class="text-sm text-surface-500 leading-relaxed mb-8 max-w-lg">
            문제를 정의하고 끝까지 해결하는 개발자를 찾고 있다면—
            도메인은 가리지 않습니다.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="mailto:eatdu0918@gmail.com"
              class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-semibold rounded-[999px] hover:bg-surface-800 transition-colors"
            >
              <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
              이메일 보내기
            </a>
            <a
              href="https://github.com/eatdu0918"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 bg-brand-300 text-black text-sm font-semibold rounded-[999px] hover:bg-brand-200 transition-colors"
            >
              <Icon name="mdi:github" class="w-4 h-4" />
              GitHub
            </a>
            <NuxtLink
              to="/resume"
              class="inline-flex items-center gap-2 px-6 py-3 bg-brand-300 text-black text-sm font-semibold rounded-[999px] hover:bg-brand-200 transition-colors"
            >
              이력서 보기
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
