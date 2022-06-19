import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { BiErrorCircle } from 'react-icons/bi'

type Props = {
  error: AxiosError
}

export const ErrorResult = ({ error }: Props) => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <Box display='inline-block'>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign='center'
        >
          <Icon color='white' boxSize='20px' as={BiErrorCircle} />
        </Flex>
      </Box>
      <Heading as='h2' size='xl' mt={6} mb={2}>
        {error.name}
      </Heading>
      <Text color={'gray.500'}>{error.message}</Text>
    </Box>
  )
}
