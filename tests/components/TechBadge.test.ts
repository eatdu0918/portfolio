import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TechBadge from '~/components/TechBadge.vue'

describe('TechBadge', () => {
  it('renders label text', () => {
    const wrapper = mount(TechBadge, {
      props: {
        label: 'Vue 3',
      },
    })

    expect(wrapper.text()).toContain('Vue 3')
  })

  it('applies small size class when size is sm', () => {
    const wrapper = mount(TechBadge, {
      props: {
        label: 'TypeScript',
        size: 'sm',
      },
    })

    expect(wrapper.html()).toContain('TypeScript')
    expect(wrapper.html()).toContain('text-xs')
  })

  it('applies default size when no size prop', () => {
    const wrapper = mount(TechBadge, {
      props: {
        label: 'Tailwind CSS',
      },
    })

    expect(wrapper.html()).toContain('Tailwind CSS')
    expect(wrapper.html()).toContain('text-sm')
  })
})
