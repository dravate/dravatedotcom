<template>
  <button
    @click="toggleTheme"
    class="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <span class="hidden sm:block">{{ isDark ? 'Dark' : 'Light' }} Mode</span>
    <span>{{ isDark ? '🌙' : '🌞' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.add('light')
  }
})
</script>
