// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@primevue/nuxt-module'
],
primevue: {
  options: {
      theme: {
          preset: Aura
      }
  }
}


})
