<script setup lang="ts">
definePageMeta({
  layout: 'minimal',
})

useHead({
  title: 'Admin 로그인 (데모) | Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'e-commerce MSA 개인 프로젝트용 어드민 로그인 UI 데모. 실제 서비스 인증과는 별도입니다.',
    },
  ],
})

/** 프로젝트 문서 `content/projects/sparta-ecommerce-msa/index.md`와 동일 */
const TEST_ACCOUNTS = {
  admin: {
    email: 'admin@sparta-msa.com',
    password: 'test1234!',
  },
  visitor: {
    email: 'visitor@sparta-msa.com',
    password: 'test1234!',
  },
} as const

const ADMIN_APP_URL = 'https://gossipy-jeanetta-sulkier.ngrok-free.dev/admin/login'

const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)
const submitting = ref(false)

function fillAdmin() {
  email.value = TEST_ACCOUNTS.admin.email
  password.value = TEST_ACCOUNTS.admin.password
  error.value = ''
  success.value = false
}

function fillVisitor() {
  email.value = TEST_ACCOUNTS.visitor.email
  password.value = TEST_ACCOUNTS.visitor.password
  error.value = ''
  success.value = false
}

async function handleSubmit() {
  error.value = ''
  success.value = false

  const e = email.value.trim().toLowerCase()
  const p = password.value

  if (!e || !p) {
    error.value = '이메일과 비밀번호를 입력해 주세요.'
    return
  }

  submitting.value = true
  await new Promise((r) => setTimeout(r, 380))

  const isAdmin =
    e === TEST_ACCOUNTS.admin.email && p === TEST_ACCOUNTS.admin.password
  const isVisitor =
    e === TEST_ACCOUNTS.visitor.email && p === TEST_ACCOUNTS.visitor.password

  submitting.value = false

  if (isAdmin) {
    success.value = true
    return
  }
  if (isVisitor) {
    error.value = '이 계정은 일반 사용자(쇼핑몰)용입니다. 관리자 이메일로 로그인해 주세요.'
    return
  }
  error.value = '데모에서 허용한 테스트 계정과 일치하지 않습니다. 아래 버튼으로 채울 수 있습니다.'
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24">
    <div
      class="absolute inset-0 dot-pattern opacity-30 pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute top-24 right-[12%] w-64 h-64 bg-brand-200/25 rounded-full blur-[72px] pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-16 left-[8%] w-56 h-56 bg-accent-300/20 rounded-full blur-[64px] pointer-events-none"
      aria-hidden="true"
    ></div>

    <div class="relative w-full max-w-md animate-fade-in">
      <NuxtLink
        to="/projects/sparta-ecommerce-msa"
        class="inline-flex items-center gap-1.5 text-sm text-surface-500 hover:text-brand-600 mb-8 transition-colors"
      >
        <Icon name="heroicons:arrow-left-20-solid" class="w-4 h-4" />
        e-commerce MSA 프로젝트로 돌아가기
      </NuxtLink>

      <div class="glass-card p-8 sm:p-9 shadow-xl shadow-brand-500/10">
        <div class="flex items-center gap-3 mb-2">
          <span
            class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white"
            aria-hidden="true"
          >
            <Icon name="heroicons:shield-check-20-solid" class="w-5 h-5" />
          </span>
          <div>
            <p class="text-xs font-semibold text-brand-600 uppercase tracking-wider">
              Sparta MSA
            </p>
            <h1 class="text-xl font-bold text-surface-800 tracking-tight">
              어드민 로그인
            </h1>
          </div>
        </div>

        <p class="text-sm text-surface-500 mt-3 mb-8 leading-relaxed">
          포트폴리오 내 <strong class="text-surface-700 font-medium">UI 데모</strong>입니다. 입력값은
          브라우저에서만 검증되며, 실제 API와 통신하지 않습니다.
        </p>

        <form class="space-y-5" @submit.prevent="handleSubmit">
          <div>
            <label for="admin-email" class="block text-xs font-semibold text-surface-600 mb-1.5">
              이메일
            </label>
            <input
              id="admin-email"
              v-model="email"
              type="email"
              autocomplete="username"
              class="w-full px-3.5 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-800 text-sm placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400 transition-shadow"
              placeholder="admin@sparta-msa.com"
            />
          </div>
          <div>
            <label for="admin-password" class="block text-xs font-semibold text-surface-600 mb-1.5">
              비밀번호
            </label>
            <input
              id="admin-password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              class="w-full px-3.5 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-800 text-sm placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400 transition-shadow"
              placeholder="••••••••"
            />
          </div>

          <p
            v-if="error"
            class="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5"
            role="alert"
          >
            {{ error }}
          </p>

          <div
            v-if="success"
            class="text-sm text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-3 space-y-3"
            role="status"
          >
            <p>
              데모 검증에 성공했습니다. 아래에서 실제 어드민 앱(외부 데모)을 여세요.
            </p>
            <a
              :href="ADMIN_APP_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-500 hover:shadow-lg hover:shadow-brand-500/25 transition-all"
            >
              어드민 앱 열기
              <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4" />
            </a>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full py-3 rounded-xl font-semibold text-white bg-surface-800 hover:bg-surface-900 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {{ submitting ? '확인 중…' : '데모 로그인' }}
          </button>
        </form>

        <div class="mt-6 pt-6 border-t border-surface-200">
          <p class="text-xs font-semibold text-surface-500 mb-3">테스트 계정으로 채우기</p>
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="px-3 py-1.5 rounded-lg text-xs font-medium border border-surface-200 bg-white text-surface-700 hover:border-brand-300 hover:bg-brand-50 transition-colors"
              @click="fillAdmin"
            >
              관리자
            </button>
            <button
              type="button"
              class="px-3 py-1.5 rounded-lg text-xs font-medium border border-surface-200 bg-white text-surface-700 hover:border-brand-300 hover:bg-brand-50 transition-colors"
              @click="fillVisitor"
            >
              일반 사용자
            </button>
          </div>
          <p class="text-[11px] text-surface-400 mt-3 leading-relaxed">
            관리자 로그인 데모는 <code class="font-mono text-surface-600">admin@…</code> 계정만 통과합니다.
          </p>
        </div>
      </div>

      <p class="text-center text-[11px] text-surface-400 mt-8 max-w-sm mx-auto leading-relaxed">
        외부 데모 URL은 터널·배포 설정에 따라 바뀔 수 있습니다. 최신 링크는
        <NuxtLink to="/projects/sparta-ecommerce-msa" class="text-brand-600 hover:underline">
          프로젝트 페이지
        </NuxtLink>
        를 참고하세요.
      </p>
    </div>
  </div>
</template>
