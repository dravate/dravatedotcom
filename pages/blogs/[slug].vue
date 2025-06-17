<template>
  <div class="max-w-3xl mx-auto py-10 px-4">
    
    <!-- Cover Image -->
    <img
      v-if="blog?.cover_image_url"
      :src="blog.cover_image_url"
      alt="Cover Image"
      class="w-full h-64 object-cover rounded mb-6 shadow"
    />

    <!-- Title -->
    <h1 class="text-3xl font-bold mb-4">{{ blog?.title }}</h1>

    <!-- Excerpt -->
    <div v-html="blog?.excerpt" class="text-gray-500 mb-4" />

  

    <!-- Content -->
    <div v-if="blog?.content" class="prose dark:prose-invert">
      <component
        v-for="block in blog.content.blocks"
        :key="block.id"
        :is="getBlockComponent(block.type)"
        :block="block.data"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { useBlogStore } from '../../stores/useBlog'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import HeaderBlock from '../../components/blog-blocks/HeaderBlock.vue'
import ParagraphBlock from '../../components/blog-blocks/ParagraphBlock.vue'
import QuoteBlock from '../../components/blog-blocks/QuoteBlock.vue'
import CodeBlock from '../../components/blog-blocks/CodeBlock.vue'
import ListBlock from '../../components/blog-blocks/ListBlock.vue'


const blogStore = useBlogStore()
const route = useRoute()
const blog = ref()
const getBlockComponent = (type) => {
  switch (type) {
    case 'header':
      return HeaderBlock
    case 'paragraph':
      return ParagraphBlock
    case 'quote':
      return QuoteBlock
    case 'code':
      return CodeBlock
    case 'list':
      return ListBlock
    default:
      return ParagraphBlock // Fallback
  }
}


onMounted(async () => {
    console.log(route.params.slug as string); 
    console.log('inside mounted section')
  blog.value = await blogStore.fetchBlogBySlug(route.params.slug as string)
})
</script>

