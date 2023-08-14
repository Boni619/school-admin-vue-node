// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-vitest'
  ],
  runtimeConfig: {
    // The private keys which are only
    // available within server-side
    //apiSecret: process.env.API_SECRET,

    // Keys within public, will be also be
    // exposed to the client-side
    public: {
        baseUrl: process.env.API_URL,
    },
  },
})
