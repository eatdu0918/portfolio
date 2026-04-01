<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection('projects')
    .where('slug', '=', slug)
    .first(),
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({
  title: `${project.value.title} | Portfolio`,
})

const { data: subPages } = await useAsyncData(`project-${slug}-pages`, () =>
  queryCollection('projects')
    .where('path', 'LIKE', `/projects/${slug}/%`)
    .where('category', '<>', 'fullstack')
    .order('order', 'ASC')
    .all(),
)

const activeTab = ref('overview')

const tabLabels: Record<string, { label: string; icon: string }> = {
  overview: { label: '개요', icon: 'heroicons:home-20-solid' },
  architecture: { label: '아키텍처', icon: 'heroicons:squares-2x2-20-solid' },
  frontend: { label: '프론트엔드', icon: 'heroicons:computer-desktop-20-solid' },
  backend: { label: '백엔드', icon: 'heroicons:server-20-solid' },
  infrastructure: { label: '인프라', icon: 'heroicons:cloud-20-solid' },
  'ml-pipeline': { label: 'AI/ML', icon: 'heroicons:cpu-chip-20-solid' },
}

function getTabInfo(category: string) {
  return tabLabels[category] || { label: category, icon: 'heroicons:document-20-solid' }
}

const tabs = computed(() => {
  const items = [{ key: 'overview', ...tabLabels.overview }]
  if (subPages.value) {
    for (const page of subPages.value) {
      if (page.category) {
        const info = getTabInfo(page.category)
        items.push({ key: page.category, ...info })
      }
    }
  }
  return items
})

const activeSubPage = computed(() => {
  if (activeTab.value === 'overview') return null
  return subPages.value?.find(p => p.category === activeTab.value)
})

function selectTab(key: string) {
  if (activeTab.value === key) return
  activeTab.value = key
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}
</script>

<template>
  <div class="pt-24">
    <!-- Project Hero -->
    <section class="py-10 sm:py-14 bg-surface-50">
      <div class="section-container">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-1 text-sm text-surface-500 hover:text-brand-600 transition-colors mb-5"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="w-4 h-4" />
          프로젝트 목록
        </NuxtLink>

        <div v-if="project" class="w-full max-w-4xl">
          <div v-if="project.featured" class="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md mb-3">
            <Icon name="heroicons:star-20-solid" class="w-3 h-3" />
            Featured
          </div>

          <h1 class="text-2xl sm:text-3xl font-display font-bold text-surface-800 tracking-tight mb-2">
            {{ project.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-3 text-sm text-surface-500 mb-4">
            <span v-if="project.period" class="flex items-center gap-1">
              <Icon name="heroicons:calendar-20-solid" class="w-4 h-4" />
              {{ project.period }}
            </span>
            <span v-if="project.role" class="flex items-center gap-1">
              <Icon name="heroicons:user-20-solid" class="w-4 h-4" />
              {{ project.role }}
            </span>
          </div>

          <p class="text-base text-surface-600 leading-relaxed">
            {{ project.summary }}
          </p>

          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline"
          >
            <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4 flex-shrink-0" />
            라이브 사이트에서 보기
          </a>
        </div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="sticky top-16 z-40 bg-white border-b border-surface-100">
      <div class="section-container">
        <div class="flex overflow-x-auto gap-1 py-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
            :class="activeTab === tab.key
              ? 'bg-brand-50 text-brand-600'
              : 'text-surface-500 hover:text-brand-600 hover:bg-surface-50'"
            @click="selectTab(tab.key)"
          >
            <Icon :name="tab.icon" class="w-4 h-4" />
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Tab Content -->
    <section class="py-10 sm:py-14 bg-white">
      <div class="section-container">
        <!-- Overview Tab -->
        <div v-if="activeTab === 'overview'" class="w-full">
          <!-- Tech Stack -->
          <div v-if="project?.techStack" class="mb-10">
            <h2 class="text-lg font-bold text-surface-800 mb-4 tracking-tight">기술 스택</h2>
            <TechStackSection :tech-stack="project.techStack" />
          </div>

          <!-- Highlights -->
          <div v-if="project?.highlights?.length" class="mb-10">
            <h2 class="text-lg font-bold text-surface-800 mb-4 tracking-tight">주요 성과</h2>
            <HighlightList :items="project.highlights" />
          </div>

          <ProjectGallery v-if="project?.gallery?.length" :items="project.gallery" />

          <!-- Content Body -->
          <div class="prose-content">
            <ContentRenderer v-if="project" :value="project" />
          </div>
        </div>

        <!-- Sub Pages -->
        <div v-else-if="activeSubPage" class="w-full prose-content">
          <ContentRenderer :value="activeSubPage" />
        </div>
      </div>
    </section>
  </div>
</template>
