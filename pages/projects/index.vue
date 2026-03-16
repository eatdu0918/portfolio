<script setup lang="ts">
useHead({
  title: 'Projects | Portfolio',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects')
    .where('category', '=', 'fullstack')
    .order('order', 'ASC')
    .all(),
)
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">Projects</p>
        <h1 class="text-2xl sm:text-3xl font-bold text-surface-800 tracking-tight mb-2">프로젝트</h1>
        <p class="text-sm text-surface-500 mb-10">설계하고 구현한 프로젝트들입니다.</p>

        <div v-if="projects?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            v-for="(project, idx) in projects"
            :key="project.path"
            :title="project.title"
            :summary="project.summary ?? ''"
            :slug="project.slug ?? project.path.split('/').pop() ?? ''"
            :tags="project.tags ?? []"
            :period="project.period"
            :featured="project.featured"
            :index="idx + 1"
          />
        </div>

        <div v-else class="text-center py-16">
          <Icon name="heroicons:folder-open-20-solid" class="w-12 h-12 text-surface-300 mx-auto mb-3" />
          <p class="text-sm text-surface-500">아직 등록된 프로젝트가 없습니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>
