import { SimpleGrid } from '@chakra-ui/react'
import { ErrorResult } from 'src/components/ErrorResult'
import { Loading } from 'src/components/Loading'
import { RestaurantCard } from 'src/components/RestaurantCard'
import { useRestaurants } from 'src/hooks/useRestaurants'

export const RestaurantList = () => {
  const { restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <Loading />
  if (error) return <ErrorResult error={error} />

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={12}>
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </SimpleGrid>
  )
}
