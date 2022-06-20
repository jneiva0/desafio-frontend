import { apiGetRestaurants } from 'src/lib/api'
import useSWR from 'swr'

export const useRestaurants = () => {
  const { data, error } = useSWR('/restaurants', () => apiGetRestaurants({}))

  const isLoading = !data && !error
  const restaurants = data?.data

  return { restaurants, error, isLoading }
}
