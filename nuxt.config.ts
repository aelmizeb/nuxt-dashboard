// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: false,
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/leaflet',
  ],
  runtimeConfig: {
    public: {
      mediaBase: '', // can be overridden by NUXT_PUBLIC_MEDIA_BASE environment variable
    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/nuxt-dashboard/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      script: [
      ],
      meta: [
        {
          name: 'sapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'msapplication-TileImage',
          content: '/icons/ms-icon-144x144.png'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `/icons/android-icon-192x192.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          href: `/icons/favicon-32x32.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          href: `/icons/favicon-96x96.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          href: `/icons/favicon-16x16.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: `/icons/apple-icon-57x57.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: `/icons/apple-icon-60x60.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: `/icons/apple-icon-72x72.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: `/icons/apple-icon-76x76.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: `/icons/apple-icon-114x114.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: `/icons/apple-icon-120x120.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: `/icons/apple-icon-144x144.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: `/icons/apple-icon-152x152.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: `/icons/apple-icon-180x180.png`,
        },
        {
          rel: "manifest",
          href: `/icons/manifest.json`,
        }
      ],
    },
  },
})
