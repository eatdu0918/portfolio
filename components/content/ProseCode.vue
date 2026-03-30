<script setup lang="ts">
interface Props {
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
}

const props = defineProps<Props>()

const isMermaid = computed(() => props.language === 'mermaid')
</script>

<template>
  <MermaidDiagram v-if="isMermaid" :code="code ?? ''" />
  <div v-else class="relative group my-4 rounded-xl border border-surface-200/80 bg-surface-100/85 backdrop-blur-md shadow-sm overflow-hidden">
    <div v-if="filename" class="px-4 py-2 bg-surface-200/55 backdrop-blur-sm border-b border-surface-200/70 text-xs font-mono text-surface-600">
      {{ filename }}
    </div>
    <div class="overflow-x-auto p-4 text-sm leading-relaxed text-surface-800 font-mono"><slot /></div>
  </div>
</template>
