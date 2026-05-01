<template>
  <footer class="bg-black text-white">
    <div class="section-container py-14">
      <!-- 상단 -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <p class="font-display font-bold text-xl text-white mb-2">이두현</p>
          <p class="text-sm text-surface-400 leading-relaxed max-w-xs">
            TypeScript 기반 풀스택 개발자.<br/>
            어느 도메인이든 처음부터 끝까지 설계합니다.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p class="font-semibold text-white mb-3">포트폴리오</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/projects" class="text-surface-400 hover:text-white transition-colors">프로젝트</NuxtLink></li>
              <li><NuxtLink to="/skills" class="text-surface-400 hover:text-white transition-colors">기술 스택</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-surface-400 hover:text-white transition-colors">소개</NuxtLink></li>
              <li><NuxtLink to="/resume" class="text-surface-400 hover:text-white transition-colors">이력서</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-white mb-3">연락처</p>
            <ul class="space-y-2">
              <li>
                <a href="mailto:eatdu0918@gmail.com" class="text-surface-400 hover:text-white transition-colors break-all">
                  eatdu0918@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eatdu0918"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-surface-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Icon name="mdi:github" class="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 하단 구분선 -->
      <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-surface-500">
          © 2026 이두현. Built with Nuxt 3 · Tailwind CSS · Nuxt Content.
        </p>
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/eatdu0918"
            target="_blank"
            rel="noopener noreferrer"
            class="text-surface-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Icon name="mdi:github" class="w-5 h-5" />
          </a>
          <a
            href="mailto:eatdu0918@gmail.com"
            class="text-surface-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Icon name="heroicons:envelope-20-solid" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
