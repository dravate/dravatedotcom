// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    email: '',
    token: '',
  }),
  actions: {
    login(email: string, token: string) {
      this.email = email
      this.token = token
      this.isAuthenticated = true
    },
    logout() {
      this.email = ''
      this.token = ''
      this.isAuthenticated = false
    }
  },
})
