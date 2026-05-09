<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

if (siteUrl) {
  useHead({
    meta: [
      { property: 'og:image', content: `${siteUrl}/og-image.svg` },
      { property: 'og:url', content: siteUrl },
      { name: 'twitter:image', content: `${siteUrl}/og-image.svg` },
    ],
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
