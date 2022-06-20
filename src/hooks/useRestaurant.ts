import useSWR from 'swr'

export const useRestaurant = (id: number) => {
  const { data, error } = useSWR(
    id ? ['restaurant', id] : null,
    (url, id) => {},
  )
  const isLoading = !data && !error
  return { restaurant: data, error, isLoading }
}
