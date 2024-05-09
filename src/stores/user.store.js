import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: ''
  }),
  getters: {
    getUsername: (state) => state.username
  },
  actions: {
    setUsername (name) {
      this.username = name
    }
  },
  persist: true
})
