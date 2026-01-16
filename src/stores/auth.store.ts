import type { Login, User } from '@/interfaces/auth.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN = 'token'
const USER = 'user'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(TOKEN))
  const user = ref<User | null>(JSON.parse(localStorage.getItem(USER) || 'null'))

  const login = (payload: Login) => {
    token.value = payload.token
    user.value = payload.user

    localStorage.setItem(TOKEN, payload.token)
    localStorage.setItem(USER, JSON.stringify(payload.user))
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.clear()
  }

  const isAuthenticated = computed(() => !!token.value)

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
  }
})
