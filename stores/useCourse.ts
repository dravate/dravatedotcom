// stores/blogStore.ts
import { defineStore } from 'pinia'

import { fetchCourseBySlug, fetchCourseDetails } from '../services/courseService';

import type { CoursePost } from '../types/course'; 

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [] as CoursePost[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    publishedBlogs: (state) =>
      state.courses.filter((post) => post.status === 'published'),
  },

  actions: {
    async loadCourses() {
      this.loading = true
      this.error = null
      try {
        const data = await fetchCourseDetails()
       //  console.log(data); 
        
        this.courses = data
      } catch (error: any) {
        console.error('Error loading blogs:', error)
        this.error = error?.message || 'Failed to load blogs'
      } finally {
        this.loading = false
      }
    },

     async fetchCourseBySlug(slug: string) {
      try {
        return await fetchCourseBySlug(slug)
      } catch (e) {
        this.error = 'Blog not found'
      }
    },


  },
})
