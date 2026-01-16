import type { ParamsDataTable } from '@/interfaces/datatable.interface'
import { ref, watch } from 'vue'
import { useRequest } from './useRequest'
import { useAlert } from './useAlert'

export function useDataTable<T>(
  service: (options: ParamsDataTable) => Promise<{ data: T[]; total: number }>,
) {
  const items = ref<T[]>([])
  const totalItems = ref(0)
  const loading = ref(false)
  const search = ref<string | undefined>(undefined)
  const itemsPerPage = ref(5)

  // Guardar una copia
  const lastParams = ref<ParamsDataTable>({ page: 1, limit: 5 })

  const { run, error } = useRequest()
  const { open } = useAlert()

  const loadItems = async (options: ParamsDataTable) => {
    lastParams.value = { ...options }
    loading.value = true
    try {
      const response = await run(() => service(options))
      if (response) {
        items.value = response.data
        totalItems.value = response.total
      }
      if (error.value) open(error.value, 'error')
    } finally {
      loading.value = false
    }
  }

  const refresh = () => loadItems(lastParams.value)

  let timeoutId: ReturnType<typeof setTimeout>
  // LOGICA DEBOUNCE: escucha cambios en el ref search
  watch(search, () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      // Al buscar, forzamos a vuetify a volver a la pagina 1
      loadItems({
        ...lastParams.value,
        page: 1,
        search: search.value,
      })
    }, 500)
  })

  return { items, totalItems, loading, search, itemsPerPage, loadItems, refresh }
}
