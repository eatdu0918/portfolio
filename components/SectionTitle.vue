<script setup lang="ts">
interface Props {
  label?: string
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <div class="mb-12">
    <p v-if="label" class="text-sm font-semibold font-mono text-brand-500 tracking-wide uppercase mb-2">
      {{ label }}
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-surface-800 font-display">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-lg text-surface-500 max-w-2xl">
      {{ description }}
    </p>
  </div>
</template>
