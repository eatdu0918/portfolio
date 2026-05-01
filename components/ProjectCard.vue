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
    class="relative group bg-white border border-surface-300 rounded-[8px] overflow-hidden hover:shadow-[rgba(0,0,0,0.16)_0px_4px_16px_0px] hover:-translate-y-0.5 transition-all duration-200"
  >
    <NuxtLink
      :to="detailTo"
      class="absolute inset-0 z-0"
      :aria-label="`${title} 상세 페이지`"
    />

    <div class="relative z-10 pointer-events-none">
      <!-- 썸네일 -->
      <div class="h-44 border-b border-surface-200 relative overflow-hidden bg-surface-200">
        <span
          v-if="workType"
          class="absolute top-2 left-2 z-20 text-[10px] font-bold px-2.5 py-1 rounded-[999px] pointer-events-none"
          :class="workType === 'company' ? 'bg-black text-white' : 'bg-surface-300 text-black'"
        >
          {{ workTypeLabel[workType] }}
        </span>
        <img
          v-if="thumbnail && !imgFailed"
          :src="thumbnail"
          :alt="title"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          @error="imgFailed = true"
        />
        <p
          v-if="workType === 'company' && aiGenerated && thumbnail && !imgFailed"
          class="absolute bottom-0 left-0 right-0 z-20 px-2 py-1 text-[9px] leading-snug font-medium text-white bg-black/60 text-center pointer-events-none"
        >
          실제 개발 내용을 기반으로 생성한 AI 이미지
        </p>
        <div
          v-if="!thumbnail || imgFailed"
          class="absolute inset-0 flex items-center justify-center bg-surface-200"
        >
          <Icon name="heroicons:photo-20-solid" class="w-10 h-10 text-surface-400" />
        </div>
      </div>

      <!-- 콘텐츠 -->
      <div class="p-5">
        <h3 class="text-sm font-bold text-black mb-1 flex items-center gap-1.5">
          <span v-if="index" class="text-surface-400 font-normal">{{ index }}.</span>
          {{ title }}
        </h3>

        <p v-if="period" class="text-[11px] text-surface-400 font-mono mb-2">{{ period }}</p>

        <p class="text-surface-600 text-xs leading-relaxed mb-3 line-clamp-2">
          {{ summary }}
        </p>

        <div v-if="liveUrl" class="mb-3 pointer-events-auto">
          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[11px] font-mono text-black hover:underline break-all line-clamp-1"
            @click.stop
          >
            {{ liveUrl }}
          </a>
        </div>

        <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mb-3">
          <span
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] px-2.5 py-0.5 rounded-[999px] bg-brand-300 text-black font-medium"
          >
            {{ tag }}
          </span>
          <span v-if="tags.length > 3" class="text-[10px] text-surface-400 self-center">+{{ tags.length - 3 }}</span>
        </div>

        <div class="flex items-center gap-2 pt-3 border-t border-surface-200">
          <span class="text-[11px] font-semibold text-black flex items-center gap-1">
            자세히 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
