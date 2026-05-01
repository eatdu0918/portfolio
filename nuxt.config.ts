export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // Windows에서 fs.watch EPERM 회피 (백신·동기화 폴더 등)
  vite: {
    server: {
      ...(process.platform === 'win32' && {
        watch: { usePolling: true, interval: 300 },
      }),
    },
  },

  experimental: {
    appManifest: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
        },
      },
    },
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Portfolio | Full-Stack — Vue/Spring & Next.js/MSA',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '풀스택 개발자 포트폴리오 — Vue·Spring·AI 파이프라인 실무, Next.js 기술 블로그·이커머스 MSA(Kafka·K8s) 개인 프로젝트' },
        { property: 'og:title', content: 'Portfolio | Full-Stack — Vue/Spring & Next.js/MSA' },
        { property: 'og:description', content: 'Vue·Spring·Python 풀스택, OpenLayers/Cesium GIS, AI 파이프라인 — 개인: Next.js 블로그(unified·Sandpack), e-commerce MSA' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;500;600&display=swap' },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/resume'],
      crawlLinks: true,
    },
  },
})
