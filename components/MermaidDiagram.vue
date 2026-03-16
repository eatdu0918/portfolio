<script setup lang="ts">
interface Props {
  code: string
}

const props = defineProps<Props>()
const container = ref<HTMLElement | null>(null)
const rendered = ref(false)

async function renderDiagram() {
  if (!import.meta.client || !container.value || rendered.value) return

  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
      fontFamily: '"Plus Jakarta Sans", "Noto Sans KR", sans-serif',
      securityLevel: 'loose',
    })

    const { svg } = await mermaid.render(`mermaid-${Date.now()}`, props.code)
    if (container.value) {
      container.value.innerHTML = svg
      rendered.value = true
    }
  }
  catch (e) {
    console.warn('Mermaid render error:', e)
    if (container.value) {
      container.value.innerHTML = `<pre class="text-sm text-surface-500">${props.code}</pre>`
    }
  }
}

onMounted(() => {
  renderDiagram()
})

const colorMode = useColorMode()
watch(() => colorMode.value, () => {
  rendered.value = false
  renderDiagram()
})
</script>

<template>
  <div
    ref="container"
    class="my-6 p-4 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-700 overflow-x-auto flex justify-center"
  >
    <div class="animate-pulse flex items-center gap-2 text-surface-400 text-sm">
      <Icon name="heroicons:arrow-path-20-solid" class="w-4 h-4 animate-spin" />
      다이어그램 로딩 중...
    </div>
  </div>
</template>
