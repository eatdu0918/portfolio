<script setup lang="ts">
interface Props {
  code: string
}

const props = defineProps<Props>()
const container = ref<HTMLElement | null>(null)
const rendered = ref(false)

/** 앱이 다크 모드여도 흐름도는 항상 밝은 팔레트(가독성·인쇄·공유에 유리) */
const lightThemeVariables = {
  fontFamily: '"Plus Jakarta Sans", "Noto Sans KR", sans-serif',
  background: '#ffffff',
  mainBkg: '#f8fafc',
  secondaryColor: '#e2e8f0',
  tertiaryColor: '#f1f5f9',
  primaryColor: '#dbeafe',
  primaryTextColor: '#0f172a',
  secondaryTextColor: '#334155',
  tertiaryTextColor: '#475569',
  primaryBorderColor: '#64748b',
  lineColor: '#334155',
  clusterBkg: '#f1f5f9',
  clusterBorder: '#94a3b8',
  titleColor: '#0f172a',
  edgeLabelBackground: '#ffffff',
  actorBkg: '#f8fafc',
  actorBorder: '#94a3b8',
  actorTextColor: '#0f172a',
  labelBoxBkgColor: '#f1f5f9',
  labelTextColor: '#0f172a',
  altSectionBkgColor: '#f8fafc',
  gridColor: '#cbd5e1',
}

async function renderDiagram() {
  if (!import.meta.client || !container.value || rendered.value) return

  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: lightThemeVariables,
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
</script>

<template>
  <div
    ref="container"
    class="mermaid-diagram my-6 p-4 bg-white rounded-xl border border-surface-200 shadow-sm dark:ring-1 dark:ring-surface-600/40 overflow-x-auto flex justify-center text-surface-900"
  >
    <div class="animate-pulse flex items-center gap-2 text-surface-400 text-sm">
      <Icon name="heroicons:arrow-path-20-solid" class="w-4 h-4 animate-spin" />
      다이어그램 로딩 중...
    </div>
  </div>
</template>
