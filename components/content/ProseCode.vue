<script setup lang="ts">
/**
 * Nuxt Content: paragraph 안의 `인라인 코드` 전용.
 * 블록/펜스 코드는 ProsePre.vue가 담당한다.
 */
interface Props {
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
}

defineProps<Props>()
</script>

<template>
  <code class="prose-inline-code">
    <slot></slot>
  </code>
</template>
