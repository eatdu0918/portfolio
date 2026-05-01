<script setup lang="ts">
useHead({
  title: '연락처 | 이두현 포트폴리오',
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
    <section class="py-14 sm:py-20 bg-white">
      <div class="section-container max-w-lg">
        <p class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">Contact</p>
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-black tracking-tight mb-3">연락하기</h1>
        <p class="text-sm text-surface-500 mb-8 leading-relaxed">새로운 기회, 프로젝트 협업, 기술 질문 등 편하게 연락 주세요.</p>

        <div class="space-y-3">
          <a
            v-for="c in contacts"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="card-base p-5 flex items-center gap-4 group hover:shadow-[rgba(0,0,0,0.16)_0px_4px_16px_0px] transition-shadow"
          >
            <div class="w-11 h-11 rounded-[8px] bg-black flex items-center justify-center flex-shrink-0">
              <Icon :name="c.icon" class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[11px] text-surface-400 font-semibold uppercase tracking-wider mb-0.5">{{ c.label }}</p>
              <p class="text-sm font-medium text-black truncate">{{ c.value }}</p>
            </div>
            <Icon name="heroicons:arrow-up-right-20-solid" class="w-4 h-4 text-surface-400 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
