<template>
  
  <component :is="'h' + (block.level || 2)" class="font-bold my-4">
    {{ block.text }}
  </component>
</template>

<script setup lang="ts">
defineProps<{ block: { text: string; level?: number } }>()
</script>

