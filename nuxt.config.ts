// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/nuxt-dashboard/',
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: false,
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/leaflet',
    'nuxt-highcharts',
  ],
})
