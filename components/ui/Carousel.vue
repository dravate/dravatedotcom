<!-- components/ui/Carousel.vue -->
<template>
  <div class="flex gap-2 overflow-x-auto no-scrollbar">
    <div v-for="(item, i) in items" :key="i" class="shrink-0 min-w-[100px] px-2 py-1 bg-white dark:bg-[#111] rounded border text-sm">
      {{ item.name || item.title || `Item ${i + 1}` }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
