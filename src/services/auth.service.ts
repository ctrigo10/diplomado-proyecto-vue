import api from '@/api/axios'
import type { Credentials } from '@/interfaces/auth.interface'

export const AutheService = {
  async register(payload: Credentials) {
    const { data } = await api.post('/users', payload)
    return data
  },

  async login(payload: Credentials) {
    const { data } = await api.post('/login', payload)
    return data
  },
}
