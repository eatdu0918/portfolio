export default defineNuxtPlugin((nuxtApp) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.07, rootMargin: '0px 0px -32px 0px' },
  )

  const observe = () => {
    nextTick(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el))
    })
  }

  nuxtApp.hook('page:finish', observe)
  observe()
})
