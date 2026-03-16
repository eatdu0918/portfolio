<template>
  <footer class="border-t border-surface-200 bg-surface-50">
    <div class="section-container py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-xs">P</span>
          <span class="font-display font-semibold text-surface-700">Portfolio</span>
        </div>

        <div class="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener"
            class="p-2.5 rounded-xl text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            aria-label="GitHub"
          >
            <Icon name="mdi:github" class="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            class="p-2.5 rounded-xl text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            aria-label="Email"
          >
            <Icon name="heroicons:envelope-20-solid" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-surface-200 text-center">
        <p class="text-sm text-surface-400">
          Built with Nuxt 3, Tailwind CSS, and Nuxt Content.
        </p>
      </div>
    </div>
  </footer>
</template>
