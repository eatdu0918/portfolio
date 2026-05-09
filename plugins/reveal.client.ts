export default defineNuxtPlugin((nuxtApp) => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          intersectionObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.07, rootMargin: '0px 0px -32px 0px' },
  )

  const observe = () => {
    nextTick(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => intersectionObserver.observe(el))
    })
  }

  const mutationObserver = new MutationObserver(() => {
    observe()
  })

  nuxtApp.hook('app:mounted', () => {
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  nuxtApp.hook('page:finish', observe)
  observe()
})
