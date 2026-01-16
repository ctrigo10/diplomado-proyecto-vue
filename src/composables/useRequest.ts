import type { AxiosError } from 'axios'
import { ref } from 'vue'

interface ApiErrorReponse {
  message?: string
}
export function useRequest() {
  const loading = ref(false)
  const error = ref<null | string>(null)

  const run = async <T>(request: () => Promise<T>): Promise<T> => {
    loading.value = true
    error.value = null

    try {
      return await request()
    } catch (err: unknown) {
      const axiosError = err as AxiosError<ApiErrorReponse>
      error.value = axiosError?.response?.data.message ?? axiosError?.message ?? 'Error inesperado'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    run,
  }
}
