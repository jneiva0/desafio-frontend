import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ProtectedPage } from 'src/components/ProtectedPage'
import { RestaurantListContainer } from 'src/components/Restaurant/RestaurantListContainer'
import { SearchBar } from 'src/components/SearchBar'
import { Header } from './../../components/Header'

const RestaurantsPage: NextPage = () => {
  return (
    <ProtectedPage>
      <Head>
        <title>CookedIn - Restaurantes</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <Header />
        <Box px={[2, 4]} mt={4}>
          <SearchBar />
        </Box>
        <Box px={4} mt={8}>
          <RestaurantListContainer />
        </Box>
      </Box>
    </ProtectedPage>
  )
}

export default RestaurantsPage
