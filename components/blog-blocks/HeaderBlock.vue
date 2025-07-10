<template>
  
  

  
  <component :is="'h' + (block.level || 2)" class="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 pb-2 relative">
    <div class="header"> 
 <strong class="inline-block relative hover:before:scale-x-100 hover:after:scale-x-100 transition-all before:content-[''] after:content-[''] before:absolute after:absolute before:bottom-0 after:bottom-0 before:h-[3px] after:h-[3px] before:w-1/2 after:w-1/2 before:bg-red-500 after:bg-red-500 before:origin-left after:origin-right before:scale-x-0 after:scale-x-0 dark:text-gray-100"> {{  block.text }} </strong>
    </div>

    
  </component>
</template>

<script setup lang="ts">
defineProps<{ block: { text: string; level?: number } }>()
</script>

<style lang="postcss">


 .header {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  
  color: #1f2937; /* gray-800 */
  text-align: center;
  display: inline-block;
  padding-bottom: 1.5rem;
}

/* Add span wrapper for effect */
.header strong {
  position: relative;
  display: inline-block;
}

 .header strong::before,
 .header strong::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 42%;
  height: 3px;
  background-color: red;
  transition: transform 0.4s ease;
  transform: scaleX(0);
  transform-origin: center;
}
 .header strong::before {
  left: 0;
  transform-origin: left;
}

.header strong::after {
  right: 0;
  transform-origin: right;
}

.header strong:hover::before,
.header strong:hover::after {
  transform: scaleX(1);
}

</style>
