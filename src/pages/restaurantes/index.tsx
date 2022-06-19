import { Box, SimpleGrid } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ErrorResult } from 'src/components/ErrorResult'
import { RestaurantCard } from 'src/components/RestaurantCard'
import { useRestaurants } from 'src/hooks/useRestaurants'
import { Header } from './../../components/Header'
import { Loading } from './../../components/Loading'

const RestaurantsPage: NextPage = () => {
  const { restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <Loading />
  if (error) return <ErrorResult error={error} />

  return (
    <>
      <Head>
        <title>CookedIn - Restaurantes</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <Header />
        <Box px={4} mt={8}>
          <SimpleGrid columns={[1, 2, 3]} spacing={12}>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default RestaurantsPage
