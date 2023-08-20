import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Index from '../pages/index.vue'

describe('Index', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})