import { ErrorResult } from 'src/components/ErrorResult'
import { Loading } from 'src/components/Loading'
import { RestaurantListResult } from 'src/components/Restaurant/RestaurantListResult'
import { useRestaurants } from 'src/hooks/useRestaurants'

export const RestaurantListContainer = () => {
  const { restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <Loading />
  if (error) return <ErrorResult error={error} />

  return <RestaurantListResult restaurants={restaurants} />
}
