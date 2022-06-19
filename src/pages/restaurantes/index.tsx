// create a nextjs page to show all restaurants
import { Box, Center, HStack, SimpleGrid, Spinner } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ErrorResult } from 'src/components/ErrorResult'
import { RestaurantCard } from 'src/components/RestaurantCard'
import { TextLogo } from 'src/components/TextLogo'
import { useRestaurants } from 'src/hooks/useRestaurants'

const RestaurantsPage: NextPage = () => {
  const { restaurants, isLoading, error } = useRestaurants()

  if (isLoading)
    return (
      <Center h='full'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='red.500'
          size='xl'
        />
      </Center>
    )
  if (error) return <ErrorResult error={error} />

  return (
    <>
      <Head>
        <title>CookedIn - Restaurantes</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <HStack py={4} px={6} bg='red.500'>
          <TextLogo size='xl' />
        </HStack>
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
