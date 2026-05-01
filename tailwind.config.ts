import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Inter', '"Noto Sans KR"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e2e2e2',
          300: '#efefef',
          400: '#afafaf',
          500: '#000000',
          600: '#1a1a1a',
          700: '#333333',
          800: '#4b4b4b',
          900: '#111111',
          950: '#000000',
        },
        accent: {
          300: '#f3f3f3',
          400: '#e2e2e2',
          500: '#4b4b4b',
          600: '#333333',
        },
        surface: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f4f4f4',
          300: '#e8e8e8',
          400: '#afafaf',
          500: '#6b6b6b',
          600: '#4b4b4b',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#000000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
