<script setup lang="ts">
import { ref, watch } from 'vue'

type WorkType = 'personal' | 'company'

interface Props {
  title: string
  summary: string
  slug: string
  detailPath?: string
  tags?: string[]
  period?: string
  featured?: boolean
  index?: number
  thumbnail?: string
  liveUrl?: string
  workType?: WorkType
  aiGenerated?: boolean
}

const workTypeLabel: Record<WorkType, string> = {
  personal: '개인',
  company: '실무',
}

const props = withDefaults(defineProps<Props>(), {
  aiGenerated: true,
})

const detailTo = computed(() => props.detailPath?.trim() || `/projects/${props.slug}`)
const imgFailed = ref(false)

watch(
  () => props.thumbnail,
  () => { imgFailed.value = false },
)
</script>

<template>
  <article
    class="relative group bg-white border border-surface-200 rounded-[12px] overflow-hidden
           hover:shadow-[rgba(0,0,0,0.18)_0px_8px_24px_0px] hover:-translate-y-1.5
           transition-all duration-300 ease-out
           dark:bg-[#1a1a1a] dark:border-white/[8%] dark:hover:shadow-[rgba(0,0,0,0.5)_0px_8px_24px_0px]"
  >
    <NuxtLink
      :to="detailTo"
      class="absolute inset-0 z-0"
      :aria-label="`${title} 상세 페이지`"
    />

    <div class="relative z-10 pointer-events-none">
      <!-- 썸네일 -->
      <div class="h-48 relative overflow-hidden bg-surface-200 dark:bg-surface-800">
        <span
          v-if="workType"
          class="absolute top-2.5 left-2.5 z-20 text-[10px] font-bold px-2.5 py-1 rounded-[999px] pointer-events-none"
          :class="workType === 'company' ? 'bg-black text-white' : 'bg-white/90 text-black dark:bg-white/15 dark:text-white'"
        >
          {{ workTypeLabel[workType] }}
        </span>

        <img
          v-if="thumbnail && !imgFailed"
          :src="thumbnail"
          :alt="title"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          @error="imgFailed = true"
        />

        <!-- 호버 오버레이 -->
        <div
          class="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <span class="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full">
            자세히 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-3.5 h-3.5" />
          </span>
        </div>

        <p
          v-if="workType === 'company' && aiGenerated && thumbnail && !imgFailed"
          class="absolute bottom-0 left-0 right-0 z-20 px-2 py-1 text-[9px] leading-snug font-medium text-white bg-black/55 text-center pointer-events-none"
        >
          실제 개발 내용을 기반으로 생성한 AI 이미지
        </p>
        <div
          v-if="!thumbnail || imgFailed"
          class="absolute inset-0 flex items-center justify-center bg-surface-100 dark:bg-surface-800"
        >
          <Icon name="heroicons:photo-20-solid" class="w-10 h-10 text-surface-300 dark:text-surface-600" />
        </div>
      </div>

      <!-- 콘텐츠 -->
      <div class="p-5">
        <h3 class="text-sm font-bold text-black mb-1 flex items-center gap-1.5 dark:text-white">
          <span v-if="index" class="text-surface-400 font-normal dark:text-surface-600">{{ index }}.</span>
          {{ title }}
        </h3>

        <p v-if="period" class="text-[11px] text-surface-400 font-mono mb-2 dark:text-surface-500">{{ period }}</p>

        <p class="text-surface-600 text-xs leading-relaxed mb-3 line-clamp-2 dark:text-surface-400">
          {{ summary }}
        </p>

        <div v-if="liveUrl" class="mb-3 pointer-events-auto">
          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[11px] font-mono text-black hover:underline break-all line-clamp-1 dark:text-surface-300"
            @click.stop
          >
            {{ liveUrl }}
          </a>
        </div>

        <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mb-3">
          <span
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] px-2.5 py-0.5 rounded-[999px] bg-brand-300 text-black font-medium dark:bg-white/10 dark:text-surface-300"
          >
            {{ tag }}
          </span>
          <span v-if="tags.length > 3" class="text-[10px] text-surface-400 self-center dark:text-surface-500">+{{ tags.length - 3 }}</span>
        </div>

        <div class="flex items-center gap-2 pt-3 border-t border-surface-200 dark:border-white/[8%]">
          <span class="text-[11px] font-semibold text-black flex items-center gap-1 dark:text-white">
            자세히 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
