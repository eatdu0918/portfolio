<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

export interface GalleryItem {
  src: string
  alt?: string
}

const props = withDefaults(
  defineProps<{
    items: GalleryItem[]
    /** 회사 프로젝트: 실제 작업 내용 기반 AI 생성 이미지 안내 */
    aiGeneratedImages?: boolean
  }>(),
  { aiGeneratedImages: false },
)

const lightboxIndex = ref<number | null>(null)

const currentItem = computed(() => {
  if (lightboxIndex.value === null || !props.items.length)
    return null
  return props.items[lightboxIndex.value] ?? null
})

const lightboxPositionLabel = computed(() => {
  if (lightboxIndex.value === null || !props.items.length)
    return ''
  return `${lightboxIndex.value + 1} / ${props.items.length}`
})

function openLightbox(index: number) {
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
}

function prev() {
  if (lightboxIndex.value === null || props.items.length <= 1)
    return
  lightboxIndex.value
    = (lightboxIndex.value - 1 + props.items.length) % props.items.length
}

function next() {
  if (lightboxIndex.value === null || props.items.length <= 1)
    return
  lightboxIndex.value = (lightboxIndex.value + 1) % props.items.length
}

function onKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null)
    return
  if (e.key === 'Escape')
    closeLightbox()
  else if (e.key === 'ArrowLeft')
    prev()
  else if (e.key === 'ArrowRight')
    next()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div v-if="items?.length" class="mb-10">
    <h2 class="text-lg font-bold text-surface-800 mb-4 tracking-tight">
      화면 예시
    </h2>
    <p
      v-if="aiGeneratedImages"
      class="mb-4 text-xs text-surface-500 leading-relaxed max-w-3xl text-center"
    >
      아래 이미지는 <strong class="font-semibold text-surface-600">실제 개발한 내용을 기반으로 생성한 AI 이미지</strong>입니다.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        v-for="(item, idx) in items"
        :key="`${item.src}-${idx}`"
        type="button"
        class="group relative rounded-xl overflow-hidden border border-surface-200 bg-surface-50 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
        @click="openLightbox(idx)"
      >
        <div class="aspect-video overflow-hidden bg-surface-100">
          <img
            :src="item.src"
            :alt="item.alt ?? ''"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <p
          v-if="item.alt"
          class="px-3 py-2 text-xs font-medium text-surface-600 border-t border-surface-100 bg-white text-center"
        >
          {{ item.alt }}
        </p>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null && currentItem"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-surface-950/45 backdrop-blur-md supports-[backdrop-filter]:bg-surface-950/35"
        role="dialog"
        aria-modal="true"
        aria-label="이미지 보기"
        @click="closeLightbox"
      >
        <div
          class="relative flex items-center justify-center gap-2 sm:gap-3 max-w-6xl w-full"
          @click.stop
        >
          <button
            v-if="items.length > 1"
            type="button"
            class="flex-shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/40 bg-white/55 text-surface-800 shadow-lg backdrop-blur-md hover:bg-white/75 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label="이전 이미지"
            @click="prev"
          >
            <Icon name="heroicons:chevron-left-20-solid" class="w-5 h-5 sm:w-6 sm:h-6 -ml-0.5" />
          </button>

          <div class="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div class="relative rounded-xl border border-white/35 bg-white/45 backdrop-blur-xl shadow-2xl shadow-surface-900/25 overflow-hidden max-h-[85vh] ring-1 ring-black/5">
              <button
                type="button"
                class="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/45 bg-white/60 text-surface-700 shadow-md backdrop-blur-md hover:bg-white/85 hover:text-surface-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label="닫기"
                @click="closeLightbox"
              >
                <Icon name="heroicons:x-mark-20-solid" class="w-5 h-5" />
              </button>
              <img
                :src="currentItem.src"
                :alt="currentItem.alt ?? ''"
                class="max-h-[85vh] w-auto max-w-full object-contain block"
              />
            </div>
            <p
              v-if="currentItem.alt"
              class="text-center text-sm font-medium text-white px-2 drop-shadow-md"
            >
              {{ currentItem.alt }}
            </p>
            <p
              v-if="aiGeneratedImages"
              class="text-center text-[11px] text-white/85 px-2 drop-shadow-sm"
            >
              실제 작업 내용 기반 AI 생성 이미지
            </p>
            <p
              v-if="items.length > 1"
              class="text-center text-xs text-white/90 drop-shadow-sm"
            >
              {{ lightboxPositionLabel }}
            </p>
          </div>

          <button
            v-if="items.length > 1"
            type="button"
            class="flex-shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/40 bg-white/55 text-surface-800 shadow-lg backdrop-blur-md hover:bg-white/75 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label="다음 이미지"
            @click="next"
          >
            <Icon name="heroicons:chevron-right-20-solid" class="w-5 h-5 sm:w-6 sm:h-6 -mr-0.5" />
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
