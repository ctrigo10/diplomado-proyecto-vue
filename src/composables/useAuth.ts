import type { Credentials, Login, ResponseLogin } from '@/interfaces/auth.interface'
import { useRequest } from './useRequest'
import { AutheService } from '@/services/auth.service'
import { useAlert } from './useAlert'
import router from '@/router'
import { useAuthStore } from '@/stores/auth.store'
import { computed } from 'vue'

export function useAuth() {
  const { loading, error, run } = useRequest()
  const authStore = useAuthStore()
  const { open } = useAlert()

  const isAuthentucated = computed(() => authStore.isAuthenticated)
  const user = computed(() => authStore.user)

  const login = async (payload: Credentials) => {
    try {
      const response: ResponseLogin = await run(() => AutheService.login(payload))

      const login: Login = {
        token: response.token,
        user: {
          username: payload.username,
        },
      }

      // Guardar en store
      authStore.login(login)
      router.push({ name: 'profile' })
      open('Bienvenido ' + payload.username, 'success')
    } catch {
      open(error.value ?? 'Error al iniciar sesión', 'error')
    }
  }

  const logout = () => {
    authStore.logout()
    router.push({ name: 'login' })
  }

  return {
    loading,
    error,
    isAuthentucated,
    user,
    login,
    logout
  }
}
