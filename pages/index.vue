<script setup lang="ts">
useHead({
  title: 'Portfolio | Full-Stack & AI Integration Developer',
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
      { name: 'RabbitMQ', icon: 'mdi:rabbit' },
    ],
  },
  devops: {
    label: '데브옵스',
    items: [
      { name: 'Docker', icon: 'mdi:docker' },
      { name: 'Linux', icon: 'mdi:linux' },
      { name: 'Nginx', icon: 'mdi:server' },
      { name: 'Git', icon: 'mdi:git' },
      { name: 'CI/CD', icon: 'mdi:pipe' },
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
        <div class="max-w-2xl">
          <p class="text-sm font-semibold text-brand-500 tracking-wide mb-4 animate-fade-in">
            Full-Stack Developer
          </p>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-surface-800 leading-tight tracking-tight animate-slide-up">
            <span class="gradient-text">이두현</span>입니다
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-surface-600 leading-relaxed animate-fade-in" style="animation-delay: 0.2s">
            사용자 경험을 중심으로 웹 서비스를 설계하고 구현합니다.
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
        <h2 class="text-lg sm:text-xl font-bold text-surface-800 mb-10 text-center tracking-tight">
          기술 스택
        </h2>
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
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 sm:py-24 bg-surface-50">
      <div class="section-container">
        <h2 class="text-lg sm:text-xl font-bold text-surface-800 mb-8 tracking-tight">
          최근 프로젝트
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            v-for="(project, idx) in projects"
            :key="project.path"
            :title="project.title"
            :summary="project.summary ?? ''"
            :slug="project.slug ?? project.path.split('/').pop() ?? ''"
            :tags="project.tags ?? []"
            :period="project.period"
            :featured="project.featured"
            :thumbnail="project.thumbnail ?? project.gallery?.[0]?.src"
            :live-url="project.liveUrl"
            :work-type="project.workType"
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

    <!-- CTA -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="section-container text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-surface-800 mb-3 tracking-tight">
          함께 일하고 싶으신가요?
        </h2>
        <p class="text-base text-surface-500 mb-6 max-w-md mx-auto leading-relaxed">
          새로운 기회와 협업에 열려 있습니다.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors"
        >
          <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
          연락하기
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
