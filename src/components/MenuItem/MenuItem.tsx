import {
  Alert,
  AlertIcon,
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { components } from 'src/lib/generatedApiTypes'

type MenuItem = components['schemas']['MenuItemResponse']

type Props = {
  menuItens?: MenuItem[]
}
export const MenuItemListResult = ({ menuItens }: Props) => {
  if (!menuItens)
    return (
      <Alert status='error'>
        <AlertIcon />
        Nenhum Item Encontrado
      </Alert>
    )

  return (
    <SimpleGrid mt={2} p={3} columns={[2, 3, 3, 4]} spacing={4}>
      {menuItens.map((item) => (
        <MenuItemCard key={item.id} menuItem={item} />
      ))}
    </SimpleGrid>
  )
}

export const MenuItemCard = ({ menuItem }: { menuItem: MenuItem }) => {
  return (
    <Box maxW='xs' mx='auto' bg='white' shadow='lg' rounded='lg'>
      <Box px={4} py={2}>
        <chakra.h1
          color='gray.800'
          fontWeight='bold'
          fontSize='xl'
          textTransform='uppercase'
        >
          {menuItem.name}
        </chakra.h1>
        <Text mt={1} fontSize='sm' color='gray.600'>
          {menuItem.description}
        </Text>
      </Box>

      <Image
        h={48}
        w='full'
        fit='cover'
        mt={2}
        src={menuItem.imageSrc}
        alt={menuItem.name}
      />

      <Flex
        alignItems='center'
        justifyContent='space-between'
        px={4}
        py={2}
        bg='gray.900'
        roundedBottom='lg'
      >
        <chakra.h1 color='white' fontWeight='bold' fontSize='lg'>
          ${menuItem.price}
        </chakra.h1>
        <chakra.button
          px={2}
          py={1}
          bg='white'
          fontSize='xs'
          color='gray.900'
          fontWeight='bold'
          rounded='lg'
          textTransform='uppercase'
          _hover={{
            bg: 'gray.200',
          }}
          _focus={{
            bg: 'gray.400',
          }}
        >
          Comprar
        </chakra.button>
      </Flex>
    </Box>
  )
}
