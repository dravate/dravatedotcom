<template>
  <div class="max-w-[980px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="border p-6 rounded-lg shadow-sm bg-white dark:bg-white/5 border-gray-200 dark:border-white/10"
    >
      <!-- Icon -->
      <div class="mb-4 text-3xl text-green-600">
       
      
        <font-awesome-icon :icon="['fa', service.icon]" />
      </div>


      <!-- Title -->
      <h2 class="text-xl font-semibold mb-2">
        {{ service.title }}
      </h2>

      <!-- Description -->
      <div class="text-sm text-gray-700 dark:text-gray-300" v-html="service.description"></div>
    </div>
  </div>
</template>






<script setup lang="ts">


definePageMeta({  layout: 'default'})



import { onMounted, computed } from 'vue'
import { useWebSiteStore } from '../stores/useWebsite'


import InfoCard from '../components/cards/InfoCard.vue'



const services = computed(() => webSiteStore.services);

const webSiteStore = useWebSiteStore();


onMounted(

  async () => {
    await webSiteStore.loadSettings();
  }
)

</script>


