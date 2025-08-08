// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
  build: {
    transpile: ['bootstrap-vue-3'],
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
        }
      ]
    }
  }
})
