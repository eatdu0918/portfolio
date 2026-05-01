<script setup lang="ts">
interface Props {
  techStack: Record<string, string[]>
}

defineProps<Props>()

const categoryLabels: Record<string, { label: string; icon: string }> = {
  frontend: { label: 'Frontend', icon: 'heroicons:computer-desktop-20-solid' },
  backend: { label: 'Backend', icon: 'heroicons:server-20-solid' },
  infrastructure: { label: 'Infrastructure', icon: 'heroicons:cloud-20-solid' },
  ai: { label: 'AI / ML', icon: 'heroicons:cpu-chip-20-solid' },
  database: { label: 'Database', icon: 'heroicons:circle-stack-20-solid' },
  map: { label: 'GIS / Map', icon: 'heroicons:map-20-solid' },
  military: { label: 'Military Symbol', icon: 'heroicons:shield-check-20-solid' },
  visualization: { label: 'Visualization', icon: 'heroicons:chart-bar-20-solid' },
  devops: { label: 'DevOps', icon: 'heroicons:wrench-screwdriver-20-solid' },
  tools: { label: 'Tools', icon: 'heroicons:cog-6-tooth-20-solid' },
  deployment: { label: 'Deployment', icon: 'heroicons:rocket-launch-20-solid' },
  content: { label: 'Content / MD', icon: 'heroicons:document-text-20-solid' },
  quality: { label: 'Quality', icon: 'heroicons:beaker-20-solid' },
}

function getCategoryInfo(key: string) {
  return categoryLabels[key] || { label: key, icon: 'heroicons:hashtag-20-solid' }
}
</script>

<template>
  <div class="grid sm:grid-cols-2 gap-6">
    <div
      v-for="(techs, category) in techStack"
      :key="category"
      class="card-base p-5"
    >
      <div class="flex items-center gap-2 mb-4">
        <Icon :name="getCategoryInfo(category as string).icon" class="w-5 h-5 text-black" />
        <h4 class="font-semibold text-black">
          {{ getCategoryInfo(category as string).label }}
        </h4>
      </div>
      <div class="flex flex-wrap gap-2">
        <TechBadge v-for="tech in techs" :key="tech" :label="tech" size="sm" />
      </div>
    </div>
  </div>
</template>
