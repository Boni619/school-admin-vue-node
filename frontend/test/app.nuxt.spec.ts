// @vitest-environment node
import { mockComponent } from 'nuxt-vitest/utils'

mockComponent('MyComponent', {
  props: {
    value: String
  },
  setup(props) {
    // ...
  }
})

// relative path or alias also works
mockComponent('~/components/my-component.vue', async () => {
  // or a factory function
  return {
    setup(props) {
      // ...
    }
  }
})

// or you can use SFC for redirecting to a mock component
mockComponent('MyComponent', () => import('./MockComponent.vue'))

// your tests here