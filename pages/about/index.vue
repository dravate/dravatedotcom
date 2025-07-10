<template>
  
  


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 border-1 border-green-400 pb-10">
<div class="h-10 bg-amber-300"> </div>
<div class="px-4"> 

  
  <div v-if="about" class="prose dark:prose-invert ">
      <component
        v-for="block in about.blocks"
        :key="block.id"
        :is="getBlockComponent(block.type)"
        :block="block.data"
      />
      </div>
    </div>


    </div>


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


     <div class="core-values">
       <div v-html="mission" ></div>

     </div>
    
    </div>


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


    <div class="core-values"> 
      <div v-html="vision"></div>

    </div>
    
    </div>

  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


     <div class="core-values">
       <div v-html="core_values"></div>
     </div>
    
</div>



  

</template>

<script setup lang="ts">
import { computed } from 'vue'

import HeaderBlock from '../../components/blog-blocks/HeaderBlock.vue'
import ParagraphBlock from '../../components/blog-blocks/ParagraphBlock.vue'
import QuoteBlock from '../../components/blog-blocks/QuoteBlock.vue'
import CodeBlock from '../../components/blog-blocks/CodeBlock.vue'
import ListBlock from '../../components/blog-blocks/ListBlock.vue'

import { useWebSiteStore } from '../../stores/useWebsite';

const  webStore = useWebSiteStore(); 
const about = computed (()=>webStore.about);
const mission = computed(()=>webStore.mission)
const vision = computed(()=>webStore.vision)
const core_values = computed(()=>webStore.core_values)


const getBlockComponent = (type: string) => {
  return {
    header: HeaderBlock,
    paragraph: ParagraphBlock,
    quote: QuoteBlock,
    code: CodeBlock,
    list: ListBlock,
  }[type] || ParagraphBlock
}


</script>

<style lang="postcss">

@tailwind base;
@tailwind components;
@tailwind utilities;

.core-values h1 {
  @apply text-2xl font-bold text-center text-gray-800 dark:text-gray-100 pb-6;
}

.core-values h1 strong::before,
.core-values h1 strong::after {
  @apply bg-red-500;
}

.core-values p {
  @apply text-[1.1rem] text-gray-600 dark:text-gray-300 mb-4;
}

.core-values ol li {
  @apply text-[1.05rem] text-gray-900 dark:text-gray-200 leading-relaxed relative pl-7 mb-3;
}

.core-values ol li::before {
  @apply text-blue-600 dark:text-blue-400 font-bold absolute left-0 top-0;
  content: counter(item) ".";
  counter-increment: item;
}

</style>
