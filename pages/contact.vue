<script setup lang="ts">
useHead({
  title: 'Contact | Portfolio',
})

const contacts = [
  {
    icon: 'heroicons:envelope-20-solid',
    label: 'Email',
    value: 'eatdu0918@gmail.com',
    href: 'mailto:eatdu0918@gmail.com',
  },
  {
    icon: 'heroicons:phone-20-solid',
    label: 'Phone',
    value: '010-8310-1753',
    href: 'tel:010-8310-1753',
  },
  {
    icon: 'mdi:github',
    label: 'GitHub',
    value: 'github.com/eatdu0918',
    href: 'https://github.com/eatdu0918',
  },
]
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container max-w-xl">
        <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">Contact</p>
        <h1 class="text-2xl sm:text-3xl font-bold text-surface-800 tracking-tight mb-2">연락하기</h1>
        <p class="text-sm text-surface-500 mb-8">새로운 기회, 프로젝트 협업, 기술 질문 등 편하게 연락 주세요.</p>

        <div class="space-y-3">
          <a
            v-for="c in contacts"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="p-4 rounded-xl bg-white border border-surface-100 flex items-center gap-3 group block hover:border-brand-200 transition-colors"
          >
            <div class="w-10 h-10 rounded-lg bg-surface-50 border border-surface-200 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
              <Icon :name="c.icon" class="w-5 h-5 text-surface-500 group-hover:text-brand-500 transition-colors" />
            </div>
            <div class="flex-1">
              <p class="text-xs text-surface-400 mb-0.5">{{ c.label }}</p>
              <p class="text-sm font-medium text-surface-800 group-hover:text-brand-600 transition-colors">
                {{ c.value }}
              </p>
            </div>
            <Icon
              name="heroicons:arrow-up-right-20-solid"
              class="w-4 h-4 text-surface-300 group-hover:text-brand-500 transition-colors"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
