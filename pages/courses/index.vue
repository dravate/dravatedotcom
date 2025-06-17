<script setup lang="ts">
import { onMounted } from 'vue'
import CourseCard from '../../components/cards/CourseCard.vue';
import { useCourseStore} from '../../stores/useCourse';


const courseStore = useCourseStore()

onMounted(() => {
  courseStore.loadCourses()
})
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
    <CourseCard v-for="course in courseStore.publishedBlogs" :key="course.id" :course="course" />
  </div>
</template>

