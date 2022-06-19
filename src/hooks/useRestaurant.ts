import { apiGetRestaurant } from 'src/lib/api'
import useSWR from 'swr'

export const useRestaurant = (id: number) => {
  const { data, error } = useSWR(id ? ['restaurant', id] : null, (url, id) =>
    apiGetRestaurant(id),
  )
  const isLoading = !data && !error
  return { restaurant: data, error, isLoading }
}
