<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { to: '/about', label: '자기소개' },
  { to: '/#skills', label: '기술 스택' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

function isActive(path: string) {
  if (path.startsWith('/#')) return false
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-surface-200/80 bg-white/80 backdrop-blur-xl">
    <nav class="section-container flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all">P</span>
        <span class="font-display font-bold text-lg text-surface-800">Portfolio</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="isActive(link.to)
            ? 'text-brand-600 bg-brand-50'
            : 'text-surface-500 hover:text-brand-600 hover:bg-brand-50/50'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/resume"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 transition-all"
        >
          이력서
        </NuxtLink>

        <button
          class="md:hidden p-2 rounded-xl text-surface-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon v-if="mobileOpen" name="heroicons:x-mark-20-solid" class="w-5 h-5" />
          <Icon v-else name="heroicons:bars-3-20-solid" class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden border-t border-surface-200/80 bg-white/95 backdrop-blur-xl">
        <div class="section-container py-3 flex flex-col gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
            :class="isActive(link.to)
              ? 'text-brand-600 bg-brand-50'
              : 'text-surface-500 hover:text-brand-600 hover:bg-brand-50'"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/resume"
            class="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-500 to-accent-500 text-white text-center hover:shadow-lg transition-all mt-2"
          >
            이력서
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
