import useSWR from 'swr'

export const useRestaurants = () => {
  const { data, error } = useSWR('restaurants', () => {})

  const isLoading = !data && !error

  return { restaurants: data || [], error, isLoading }
}
