<!-- components/carousels/SimpleCarousel.vue -->
<template>
  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    navigation
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    loop
    class="w-full"
  >
    <SwiperSlide
      v-for="(item, index) in items"
      :key="index"
     class="px-4 sm:px-6 md:px-8 dark:bg-gray-800 p-4 rounded"

    >

    
      <div class="flex flex-col sm:flex-row items-center gap-3">
  
   <div class="shrink-0">
    <font-awesome-icon v-if="item.icon" :icon="['fa', item.icon]" class="text-xl text-blue-600" />
    <img v-if="item.pic" :src="item.pic" class="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full shadow-md" />
  </div>
   <!-- Text -->
  <div class="text-center sm:text-left">
    <span class="border-b-2 border-dotted pb-2 text-base font-semibold block">{{ item.title || item.name }}</span>
    <p v-html="item.description"class="text-xs px-4 text-left sm:px-0 text-gray-600 dark:text-gray-300 mt-1"></p>
  </div>

</div>

    
    </SwiperSlide>
  </Swiper>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

defineProps<{
  items: any[]
}>()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
</script>
