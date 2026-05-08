<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] transition-colors">
    <NavigationBar />
    <main class="flex-1">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
