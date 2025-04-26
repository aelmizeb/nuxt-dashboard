// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/nuxt-dashboard/',
  },
  ssr: false,
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/leaflet',
  ],
})
