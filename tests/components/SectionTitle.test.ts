import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitle from '~/components/SectionTitle.vue'

describe('SectionTitle', () => {
  it('renders title correctly', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'My Section',
        label: 'Section',
      },
    })

    expect(wrapper.text()).toContain('My Section')
  })

  it('renders label when provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'Skills',
        label: 'Tech Stack',
      },
    })

    expect(wrapper.text()).toContain('Tech Stack')
    expect(wrapper.text()).toContain('Skills')
  })

  it('renders description when provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'About Me',
        label: 'Introduction',
        description: 'A brief introduction about myself',
      },
    })

    expect(wrapper.text()).toContain('A brief introduction about myself')
  })

  it('does not render label when not provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'Only Title',
      },
    })

    expect(wrapper.text()).toContain('Only Title')
    // Should only have the title, no label paragraph
    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBe(0)
  })
})
