<template>
  <div class="max-w-[980px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4">
    <TestimonialCard
      v-for="(item, index) in testimonials"
      :key="index"
      :testimonial="item"
    />
  </div>
</template>

<script setup lang="ts">
import { useWebSiteStore } from '../stores/useWebsite'
import { computed, onMounted } from 'vue'
import TestimonialCard from '../../components/cards/TestimonialCard.vue'


const store = useWebSiteStore()
const testimonials = computed(() => store.testimonials)

onMounted(async () => {
  await store.loadSettings()
})
</script>
