export function useAnimateOnScroll() {
  const observer = ref<IntersectionObserver | null>(null)

  function observe(el: HTMLElement, animationClass = 'animate-slide-up') {
    if (!import.meta.client) return

    el.style.opacity = '0'

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    observer.value.observe(el)
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe }
}
