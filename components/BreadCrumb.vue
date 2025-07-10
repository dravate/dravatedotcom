<template>
  <nav
    v-if="breadcrumb.length"
    aria-label="breadcrumb"
    class="text-sm py-4 px-6 text-gray-600 dark:text-gray-300"
  >
    <ol class="flex flex-wrap space-x-2">
      <li class="flex items-center">
        <NuxtLink to="/" class="hover:underline text-blue-600 dark:text-blue-400">Home</NuxtLink>
        <span v-if="breadcrumb.length" class="mx-1 text-gray-500 dark:text-gray-400">/</span>
      </li>
      <li
        v-for="(crumb, index) in breadcrumb"
        :key="index"
        class="flex items-center space-x-1"
      >
        <span v-if="index !== 0" class="text-gray-500 dark:text-gray-400">/</span>
        <NuxtLink
          v-if="index !== breadcrumb.length - 1"
          :to="crumb.path"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span
          v-else
          class="font-semibold text-gray-800 dark:text-white"
        >
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumb = computed(() => {
  const segments = route.path.split('/').filter(Boolean)

  // Don't show breadcrumb on home page
  if (segments.length === 0) {
    return []
  }

  let path = ''
  return segments.map((segment) => {
    path += `/${segment}`
    return {
      label: decodeURIComponent(segment.replace(/-/g, ' ')),
      path,
    }
  })
})
</script>
