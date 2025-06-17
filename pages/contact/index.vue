<template>
  <div
    class="max-w-[980px] w-full grid grid-cols-1 gap-6 mt-6 px-4 py-10 pb-10 rounded-xl shadow-xl border border-green-300 animate-fade-in"
  >
    <h2 class="text-2xl font-bold text-center text-green-800">Contact Us</h2>

    <form @submit.prevent="submitForm" class="grid gap-4">
      <!-- Name -->
      <div class="flex flex-col">
        <label for="name" class="text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          class="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
          placeholder="Your full name"
        />
      </div>

      <!-- Email -->
      <div class="flex flex-col">
        <label for="email" class="text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          class="input"
          placeholder="you@example.com"
        />
      </div>

      <!-- Phone -->
      <div class="flex flex-col">
        <label for="phone" class="text-sm font-medium text-gray-700">Phone</label>
        <input
          v-model="form.phone"
          type="tel"
          id="phone"
          class="input"
          placeholder="+91 98765 43210"
        />
      </div>

      <!-- Message -->
      <div class="flex flex-col">
        <label for="message" class="text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          required
          class="input"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <!-- Submit -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const submitForm = () => {
  console.log('Submitting:', form.value)
  // Here you could call an API endpoint or use useFetch()
  alert('Thank you! We will get back to you soon.')
}
</script>

<style scoped>

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
</style>
