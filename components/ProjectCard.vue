<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  title: string
  summary: string
  slug: string
  tags?: string[]
  period?: string
  featured?: boolean
  index?: number
  thumbnail?: string
}

const props = defineProps<Props>()

const imgFailed = ref(false)

watch(
  () => props.thumbnail,
  () => {
    imgFailed.value = false
  },
)
</script>

<template>
  <NuxtLink
    :to="`/projects/${slug}`"
    class="group bg-white border border-surface-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 block"
  >
    <div class="h-40 border-b border-surface-100 relative overflow-hidden bg-gradient-to-br from-brand-50 to-accent-50">
      <img
        v-if="thumbnail && !imgFailed"
        :src="thumbnail"
        :alt="title"
        loading="lazy"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        @error="imgFailed = true"
      >
      <div
        v-else
        class="absolute inset-0 bg-gradient-to-br from-brand-50 to-accent-50"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-brand-400/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  </NuxtLink>
</template>
