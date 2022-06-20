import { apiGetRestaurant } from 'src/lib/api'
import useSWR from 'swr'

export const useRestaurant = (id: string) => {
  const { data, error } = useSWR(id ? ['restaurant', id] : null, (url, id) =>
    apiGetRestaurant({ id }),
  )
  const isLoading = !data && !error
  const restaurant = data?.data
  return { restaurant, error, isLoading }
}
