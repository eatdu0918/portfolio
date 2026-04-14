<script setup lang="ts">
import { ref, watch } from 'vue'

type WorkType = 'personal' | 'company'

interface Props {
  title: string
  summary: string
  slug: string
  /** Nuxt Content 문서 `path`가 있으면 상세 링크로 우선 사용 (예: `/projects/heidi`) */
  detailPath?: string
  tags?: string[]
  period?: string
  featured?: boolean
  index?: number
  thumbnail?: string
  liveUrl?: string
  workType?: WorkType
}

const workTypeLabel: Record<WorkType, string> = {
  personal: '개인 프로젝트',
  company: '회사 작업',
}

const workTypeClass: Record<WorkType, string> = {
  personal: 'bg-violet-50 border-violet-200 text-violet-700',
  company: 'bg-slate-100 border-slate-200 text-slate-700',
}

const props = defineProps<Props>()

const detailTo = computed(() => props.detailPath?.trim() || `/projects/${props.slug}`)

const imgFailed = ref(false)

watch(
  () => props.thumbnail,
  () => {
    imgFailed.value = false
  },
)
</script>

<template>
  <article
    class="relative group bg-white border border-surface-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300"
  >
    <NuxtLink
      :to="detailTo"
      class="absolute inset-0 z-0"
      :aria-label="`${title} 상세 페이지`"
    />
    <div class="relative z-10 pointer-events-none">
      <div class="h-40 border-b border-surface-100 relative overflow-hidden bg-gradient-to-br from-brand-50 to-accent-50">
        <span
          v-if="workType"
          class="absolute top-2 left-2 z-20 text-[10px] font-bold px-2 py-0.5 rounded-md border pointer-events-none"
          :class="workTypeClass[workType]"
        >
          {{ workTypeLabel[workType] }}
        </span>
        <img
          v-if="thumbnail && !imgFailed"
          :src="thumbnail"
          :alt="title"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          @error="imgFailed = true"
        />
        <p
          v-if="workType === 'company' && thumbnail && !imgFailed"
          class="absolute bottom-0 left-0 right-0 z-20 px-2 py-1 text-[9px] leading-snug font-medium text-white bg-surface-900/60 backdrop-blur-sm text-center pointer-events-none border-t border-white/10"
        >
          실제 개발한 내용을 기반으로 생성한 AI 이미지입니다
        </p>
        <div
          v-if="!thumbnail || imgFailed"
          class="absolute inset-0 bg-gradient-to-br from-brand-50 to-accent-50"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-brand-400/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="heroicons:photo-20-solid" class="w-10 h-10 text-brand-300" />
          </div>
        </div>
      </div>

      <div class="p-5">
        <h3 class="text-sm font-bold text-surface-800 group-hover:text-brand-600 transition-colors flex items-center gap-1.5 mb-1">
          <span v-if="index" class="text-brand-500">{{ index }}.</span>
          {{ title }}
          <Icon v-if="featured" name="heroicons:star-20-solid" class="w-3.5 h-3.5 text-amber-400 ml-auto flex-shrink-0" />
        </h3>

        <p v-if="period" class="text-[11px] text-surface-400 font-mono mb-2">{{ period }}</p>

        <p class="text-surface-500 text-xs leading-relaxed mb-3 line-clamp-2">
          {{ summary }}
        </p>

        <div v-if="liveUrl" class="mb-3 pointer-events-auto">
          <p class="text-[10px] font-semibold text-surface-400 tracking-wide mb-1">
            접속 주소
          </p>
          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[11px] font-mono text-brand-600 hover:text-brand-700 hover:underline break-all line-clamp-2"
            @click.stop
          >
            {{ liveUrl }}
          </a>
        </div>

        <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mb-3">
          <span
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-sans font-bold"
          >
            {{ tag }}
          </span>
          <span v-if="tags.length > 3" class="text-[10px] text-surface-400 self-center">+{{ tags.length - 3 }}</span>
        </div>

        <div class="flex items-center gap-3 pt-3 border-t border-surface-100">
          <span class="text-[11px] font-semibold text-brand-500 group-hover:text-brand-600 transition-colors flex items-center gap-1">
            프로젝트 보기
            <Icon name="heroicons:arrow-right-20-solid" class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
