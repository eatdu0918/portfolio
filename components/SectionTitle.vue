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
    <p v-if="label" class="text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3">
      {{ label }}
    </p>
    <h2 class="text-2xl sm:text-3xl font-bold text-black font-display tracking-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-sm text-surface-500 max-w-2xl leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
