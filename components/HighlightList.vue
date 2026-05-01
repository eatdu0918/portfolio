<script setup lang="ts">
interface Props {
  items: string[]
}

defineProps<Props>()
</script>

<template>
  <ul class="space-y-3">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="flex items-start gap-3"
    >
      <span class="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0"></span>
      <span class="text-surface-600 leading-relaxed">{{ item }}</span>
    </li>
  </ul>
</template>
