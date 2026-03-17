<template>
  <div class="min-h-screen flex flex-col bg-surface-50">
    <NavigationBar />
    <main class="flex-1">
      <slot></slot>
    </main>
    <FooterSection />
  </div>
</template>
