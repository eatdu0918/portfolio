<script setup lang="ts">
useHead({
  title: '연락처 | 이두현 포트폴리오',
})

const contacts = [
  {
    icon: 'heroicons:envelope-20-solid',
    label: 'Email',
    value: 'eatdu0918@gmail.com',
    href: 'mailto:eatdu0918@gmail.com',
  },
  {
    icon: 'heroicons:phone-20-solid',
    label: 'Phone',
    value: '010-8310-1753',
    href: 'tel:010-8310-1753',
  },
  {
    icon: 'mdi:github',
    label: 'GitHub',
    value: 'github.com/eatdu0918',
    href: 'https://github.com/eatdu0918',
  },
]

const purposeOptions = ['채용 제안', '프로젝트 협업', '기술 질문', '기타 문의']

const form = reactive({
  name: '',
  email: '',
  purpose: '채용 제안',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)

const isValid = computed(() =>
  form.name.trim() && form.email.trim() && form.message.trim(),
)

function buildMailto() {
  const subject = encodeURIComponent(`[포트폴리오 문의] ${form.purpose} — ${form.name}`)
  const body = encodeURIComponent(
    `이름: ${form.name}\n이메일: ${form.email}\n문의 유형: ${form.purpose}\n\n내용:\n${form.message}`,
  )
  return `mailto:eatdu0918@gmail.com?subject=${subject}&body=${body}`
}

function submit() {
  if (!isValid.value) return
  submitting.value = true
  window.location.href = buildMailto()
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 800)
}
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-white dark:bg-[#111]">
      <div class="section-container max-w-2xl">
        <p class="reveal text-xs font-semibold text-surface-400 tracking-[0.18em] uppercase mb-3 dark:text-surface-500">Contact</p>
        <h1 class="reveal rd-1 text-3xl sm:text-4xl font-display font-bold text-black tracking-tight mb-3 dark:text-white">연락하기</h1>
        <p class="reveal rd-2 text-sm text-surface-500 mb-10 leading-relaxed dark:text-surface-400">
          새로운 기회, 프로젝트 협업, 기술 질문 등 편하게 연락 주세요.
        </p>

        <div class="grid sm:grid-cols-3 gap-3 mb-12 reveal rd-3">
          <a
            v-for="c in contacts"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="card-base p-4 flex flex-col items-center gap-2.5 text-center group hover:shadow-[rgba(0,0,0,0.16)_0px_4px_16px_0px] transition-all hover:-translate-y-0.5"
          >
            <div class="w-10 h-10 rounded-[8px] bg-black flex items-center justify-center dark:bg-white">
              <Icon :name="c.icon" class="w-5 h-5 text-white dark:text-black" />
            </div>
            <div>
              <p class="text-[10px] text-surface-400 font-semibold uppercase tracking-wider mb-0.5 dark:text-surface-500">{{ c.label }}</p>
              <p class="text-xs font-medium text-black dark:text-white truncate">{{ c.value }}</p>
            </div>
          </a>
        </div>

        <!-- 문의 폼 -->
        <div class="reveal rd-4">
          <h2 class="text-base font-bold text-black mb-6 dark:text-white">문의 보내기</h2>

          <Transition
            enter-active-class="transition-all duration-400"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
          >
            <div
              v-if="submitted"
              class="text-center py-12 px-6 rounded-[12px] border border-surface-200 dark:border-white/10"
            >
              <div class="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-4 dark:bg-white">
                <Icon name="heroicons:check-20-solid" class="w-7 h-7 text-white dark:text-black" />
              </div>
              <h3 class="text-base font-bold text-black mb-2 dark:text-white">이메일 클라이언트가 열렸습니다</h3>
              <p class="text-sm text-surface-500 dark:text-surface-400">
                내용을 확인하고 전송해 주세요. 빠른 시일 내에 답변드리겠습니다.
              </p>
              <button
                class="mt-6 text-xs text-surface-400 hover:text-black transition-colors dark:hover:text-white"
                @click="submitted = false"
              >
                다시 작성하기
              </button>
            </div>
          </Transition>

          <form v-if="!submitted" class="space-y-4" @submit.prevent="submit">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-surface-600 mb-1.5 dark:text-surface-400">이름 <span class="text-black dark:text-white">*</span></label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="홍길동"
                  required
                  class="w-full px-4 py-2.5 text-sm rounded-[8px] border border-surface-300 bg-white text-black placeholder:text-surface-400
                         focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all
                         dark:bg-[#1a1a1a] dark:border-white/15 dark:text-white dark:placeholder:text-surface-600
                         dark:focus:ring-white/20 dark:focus:border-white/40"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-surface-600 mb-1.5 dark:text-surface-400">이메일 <span class="text-black dark:text-white">*</span></label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  class="w-full px-4 py-2.5 text-sm rounded-[8px] border border-surface-300 bg-white text-black placeholder:text-surface-400
                         focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all
                         dark:bg-[#1a1a1a] dark:border-white/15 dark:text-white dark:placeholder:text-surface-600
                         dark:focus:ring-white/20 dark:focus:border-white/40"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-surface-600 mb-1.5 dark:text-surface-400">문의 유형</label>
              <select
                v-model="form.purpose"
                class="w-full px-4 py-2.5 text-sm rounded-[8px] border border-surface-300 bg-white text-black
                       focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all
                       dark:bg-[#1a1a1a] dark:border-white/15 dark:text-white
                       dark:focus:ring-white/20 dark:focus:border-white/40"
              >
                <option v-for="opt in purposeOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-surface-600 mb-1.5 dark:text-surface-400">내용 <span class="text-black dark:text-white">*</span></label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="안녕하세요. 문의 내용을 작성해 주세요."
                required
                class="w-full px-4 py-2.5 text-sm rounded-[8px] border border-surface-300 bg-white text-black placeholder:text-surface-400
                       focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none
                       dark:bg-[#1a1a1a] dark:border-white/15 dark:text-white dark:placeholder:text-surface-600
                       dark:focus:ring-white/20 dark:focus:border-white/40"
              />
            </div>

            <button
              type="submit"
              :disabled="!isValid || submitting"
              class="w-full py-3 text-sm font-semibold rounded-[999px] transition-all
                     bg-black text-white hover:bg-surface-800
                     disabled:opacity-40 disabled:cursor-not-allowed
                     dark:bg-white dark:text-black dark:hover:bg-surface-200"
            >
              <span v-if="submitting" class="inline-flex items-center gap-2">
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin dark:border-black/30 dark:border-t-black" />
                열리는 중...
              </span>
              <span v-else class="inline-flex items-center justify-center gap-2">
                <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
                이메일로 문의 보내기
              </span>
            </button>

            <p class="text-xs text-surface-400 text-center dark:text-surface-500">
              이메일 클라이언트가 열립니다. 전송 전 내용을 확인해 주세요.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
