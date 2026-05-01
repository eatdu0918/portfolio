<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { to: '/projects', label: '프로젝트' },
  { to: '/skills', label: '기술 스택' },
  { to: '/about', label: '소개' },
  { to: '/contact', label: '연락처' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-surface-300/70 bg-white/95 backdrop-blur-xl">
    <nav class="section-container flex items-center justify-between h-16">
      <!-- 로고 -->
      <NuxtLink
        to="/"
        class="font-display font-bold text-base tracking-tight text-black hover:opacity-70 transition-opacity"
      >
        이두현
      </NuxtLink>

      <!-- 데스크톱 pill 네비게이션 -->
      <div class="hidden md:flex items-center gap-1.5">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 text-sm font-medium rounded-[999px] transition-colors"
          :class="isActive(link.to)
            ? 'bg-black text-white'
            : 'bg-brand-300 text-black hover:bg-brand-200'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- 이력서 CTA + 모바일 메뉴 -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/resume"
          class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-[999px] hover:bg-surface-800 transition-colors"
        >
          이력서
        </NuxtLink>

        <button
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-[50%] text-black hover:bg-brand-300 transition-colors"
          aria-label="메뉴"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon v-if="mobileOpen" name="heroicons:x-mark-20-solid" class="w-5 h-5" />
          <Icon v-else name="heroicons:bars-3-20-solid" class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <!-- 모바일 메뉴 -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileOpen" class="md:hidden border-t border-surface-300/70 bg-white">
        <div class="section-container py-4 flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2.5 rounded-[999px] text-sm font-medium transition-colors"
            :class="isActive(link.to)
              ? 'bg-black text-white'
              : 'bg-brand-300 text-black hover:bg-brand-200'"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/resume"
            class="px-4 py-2.5 rounded-[999px] text-sm font-semibold bg-black text-white text-center hover:bg-surface-800 transition-colors mt-1"
          >
            이력서
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
