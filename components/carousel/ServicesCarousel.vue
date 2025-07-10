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
      class="px-24 dark:bg-gray-800  p-4 rounded"
    >

    
      <div class="flex items-center gap-3 mb-2 font-bold">
  <font-awesome-icon v-if="item.icon" :icon="['fa', item.icon]" class="text-xl text-blue-600" />
  <img v-if="item.pic" :src="item.pic" class="h-16 rounded-xl shadow-xl mr-10">
  <span class="border-b-2 border-dotted pb-2">{{ item.title || item.name }}</span>
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
