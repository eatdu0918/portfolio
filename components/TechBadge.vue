<script setup lang="ts">
interface Props {
  label: string
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>

<template>
  <span
    class="inline-flex items-center font-sans font-bold rounded-lg border transition-colors"
    :class="size === 'sm'
      ? 'text-xs px-2.5 py-1 border-brand-200 text-brand-700 bg-brand-50'
      : 'text-sm px-3 py-1.5 border-brand-200 text-brand-700 bg-brand-50'"
  >
    {{ label }}
  </span>
</template>
