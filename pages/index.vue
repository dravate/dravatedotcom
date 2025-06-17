<template>








  <div class="max-w-[980px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4">
    <NuxtLink to="/about"
      class="relative flex flex-col gap-1 border p-6 rounded-lg border-gray-200 dark:border-white/10 dark:bg-white/5 bg-gray-50/10 group hover:dark:border-[#00DC82] hover:border-[#00DC82] transition-all">
      <div
        class="w-[32px] h-[32px] bg-[#00DC82]/5 flex items-center justify-center border rounded border-[#00DC82] transition-all dark:border-[#00DC82]/50 group-hover:dark:border-[#00DC82]/80 dark:bg-[#020420] text-[#00DC82] dark:text-[#00DC82]">
        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path fill="currentColor"
            d="M64 216a8 8 0 0 1-8-8v-42.7a27.6 27.6 0 0 1-14.1 2.6A28 28 0 1 1 56 114.7V72a8 8 0 0 1 8-8h46.7a27.6 27.6 0 0 1-2.6-14.1A28 28 0 1 1 161.3 64H208a8 8 0 0 1 8 8v42.7a27.6 27.6 0 0 0-14.1-2.6a28 28 0 1 0 14.1 53.2V208a8 8 0 0 1-8 8Z"
            opacity=".2" />
          <path fill="currentColor"
            d="M220.3 158.5a8.1 8.1 0 0 0-7.7-.4a20.2 20.2 0 0 1-23.2-4.4a20 20 0 0 1 13.1-33.6a19.6 19.6 0 0 1 10.1 1.8a8.1 8.1 0 0 0 7.7-.4a8.2 8.2 0 0 0 3.7-6.8V72a16 16 0 0 0-16-16h-36.2c.1-1.3.2-2.7.2-4a36.1 36.1 0 0 0-38.3-35.9a36 36 0 0 0-33.6 33.3a36.4 36.4 0 0 0 .1 6.6H64a16 16 0 0 0-16 16v32.2l-4-.2a35.6 35.6 0 0 0-26.2 11.4a35.3 35.3 0 0 0-9.7 26.9a36 36 0 0 0 33.3 33.6a36.4 36.4 0 0 0 6.6-.1V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.7a8.2 8.2 0 0 0-3.7-6.8ZM208 208H64v-42.7a8.2 8.2 0 0 0-3.7-6.8a8.1 8.1 0 0 0-7.7-.4a19.6 19.6 0 0 1-10.1 1.8a20 20 0 0 1-13.1-33.6a20.2 20.2 0 0 1 23.2-4.4a8.1 8.1 0 0 0 7.7-.4a8.2 8.2 0 0 0 3.7-6.8V72h46.7a8.2 8.2 0 0 0 6.8-3.7a8.1 8.1 0 0 0 .4-7.7a19.6 19.6 0 0 1-1.8-10.1a20 20 0 0 1 33.6-13.1a20.2 20.2 0 0 1 4.4 23.2a8.1 8.1 0 0 0 .4 7.7a8.2 8.2 0 0 0 6.8 3.7H208v32.2a36.4 36.4 0 0 0-6.6-.1a36 36 0 0 0-33.3 33.6A36.1 36.1 0 0 0 204 176l4-.2Z" />
        </svg>
      </div>
      <svg
        class="absolute right-4 top-4 dark:text-white/40 text-[#020420]/20 group-hover:text-[#00DC82] size-4 group-hover:size-5 transition-all"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z" />
      </svg>
      <h2 class="font-semibold text-base mt-1">About Us</h2>
      <p class="text-sm text-gray-700 dark:text-gray-200 group-hover:dark:text-gray-100">Discover our list of modules to
        supercharge your Nuxt project.</p>
    </NuxtLink>

    <NuxtLink to="/contact"
      class="relative flex flex-col gap-1 border p-6 rounded-lg border-gray-200 dark:border-white/10 dark:bg-white/5 bg-gray-50/10 group hover:dark:border-[#00DC82] hover:border-[#00DC82] transition-all">
      <div
        class="w-[32px] h-[32px] bg-[#00DC82]/5 flex items-center justify-center border rounded border-[#00DC82] transition-all dark:border-[#00DC82]/50 group-hover:dark:border-[#00DC82]/80 dark:bg-[#020420] text-[#00DC82] dark:text-[#00DC82]">
        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path fill="currentColor" d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
            opacity=".2" />
          <path fill="currentColor"
            d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H40V56h176v144ZM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
        </svg>
      </div>
      <svg
        class="absolute right-4 top-4 dark:text-white/40 text-[#020420]/20 group-hover:text-[#00DC82] size-4 group-hover:size-5 transition-all"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z" />
      </svg>
      <h2 class="font-semibold text-base mt-1">Contact Us</h2>
      <p class="text-sm text-gray-700 dark:text-gray-200 group-hover:dark:text-gray-100">Explore different way of using
        Nuxt features and get inspired.</p>
    </NuxtLink>


  </div>

  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4">

    <InfoCard to="/services" :items="services">
      <template #icon>
        <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">S</div>
      </template>
      <template #title>
        <h2 class="font-semibold text-xl mt-1">Services</h2>
      </template>
      <template #description>
        <p class="text-sm text-gray-700 dark:text-gray-300">Click to see all services.</p>
      </template>
    </InfoCard>


    <NuxtLink to="/blogs"
      class="relative flex flex-col gap-1 border p-6 rounded-lg border-gray-200 dark:border-white/10 dark:bg-white/5 bg-gray-50/10 group hover:dark:border-[#00DC82] hover:border-[#00DC82] transition-all">
      <div
        class="w-[32px] h-[32px] bg-[#00DC82]/5 flex items-center justify-center border rounded border-[#00DC82] transition-all dark:border-[#00DC82]/50 group-hover:dark:border-[#00DC82]/80 dark:bg-[#020420] text-[#00DC82] dark:text-[#00DC82]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path fill="currentColor"
            d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z"
            opacity=".2" />
          <path fill="currentColor"
            d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7c1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6a8 8 0 0 0 8 8a91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1Z" />
          <path fill="currentColor"
            d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9a16 16 0 0 0 12.2 11.1l39.5 7.9l41.8 41.8l7.9 39.5a16 16 0 0 0 11.1 12.2a14.7 14.7 0 0 0 4.6.7a15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2ZM74.7 79.4H120l-39.9 39.9l-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6c4 26.7-13.8 47.7-21.6 55.5L128 161.9L94.1 128Zm20.3 115.5l-32.4 32.3l-7.5-37.7l39.9-39.9Z" />
        </svg>
      </div>
      <svg
        class="absolute right-4 top-4 dark:text-white/40 text-[#020420]/20 group-hover:text-[#00DC82] size-4 group-hover:size-5 transition-all"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z" />
      </svg>
      <h2 class="font-semibold text-base mt-1">Blogs</h2>
      <p class="text-sm text-gray-700 dark:text-gray-200 group-hover:dark:text-gray-100">Learn how to deploy your Nuxt
        project on different providers.</p>
    </NuxtLink>


    <NuxtLink to="/courses"
      class="relative flex flex-col gap-1 border p-6 rounded-lg border-gray-200 dark:border-white/10 dark:bg-white/5 bg-gray-50/10 group hover:dark:border-[#00DC82] hover:border-[#00DC82] transition-all">
      <div
        class="w-[32px] h-[32px] bg-[#00DC82]/5 flex items-center justify-center border rounded border-[#00DC82] transition-all dark:border-[#00DC82]/50 group-hover:dark:border-[#00DC82]/80 dark:bg-[#020420] text-[#00DC82] dark:text-[#00DC82]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path fill="currentColor"
            d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z"
            opacity=".2" />
          <path fill="currentColor"
            d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7c1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6a8 8 0 0 0 8 8a91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1Z" />
          <path fill="currentColor"
            d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9a16 16 0 0 0 12.2 11.1l39.5 7.9l41.8 41.8l7.9 39.5a16 16 0 0 0 11.1 12.2a14.7 14.7 0 0 0 4.6.7a15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2ZM74.7 79.4H120l-39.9 39.9l-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6c4 26.7-13.8 47.7-21.6 55.5L128 161.9L94.1 128Zm20.3 115.5l-32.4 32.3l-7.5-37.7l39.9-39.9Z" />
        </svg>
      </div>
      <svg
        class="absolute right-4 top-4 dark:text-white/40 text-[#020420]/20 group-hover:text-[#00DC82] size-4 group-hover:size-5 transition-all"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z" />
      </svg>
      <h2 class="font-semibold text-base mt-1">Courses</h2>
      <p class="text-sm text-gray-700 dark:text-gray-200 group-hover:dark:text-gray-100">Learn how to deploy your Nuxt
        project on different providers.</p>
    </NuxtLink>


    <InfoCard to="/testimonials" :items="testimonials">
      <template #icon>
        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">T</div>
      </template>
      <template #title>
        <h2 class="font-semibold text-xl mt-1">Testimonials</h2>
      </template>
      <template #description>
        <p class="text-sm text-gray-700 dark:text-gray-300">Read what people are saying.</p>
      </template>
    </InfoCard>




    <Subscribe />

  </div>




</template>


<script setup lang="ts">

import { onMounted, computed } from 'vue'
import { useWebSiteStore } from '../stores/useWebsite'
import InfoCard from '../components/cards/InfoCard.vue'
import Subscribe from '../components/Subscribe.vue';


const testimonials = computed(() => webSiteStore.testimonials);
const services = computed(() => webSiteStore.services);

const webSiteStore = useWebSiteStore();


onMounted(

  async () => {
    //  await webSiteStore.loadSettings();
  }
)

</script>
