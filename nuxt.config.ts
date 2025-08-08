// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  css: [
    '@/assets/css/bootstrap-minimal.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
  build: {
    transpile: ['bootstrap-vue-3'],
  },
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Phat - Fullstack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Hi! I\'m Phat, a passionate fullstack developer who loves gaming, coding, and building innovative projects. Connect with me on social media and explore my work.' 
        },
        { name: 'theme-color', content: '#667eea' },
        { property: 'og:title', content: 'Phat - Fullstack Developer' },
        { property: 'og:description', content: 'Passionate fullstack developer specializing in modern web technologies and innovative solutions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/profile.jpg' }
      ],
      link: [
        // Preload critical assets
        { rel: 'preload', href: '/images/profile.webp', as: 'image', type: 'image/webp' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // DNS prefetch for external links
        { rel: 'dns-prefetch', href: '//github.com' },
        { rel: 'dns-prefetch', href: '//www.facebook.com' },
        { rel: 'dns-prefetch', href: '//www.instagram.com' },
        { rel: 'dns-prefetch', href: '//steamcommunity.com' }
      ]
    }
  }
})
