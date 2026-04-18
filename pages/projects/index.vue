<script setup lang="ts">
type WorkFilter = 'all' | 'personal' | 'company'

useHead({
  title: 'Projects | Portfolio',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects')
    .where('category', '=', 'fullstack')
    .order('order', 'DESC')
    .all(),
)

const workFilter = ref<WorkFilter>('all')

const filterOptions: { key: WorkFilter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'personal', label: '개인 프로젝트' },
  { key: 'company', label: '회사 작업' },
]

const filteredProjects = computed(() => {
  const list = projects.value ?? []
  if (workFilter.value === 'all') return list
  return list.filter(p => p.workType === workFilter.value)
})
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">Projects</p>
        <h1 class="text-2xl sm:text-3xl font-bold text-surface-800 tracking-tight mb-2">프로젝트</h1>
        <p class="text-sm text-surface-500 mb-6 max-w-2xl">
          회사 제품과 개인 프로젝트(Next.js 기술 블로그, Sparta 이커머스 MSA)를 구분해 볼 수 있습니다.
        </p>

        <div
          v-if="projects?.length"
          class="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="프로젝트 구분"
        >
          <button
            v-for="opt in filterOptions"
            :key="opt.key"
            type="button"
            role="tab"
            :aria-selected="workFilter === opt.key"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
            :class="workFilter === opt.key
              ? 'bg-brand-50 border-brand-200 text-brand-700'
              : 'bg-white border-surface-200 text-surface-500 hover:border-brand-200 hover:text-brand-600'"
            @click="workFilter = opt.key"
          >
            {{ opt.label }}
          </button>
        </div>

        <div v-if="filteredProjects.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            v-for="(project, idx) in filteredProjects"
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

        <div v-else-if="projects?.length && !filteredProjects.length" class="text-center py-16">
          <Icon name="heroicons:folder-open-20-solid" class="w-12 h-12 text-surface-300 mx-auto mb-3" />
          <p class="text-sm text-surface-500">이 구분에 해당하는 프로젝트가 없습니다.</p>
        </div>

        <div v-else class="text-center py-16">
          <Icon name="heroicons:folder-open-20-solid" class="w-12 h-12 text-surface-300 mx-auto mb-3" />
          <p class="text-sm text-surface-500">아직 등록된 프로젝트가 없습니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>
