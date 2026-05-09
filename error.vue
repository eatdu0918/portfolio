<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#111] flex flex-col">
    <!-- Nav minimal -->
    <header class="sticky top-0 z-50 border-b border-surface-200/60 dark:border-white/[8%] bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <NuxtLink to="/" class="font-display font-bold text-base text-black dark:text-white tracking-tight">
          이두현
        </NuxtLink>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 flex items-center justify-center px-6">
      <div class="text-center max-w-lg">
        <!-- Error code -->
        <div class="relative mb-8 inline-block">
          <p class="font-display font-black text-[10rem] leading-none text-black/[0.04] dark:text-white/[0.04] select-none">
            {{ is404 ? '404' : error.statusCode }}
          </p>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 rounded-2xl bg-brand-300 dark:bg-white/10 flex items-center justify-center">
              <Icon
                :name="is404 ? 'heroicons:map-pin-20-solid' : 'heroicons:exclamation-triangle-20-solid'"
                class="w-8 h-8 text-black dark:text-white"
              />
            </div>
          </div>
        </div>

        <h1 class="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white mb-3 tracking-tight">
          {{ is404 ? '페이지를 찾을 수 없습니다' : '문제가 발생했습니다' }}
        </h1>
        <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-8">
          {{ is404
            ? '요청하신 페이지가 이동되거나 삭제되었을 수 있습니다.'
            : error.message || '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
          }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            class="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-[999px] hover:bg-surface-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-surface-100"
            @click="handleError"
          >
            <Icon name="heroicons:home-20-solid" class="w-4 h-4" />
            홈으로 돌아가기
          </button>
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-300 text-black text-sm font-semibold rounded-[999px] hover:bg-brand-200 transition-colors dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            프로젝트 보기
          </NuxtLink>
        </div>
      </div>
    </main>

    <!-- Dot grid background -->
    <div class="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div
        class="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 28px 28px;"
      />
    </div>
  </div>
</template>
