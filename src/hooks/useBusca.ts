import { apiBuscar } from 'src/lib/api'
import useSWR from 'swr'

export const useBusca = (searchInput: string) => {
  const { data, error } = useSWR(
    searchInput ? ['busca', searchInput] : null,
    (url, searchInput) => apiBuscar({ searchInput }),
  )
  const isLoading = !data && !error
  const resultado = data?.data
  return { resultado, error, isLoading }
}
