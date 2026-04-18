<script setup lang="ts">
const route = useRoute()
const raw = route.params.slug
const slug = decodeURIComponent(String(Array.isArray(raw) ? raw[0] : raw ?? '')).trim()

async function fetchMainProject(s: string) {
  if (!s)
    return null
  const withSlash = `/projects/${s}`
  const noSlash = `projects/${s}`
  for (const p of [withSlash, noSlash]) {
    const byPath = await queryCollection('projects').path(p).first()
    if (byPath?.category === 'fullstack')
      return byPath
  }
  return queryCollection('projects')
    .where('slug', '=', s)
    .where('category', '=', 'fullstack')
    .first()
}

const { data: project } = await useAsyncData(`project-${slug}`, () => fetchMainProject(slug))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({
  title: `${project.value.title} | Portfolio`,
})

const { data: subPages } = await useAsyncData(`project-${slug}-pages`, () =>
  queryCollection('projects')
    .where('path', 'LIKE', `${`/projects/${slug}`}/%`)
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

// Helper function for demo link icons
function getIconForLabel(label: string) {
  const lower = label.toLowerCase()
  if (lower.includes('kubernetes') || lower.includes('k8s')) return 'simple-icons:kubernetes'
  if (lower.includes('kafka')) return 'simple-icons:apachekafka'
  if (lower.includes('어드민') || lower.includes('admin')) return 'heroicons:wrench-screwdriver-20-solid'
  if (lower.includes('메인') || lower.includes('main') || lower.includes('쇼핑몰')) return 'heroicons:shopping-bag-20-solid'
  if (lower.includes('swagger')) return 'simple-icons:swagger'
  return 'heroicons:link-20-solid'
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
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <div
              v-if="project.workType === 'personal'"
              class="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-md"
            >
              <Icon name="heroicons:user-20-solid" class="w-3 h-3" />
              개인 프로젝트
            </div>
            <div
              v-else-if="project.workType === 'company'"
              class="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md"
            >
              <Icon name="heroicons:building-office-2-20-solid" class="w-3 h-3" />
              회사 작업
            </div>
            <div v-if="project.featured" class="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
              <Icon name="heroicons:star-20-solid" class="w-3 h-3" />
              Featured
            </div>
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

          <div class="flex flex-wrap items-center gap-4 mt-4">
            <!-- Demo Links -->
            <div v-if="project.demoLinks?.length" class="flex flex-wrap gap-2">
              <a
                v-for="link in project.demoLinks"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-surface-200 rounded-md text-xs font-semibold text-surface-600 hover:border-brand-200 hover:text-brand-600 hover:bg-brand-50/30 transition-all shadow-sm group"
              >
                <Icon :name="getIconForLabel(link.label)" class="w-3.5 h-3.5 text-surface-400 group-hover:text-brand-500" />
                {{ link.label }}
              </a>
            </div>

            <!-- Test Accounts -->
            <div v-if="project.testAccounts?.length" class="mt-4 p-4 bg-white/50 border border-surface-200 rounded-lg shadow-sm max-w-2xl w-full">
              <h3 class="text-[10px] font-bold text-surface-800 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                <Icon name="heroicons:key-20-solid" class="w-3.5 h-3.5 text-brand-500" />
                테스트 계정 안내
              </h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead>
                    <tr class="border-b border-surface-100">
                      <th class="pb-1.5 font-semibold text-surface-400 text-[10px]">구분</th>
                      <th class="pb-1.5 font-semibold text-surface-400 text-[10px]">아이디 (Email)</th>
                      <th class="pb-1.5 font-semibold text-surface-400 text-[10px]">비밀번호</th>
                      <th class="pb-1.5 font-semibold text-surface-400 text-[10px]">권한</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-surface-50">
                    <tr v-for="acc in project.testAccounts" :key="acc.email">
                      <td class="py-2 text-surface-700 font-medium truncate max-w-[80px]">{{ acc.type }}</td>
                      <td class="py-2 text-surface-600 font-mono">{{ acc.email }}</td>
                      <td class="py-2 text-surface-600 font-mono">{{ acc.password }}</td>
                      <td class="py-2 text-surface-500 text-[10px] leading-tight">{{ acc.role }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

          <ProjectGallery
            v-if="project?.gallery?.length"
            :items="project.gallery"
            :ai-generated-images="project.workType === 'company'"
          />

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
