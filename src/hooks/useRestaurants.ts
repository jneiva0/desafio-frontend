//create a hook using swr to fetch data from the API
import { apiGetRestaurants } from 'src/lib/api'
import useSWR from 'swr'

export const useRestaurants = () => {
  const { data, error } = useSWR('/restaurants', apiGetRestaurants)

  const isLoading = !data && !error

  return { restaurants: data || [], error, isLoading }
}
