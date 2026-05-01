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
    class="inline-flex items-center font-sans font-bold rounded-[999px] transition-colors bg-brand-300 text-black"
    :class="size === 'sm' ? 'text-[10px] px-2.5 py-0.5' : 'text-xs px-3 py-1'"
  >
    {{ label }}
  </span>
</template>
