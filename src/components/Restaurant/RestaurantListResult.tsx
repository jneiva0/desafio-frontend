import { Alert, AlertIcon, SimpleGrid } from '@chakra-ui/react'

import { RestaurantCard } from 'src/components/Restaurant/RestaurantCard'
import { components } from 'src/lib/generatedApiTypes'

type RestaurantResponse = components['schemas']['RestaurantResponse']

type Props = {
  restaurants?: RestaurantResponse[]
}

export const RestaurantListResult = ({ restaurants }: Props) => {
  if (!restaurants)
    return (
      <Alert status='error'>
        <AlertIcon />
        Nenhum Restaurante Encontrado
      </Alert>
    )

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={12}>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </SimpleGrid>
  )
}
