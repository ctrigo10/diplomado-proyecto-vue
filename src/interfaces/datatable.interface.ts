export interface ParamsDataTable {
  page: number
  limit: number
  orderBy?: string
  orderDir?: string
  search?: string
  done?: boolean | null
}

export interface DataTableServerOptions {
  page: number
  itemsPerPage: number
  search: string
  sortby: SortBy
}

interface SortBy {
  key?: string
  order?: string
}
