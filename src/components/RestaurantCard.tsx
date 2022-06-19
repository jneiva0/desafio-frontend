//React component to display a restaurant card with name, image and description using chakra-ui
// Language: typescriptreact

import {
  Box,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Restaurant } from 'src/lib/api'

type Props = {
  restaurant: Restaurant
}

export const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <LinkBox>
      <Box
        w='full'
        maxW='sm'
        bg='red.500'
        color='white'
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        cursor='pointer'
        transition='ease '
        _hover={{
          bg: 'blue.500',
          shadow: '3xl',
          transform: 'scale(1.05)',
        }}
      >
        <Image
          w='full'
          h={32}
          fit='cover'
          objectPosition='center'
          src={restaurant.imageSrc}
          alt={restaurant.name}
          fallbackSrc='https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png'
        />
        <HStack justify='center' color='white' px={6} py={3}>
          <Stack spacing={1}>
            <Link href={`/restaurantes/${restaurant.id}`}>
              <LinkOverlay>
                <Heading
                  textAlign='center'
                  noOfLines={1}
                  size={{ base: 'lg', sm: 'md' }}
                  mt={0}
                >
                  {restaurant.name}
                </Heading>
              </LinkOverlay>
            </Link>
          </Stack>
        </HStack>
      </Box>
    </LinkBox>
  )
}
