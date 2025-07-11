<template>
  <div
    class="p-4 sm:p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4"
  >
    <!-- Picture -->
    <img
      :src="testimonial.pic"
      alt="Testimonial picture"
      class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border"
    />
    

    <!-- Content -->
    <div class="flex flex-col items-center sm:items-start">
      <p class="text-sm text-gray-700 dark:text-gray-300 italic mb-2 leading-relaxed">
        “{{ testimonial.description }}”
      </p>
      <div class="font-semibold text-base text-gray-900 dark:text-white">
        {{ testimonial.name }}
      </div>
      <div class="text-xs text-gray-500 dark:text-gray-400">
        {{ testimonial.position }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ testimonial: any }>()
</script>
