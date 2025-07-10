<template> 

    
  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


    <div class="core-values"> 
      <div v-html="vision"></div>

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

const vision = computed(()=>webStore.vision)



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
