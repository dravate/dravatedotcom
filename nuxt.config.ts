// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css', 'swiper/css'],
  pages: true,
  runtimeConfig: {
    public: {
       API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
       API_KEY: process.env.NUXT_PUBLIC_API_KEY || 'NONE',
    },
  },
  ssr: false,  // IMPORTANT: disables server-side rendering
  target: 'static',  // legacy but still helps clarify intent
  app: {
    baseURL: '/', // or use `/your-subfolder/` if hosting in subfolder
  },
  sitemap: {
    hostname: 'https://dravate.com',
    routes: async () => {
      // optional: dynamic routes from an API or file
      return [
        '/about', 
        '/blogs', 
        '/contact', 
        '/courses', 
        '/services',
        '/blogs/weve-open-sourced-the-codebase-for-dravatecom-heres-why-it-matters',
        '/blogs/mastering-django-from-basics-to-deployment-20-hours',
        '/blogs/mastering-vue3',
        '/courses/mastering-django-from-basics-to-deployment-20-hours',
        '/courses/mastering-vue3'
      ]
    }
  },
   site: {
    url: 'https://dravate.com', // ✅ REQUIRED for sitemap and SEO modules
  },

})