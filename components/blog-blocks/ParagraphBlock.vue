<template>
  <p class="my-2">{{ block.text }}</p>
</template>

<script setup lang="ts">
defineProps<{ block: { text: string } }>()
</script>

