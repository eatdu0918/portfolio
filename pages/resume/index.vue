<script setup lang="ts">
useHead({
  title: '이력서 | Portfolio',
})

const { data: resumePages } = await useAsyncData('resume-pages', () =>
  queryCollection('resume').order('order', 'ASC').all(),
)

if (!resumePages.value?.length) {
  throw createError({ statusCode: 404, statusMessage: '이력서 콘텐츠를 찾을 수 없습니다.' })
}

const activeIndex = ref(0)

const activePage = computed(() => resumePages.value![activeIndex.value]!)

function selectResume(i: number) {
  activeIndex.value = i
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="pt-24">
    <section class="py-10 sm:py-14 bg-surface-50 border-b border-surface-200/80">
      <div class="section-container">
        <p class="text-sm font-semibold text-brand-500 tracking-wide mb-2">
          Resume
        </p>
        <h1 class="text-2xl sm:text-3xl font-display font-bold text-surface-800 tracking-tight mb-3">
          이력서
        </h1>
        <p class="text-sm text-surface-600 max-w-2xl leading-relaxed">
          마크다운 원본은 저장소
          <code class="text-xs px-1.5 py-0.5 rounded bg-surface-200/80 text-surface-700 font-mono">content/resume/</code>
          (개인정보 템플릿은
          <code class="text-xs px-1.5 py-0.5 rounded bg-surface-200/80 text-surface-700 font-mono">content/personal-info-template.md</code>)
          에 있습니다. 지원처에 맞는 탭을 고른 뒤 인쇄(PDF 저장)하거나 복사해 사용하세요.
        </p>

        <div class="flex flex-wrap gap-2 mt-6">
          <button
            v-for="(page, i) in resumePages"
            :key="page.path"
            type="button"
            class="px-3.5 py-2 rounded-xl text-sm font-medium transition-all border"
            :class="activeIndex === i
              ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
              : 'bg-white text-surface-600 border-surface-200 hover:border-brand-300 hover:text-brand-700'"
            @click="selectResume(i)"
          >
            {{ page.title || page.path }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-14 bg-white">
      <div class="section-container max-w-4xl">
        <div class="prose-content resume-print">
          <ContentRenderer v-if="activePage" :value="activePage" />
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
