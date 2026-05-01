<script setup lang="ts">
type WorkFilter = 'all' | 'personal' | 'company'

useHead({
  title: '프로젝트 | 이두현 포트폴리오',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects')
    .where('featured', '=', true)
    .order('order', 'DESC')
    .all(),
)

const workFilter = ref<WorkFilter>('all')

const filterOptions: { key: WorkFilter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'personal', label: '개인 프로젝트' },
  { key: 'company', label: '실무 프로젝트' },
]

const filteredProjects = computed(() => {
  const list = projects.value ?? []
  if (workFilter.value === 'all') return list
  return list.filter(p => p.workType === workFilter.value)
})
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container">
        <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">Projects</p>
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-black tracking-tight mb-3">프로젝트</h1>
        <p class="text-sm text-surface-500 mb-8 max-w-xl leading-relaxed">
          실무 제품과 개인 프로젝트를 함께 정리했습니다. 각 카드에서 기술 선택 이유와 아키텍처 상세를 확인할 수 있습니다.
        </p>

        <div
          v-if="projects?.length"
          class="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="프로젝트 필터"
        >
          <button
            v-for="opt in filterOptions"
            :key="opt.key"
            type="button"
            role="tab"
            :aria-selected="workFilter === opt.key"
            class="px-4 py-2 text-xs font-semibold rounded-[999px] transition-colors"
            :class="workFilter === opt.key
              ? 'bg-black text-white'
              : 'bg-brand-300 text-black hover:bg-brand-200'"
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

        <div v-else class="text-center py-16">
          <Icon name="heroicons:folder-open-20-solid" class="w-12 h-12 text-surface-300 mx-auto mb-3" />
          <p class="text-sm text-surface-500">해당하는 프로젝트가 없습니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>
