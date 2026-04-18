<script setup lang="ts">
defineProps<{
  name: string
  title: string
  email: string
  phone: string
  github: string
  portfolio: string
}>()
</script>

<template>
  <div class="mb-8 pb-4 border-b border-surface-200/80">
    <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
      <!-- Left: Name and Info — md 이상에서 사진보다 넓게 배분해 연락처 2열이 한 줄에 들어가도록 -->
      <div class="flex-1 w-full min-w-0 md:flex-[2_1_0%]">
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-surface-950 tracking-tight mb-4">
          {{ name }}
        </h1>
        <p class="text-lg sm:text-xl font-semibold text-surface-800 leading-snug mb-6 max-w-2xl border-l-[3px] border-brand-500 pl-4">
          {{ title }}
        </p>
        
        <!-- Contact Grid -->
        <p class="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-surface-400 mb-3">
          Contact
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 sm:gap-x-10">
          <!-- Email -->
          <div class="flex items-center gap-3 text-surface-700 group">
            <div class="w-8 h-8 rounded-lg bg-surface-50 flex items-center justify-center border border-surface-100 group-hover:border-brand-200 group-hover:bg-brand-50 transition-colors">
              <Icon name="heroicons:envelope-20-solid" class="w-4 h-4 text-surface-400 group-hover:text-brand-500" />
            </div>
            <a :href="`mailto:${email}`" class="text-sm hover:text-brand-600 transition-colors">{{ email }}</a>
          </div>
          
          <!-- GitHub -->
          <div class="flex items-center gap-3 text-surface-700 group">
            <div class="w-8 h-8 rounded-lg bg-surface-50 flex items-center justify-center border border-surface-100 group-hover:border-brand-200 group-hover:bg-brand-50 transition-colors">
              <Icon name="mdi:github" class="w-4 h-4 text-surface-400 group-hover:text-brand-500" />
            </div>
            <a
              :href="github"
              target="_blank"
              class="text-sm hover:text-brand-600 transition-colors whitespace-nowrap"
            >
              GitHub: {{ github.replace('https://', '') }}
            </a>
          </div>
          
          <!-- Phone -->
          <div class="flex items-center gap-3 text-surface-700">
            <div class="w-8 h-8 rounded-lg bg-surface-50 flex items-center justify-center border border-surface-100">
              <Icon name="heroicons:phone-20-solid" class="w-4 h-4 text-surface-400" />
            </div>
            <span class="text-sm">{{ phone }}</span>
          </div>
          
          <!-- Portfolio -->
          <div class="flex items-center gap-3 text-surface-700 group">
            <div class="w-8 h-8 rounded-lg bg-surface-50 flex items-center justify-center border border-surface-100 group-hover:border-brand-200 group-hover:bg-brand-50 transition-colors">
              <Icon name="heroicons:globe-alt-20-solid" class="w-4 h-4 text-surface-400 group-hover:text-brand-500" />
            </div>
            <a :href="portfolio" target="_blank" class="text-sm hover:text-brand-600 transition-colors">
              포트폴리오: {{ portfolio.replace('http://', '').replace('https://', '') }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- Right: ID Photo — 본문(이름·직함·연락처) 높이에 맞춘 비율, 흰 여백 최소화 -->
      <div class="shrink-0 mx-auto md:mx-0 md:self-end">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-b from-surface-200 to-surface-100 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div class="relative w-28 aspect-[3/4] sm:w-32 md:w-36 bg-white rounded-lg overflow-hidden border border-surface-200 shadow-sm">
            <img 
              :src="'/images/resume-profile.jpg'" 
              alt="프로필 사진"
              class="w-full h-full object-cover object-top"
              @error="(e: any) => (e.target.src = 'https://ui-avatars.com/api/?name=' + name + '&background=f3f4f6&color=6b7280&size=256')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

