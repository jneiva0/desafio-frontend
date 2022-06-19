//nextjs page to show the restaurant details using the id
// Language: typescriptreact

import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BsChevronLeft } from 'react-icons/bs'
import { ErrorResult } from 'src/components/ErrorResult'
import { Header } from 'src/components/Header'
import { Loading } from 'src/components/Loading'
import { useRestaurant } from 'src/hooks/useRestaurant'

const RestaurantDetailsPage = () => {
  const {
    query: { id },
    back,
  } = useRouter()

  const parsedId = parseInt(String(id), 10)

  const { restaurant, error, isLoading } = useRestaurant(parsedId)

  if (isLoading) return <Loading />
  if (error) return <ErrorResult error={error} />

  return (
    <>
      <Head>
        <title>CookedIn - {restaurant?.name}</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Header />

        <Box px={6}>
          <HStack w='full' shadow='md' pb={4} mt={6} spacing={4}>
            <IconButton
              onClick={back}
              aria-label='voltar'
              size='lg'
              icon={<BsChevronLeft />}
            />
            <Image
              w='32'
              fit='cover'
              rounded='md'
              alt={restaurant?.name}
              fallbackSrc='https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png'
              src={restaurant?.imageSrc}
            />
            <Stack w='full'>
              <Heading as='h1' fontWeight='400' size='xl'>
                {restaurant?.name}
              </Heading>
              <HStack w='full' justify='space-between'>
                <Text pl={1} color='gray.500' fontWeight='300'>
                  {restaurant?.address}
                </Text>
                <Text>{restaurant?.phone}</Text>
              </HStack>
            </Stack>
          </HStack>
          <Box bg='gray.200' mt={2}>
            <Heading size='lg' as='h3'>
              Cardapio
            </Heading>
            <SimpleGrid mt={2} p={3} columns={[2, 3, 3, 4]} spacing={4}>
              {restaurant?.menu.map((item) => (
                <Box key={item.id} shadow='lg' bg='white' maxW='40'>
                  <Text>{item.name}</Text>
                  <Text>R${item.price}</Text>
                  <Text>{item.description}</Text>
                  <Image alt={item.name} src={item.imageSrc} w='32' />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default RestaurantDetailsPage
