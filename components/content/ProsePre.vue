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
  <div v-else class="relative group my-4">
    <div v-if="filename" class="px-4 py-2 bg-surface-800 dark:bg-surface-900 rounded-t-xl border-b border-surface-700 text-xs font-mono text-surface-400">
      {{ filename }}
    </div>
    <pre
      class="overflow-x-auto p-4 text-sm leading-relaxed bg-surface-900 dark:bg-surface-950 text-surface-100"
      :class="filename ? 'rounded-b-xl' : 'rounded-xl'"
    ><slot ></slot></pre>
  </div>
</template>
