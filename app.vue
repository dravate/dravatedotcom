<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  titleTemplate: (title) => (title ? `${title} · Dravate` : 'Dravate'),
  meta: [
    { name: 'description', content: 'Fullstack Developers - use Django, Python, Tailwind, Vue3 and Similar Technologies along with Machine Learning Tech' },
    { name: 'keywords', content: 'django, tailwind, python, vue3, react,dravate, karmantika, business, services, platform' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dravate.com' },
    { property: 'og:title', content: 'Dravate – Powered by Karmantika' },
    { property: 'og:description', content: 'A service platform to manage your business online.' },
    { property: 'og:image', content: 'https://d2rqifv3uzsg4x.cloudfront.net/karmantika-prod/website_logo/sarathi_dravate_logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: '#1a202c' }, // dark slate, or your primary

  ],
  htmlAttrs: {
    lang: 'en',
  }
})
</script>

