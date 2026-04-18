<script setup lang="ts">
useHead({
  title: 'Portfolio | Full-Stack — Vue/Spring & Next.js/MSA',
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects')
    .where('featured', '=', true)
    .order('order', 'DESC')
    .all(),
)

const techStacks = {
  frontend: {
    label: '프론트엔드',
    items: [
      { name: 'Vue.js', icon: 'mdi:vuejs' },
      { name: 'React', icon: 'mdi:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'TypeScript', icon: 'mdi:language-typescript' },
      { name: 'Tailwind CSS', icon: 'mdi:tailwind' },
      { name: 'Nuxt', icon: 'mdi:nuxt' },
      { name: 'Electron', icon: 'mdi:electron-framework' },
    ],
  },
  backend: {
    label: '백엔드',
    items: [
      { name: 'Spring Boot', icon: 'mdi:leaf' },
      { name: 'Node.js', icon: 'mdi:nodejs' },
      { name: 'Python', icon: 'mdi:language-python' },
      { name: 'PostgreSQL', icon: 'mdi:database' },
      { name: 'Redis', icon: 'mdi:database-clock' },
      { name: 'Kafka', icon: 'simple-icons:apachekafka' },
      { name: 'RabbitMQ', icon: 'mdi:rabbit' },
    ],
  },
  devops: {
    label: '데브옵스',
    items: [
      { name: 'Docker', icon: 'mdi:docker' },
      { name: 'Kubernetes', icon: 'mdi:kubernetes' },
      { name: 'AWS', icon: 'mdi:aws' },
      { name: 'Nginx', icon: 'mdi:server' },
      { name: 'GitHub Actions', icon: 'mdi:github' },
      { name: 'Linux', icon: 'mdi:linux' },
      { name: 'Prometheus', icon: 'mdi:chart-line' },
    ],
  },
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-surface-50">
      <div class="absolute inset-0 dot-pattern opacity-40 pointer-events-none"></div>
      <div class="absolute top-20 right-[15%] w-[300px] h-[300px] bg-brand-200/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-[10%] w-[250px] h-[250px] bg-accent-200/25 rounded-full blur-[60px] pointer-events-none"></div>

      <div class="section-container relative">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold text-brand-500 tracking-wide mb-4 animate-fade-in">
            Full-Stack Developer
          </p>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-surface-800 leading-tight tracking-tight animate-slide-up">
            <span class="gradient-text">이두현</span>입니다
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-surface-800 leading-relaxed animate-fade-in" style="animation-delay: 0.2s">
            Vue 3·Spring Boot 기반으로 GIS·3D 전장(Cesium)과 AI 추론 파이프라인(RabbitMQ·Python)을 설계하며, Electron 데스크톱과 REST·WebSocket 실시간 연동 등 복잡한 도메인의 비동기 처리에 강점이 있습니다. Next.js와 K8s 기반 MSA로 기술 영역을 넓히고 있습니다.
          </p>
          <div class="mt-8 flex flex-wrap gap-3 animate-fade-in" style="animation-delay: 0.4s">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors"
            >
              프로젝트 보기
              <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-5 py-2.5 border border-surface-300 hover:border-brand-400 text-surface-700 hover:text-brand-600 font-medium rounded-lg transition-colors"
            >
              연락하기
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section id="skills" class="py-16 sm:py-24 bg-white">
      <div class="section-container">
        <h2 class="text-lg sm:text-xl font-bold text-surface-800 mb-3 text-center tracking-tight">
          기술 스택
        </h2>
        <p class="text-center text-sm text-surface-500 mb-8 max-w-xl mx-auto">
          대표 스택 요약입니다. 실무·개인 프로젝트에서의 활용은
          <NuxtLink to="/skills" class="text-brand-600 font-semibold hover:underline">기술 스택</NuxtLink> 페이지를 참고해 주세요.
        </p>
        <div class="grid md:grid-cols-3 gap-10 lg:gap-14">
          <div
            v-for="(stack, key) in techStacks"
            :key="key"
            class="text-center"
          >
            <h3 class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-6">
              {{ stack.label }}
            </h3>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="item in stack.items"
                :key="item.name"
                class="flex flex-col items-center gap-2 group"
              >
                <div class="w-11 h-11 rounded-xl bg-surface-50 border border-surface-100 flex items-center justify-center group-hover:border-brand-200 group-hover:bg-brand-50 transition-all">
                  <Icon :name="item.icon" class="w-5 h-5 text-surface-500 group-hover:text-brand-500 transition-colors" />
                </div>
                <span class="text-xs text-surface-500 group-hover:text-surface-700 transition-colors font-medium">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 text-center">
          <NuxtLink
            to="/skills"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-200 text-surface-600 hover:border-brand-400 hover:text-brand-600 font-medium transition-all"
          >
            기술 스택 자세히 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 sm:py-24 bg-surface-50">
      <div class="section-container">
        <div class="mb-8">
          <h2 class="text-lg sm:text-xl font-bold text-surface-800 tracking-tight">
            최근 프로젝트
          </h2>
          <p class="mt-2 text-sm text-surface-500 max-w-2xl">
            회사 제품(영상 비식별화·전장 상황 인지·데이터 관리 플랫폼 등)과 개인 작업(기술 블로그·e-commerce MSA)을 함께 정리했습니다.
          </p>
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
        <div class="mt-10 text-center">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-200 text-surface-600 hover:border-brand-400 hover:text-brand-600 font-medium transition-all"
          >
            모든 프로젝트 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Closing — 탐색 유도 (협업·채용 카피 없음) -->
    <section class="py-16 sm:py-24 bg-surface-50">
      <div class="section-container">
        <div
          class="relative overflow-hidden rounded-3xl bg-white px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 shadow-xl shadow-surface-900/5 border border-surface-200"
        >
          <div
            class="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>
          <div
            class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-100/60 blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <div class="relative grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div class="lg:col-span-7">
              <p class="text-sm font-semibold tracking-wide text-brand-600 mb-2">
                더 알아보기
              </p>
              <h2 class="text-2xl sm:text-3xl font-bold text-surface-800 tracking-tight leading-tight mb-4">
                관심 있는 주제가 있으셨나요?
              </h2>
              <p class="text-sm sm:text-base text-surface-600 leading-relaxed mb-8 max-w-xl">
                메인에는 요약만 올려 두었습니다. 작업 맥락·기술 선택·경력은 아래 페이지에서 이어집니다.
              </p>
              <ul class="space-y-3 text-sm text-surface-700">
                <li class="flex gap-3">
                  <Icon
                    name="heroicons:check-circle-20-solid"
                    class="w-5 h-5 shrink-0 text-brand-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Vue 3·Spring Boot 기반의 Cesium 3D 전장 GIS와 MIL-STD-2525D 도메인을 심도 있게 다뤘습니다.</span>
                </li>
                <li class="flex gap-3">
                  <Icon
                    name="heroicons:check-circle-20-solid"
                    class="w-5 h-5 shrink-0 text-brand-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>RabbitMQ·Redis 기반의 AI 추론 배치를 비동기로 설계하고, Electron·WebSocket으로 다중 클라이언트를 실시간 연동했습니다.</span>
                </li>
                <li class="flex gap-3">
                  <Icon
                    name="heroicons:check-circle-20-solid"
                    class="w-5 h-5 shrink-0 text-brand-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Next.js 기술 블로그와 Spring Cloud·Kafka·Kubernetes 기반 MSA로 클라우드 네이티브 역량을 확장 중입니다.</span>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-3">
              <NuxtLink
                to="/projects"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Icon name="heroicons:squares-2x2-20-solid" class="w-4 h-4" />
                프로젝트 전체 보기
              </NuxtLink>
              <NuxtLink
                to="/resume"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-surface-200 bg-white px-5 py-3.5 text-center text-sm font-semibold text-surface-700 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Icon name="heroicons:document-text-20-solid" class="w-4 h-4" />
                이력서 보기
              </NuxtLink>
              <div
                class="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-surface-200 pt-5 text-xs text-surface-500"
              >
                <NuxtLink
                  to="/skills"
                  class="inline-flex items-center gap-1.5 text-surface-600 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                >
                  <Icon name="heroicons:cpu-chip-20-solid" class="w-4 h-4 text-brand-500" />
                  기술 스택
                </NuxtLink>
                <NuxtLink
                  to="/about"
                  class="inline-flex items-center gap-1.5 text-surface-600 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                >
                  <Icon name="heroicons:user-20-solid" class="w-4 h-4 text-brand-500" />
                  소개
                </NuxtLink>
                <a
                  href="https://github.com/eatdu0918"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-surface-600 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                >
                  <Icon name="mdi:github" class="w-4 h-4 text-brand-500" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
