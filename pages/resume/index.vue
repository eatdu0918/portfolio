<script setup lang="ts">
useHead({
  title: '이력서 | Portfolio',
})

const { data: resumePage } = await useAsyncData('resume-unified', async () => {
  const possiblePaths = ['/resume-ko-unified', 'resume-ko-unified', '/resume/resume-ko-unified']
  for (const path of possiblePaths) {
    const result = await queryCollection('resume').path(path).first()
    if (result) return result
  }
  return null
})

if (!resumePage.value) {
  throw createError({ statusCode: 404, statusMessage: '통합 이력서 콘텐츠를 찾을 수 없습니다.' })
}
</script>

<template>
  <div class="pt-24">
    <section class="pt-14 sm:pt-20 pb-5 sm:pb-6 bg-surface-50 border-b border-surface-200/80">
      <div class="section-container max-w-4xl">
        <p class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-600 mb-3">
          Resume
        </p>
        <div class="flex items-center justify-between gap-4">
          <h1 class="text-3xl sm:text-4xl font-display font-bold text-surface-950 tracking-tight">
            이력서
          </h1>
          <a
            href="/downloads/이력서_자기소개서_이두현.docx"
            download="이력서_자기소개서_이두현.docx"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-sm hover:shadow-md shrink-0"
          >
            <Icon name="heroicons:arrow-down-tray-20-solid" class="w-4 h-4" />
            <span class="hidden sm:inline">이력서 다운로드</span>
            <span class="sm:hidden">다운로드</span>
          </a>
        </div>
      </div>
    </section>

    <section class="pt-6 sm:pt-8 pb-14 sm:pb-20 bg-white">
      <div class="section-container max-w-4xl">
        <div class="resume-print">
          <ResumeHeader
            v-if="resumePage"
            :name="resumePage.name"
            :title="resumePage.role"
            :email="resumePage.email"
            :phone="resumePage.phone"
            :github="resumePage.github"
            :portfolio="resumePage.portfolio"
          />

          <div class="prose-content">
            <ContentRenderer v-if="resumePage" :value="resumePage" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media print {
  .resume-print :deep(a[href]) {
    text-decoration: none;
    color: inherit;
  }
}
</style>
