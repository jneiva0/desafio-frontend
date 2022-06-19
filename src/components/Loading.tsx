import { Center, Spinner } from '@chakra-ui/react'
export function Loading({}) {
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
}
