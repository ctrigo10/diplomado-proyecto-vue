import { ENV } from '@/config/env'
import axios from 'axios'

const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: ENV.API_URL,
})

// Interceptor para añadir el token si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Interceptor de errores
// TODO: agregar interteceptor de erroes al tener login

export default api
