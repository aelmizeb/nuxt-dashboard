// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/leaflet',
  ]
})
