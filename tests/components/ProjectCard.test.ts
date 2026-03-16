import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '~/components/ProjectCard.vue'

// Mock NuxtLink and Icon components
const stubs = {
  NuxtLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
  Icon: {
    template: '<span class="icon" :data-name="name"></span>',
    props: ['name'],
  },
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Test Project',
        summary: 'A test project description',
        slug: 'test-project',
        tags: ['Vue 3', 'TypeScript'],
        period: '2024.01 - 현재',
        featured: true,
        index: 1,
      },
      global: { stubs },
    })

    expect(wrapper.text()).toContain('Test Project')
  })

  it('renders tags correctly', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Test Project',
        summary: 'A test project description',
        slug: 'test-project',
        tags: ['Vue 3', 'TypeScript', 'Tailwind'],
        period: '2024.01 - 현재',
        featured: false,
        index: 1,
      },
      global: { stubs },
    })

    expect(wrapper.text()).toContain('Vue 3')
    expect(wrapper.text()).toContain('TypeScript')
  })

  it('shows index number when provided', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Featured Project',
        summary: 'A featured project',
        slug: 'featured-project',
        tags: ['Vue 3'],
        period: '2024.01 - 현재',
        featured: true,
        index: 1,
      },
      global: { stubs },
    })

    expect(wrapper.text()).toContain('1.')
  })

  it('generates correct link to project detail', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Test Project',
        summary: 'A test project',
        slug: 'my-project',
        tags: ['Vue 3'],
        period: '2024.01 - 현재',
        featured: false,
        index: 1,
      },
      global: { stubs },
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/projects/my-project')
  })

  it('limits displayed tags to 3', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'Test Project',
        summary: 'A test project',
        slug: 'test-project',
        tags: ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia', 'Vitest'],
        period: '2024.01 - 현재',
        featured: false,
        index: 1,
      },
      global: { stubs },
    })

    // Should show +2 for remaining tags
    expect(wrapper.text()).toContain('+2')
  })
})
