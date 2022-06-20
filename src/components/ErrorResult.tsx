import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ApiError } from 'openapi-typescript-fetch'
import { BiRefresh } from 'react-icons/bi'

type Props = {
  error: ApiError | any
}

export const ErrorResult = ({ error }: Props) => {
  const router = useRouter()
  return (
    <Box>
      <Alert
        py={24}
        status='error'
        variant='subtle'
        bg='Background'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <AlertIcon boxSize={12} mr={0} />
        <AlertTitle mt={6} as={Heading} size='xl'>
          {error.statusText}
        </AlertTitle>
        <AlertDescription mt={4} color='gray.500' maxWidth='sm'>
          {error.message}
        </AlertDescription>
      </Alert>
      <Center>
        <Button
          onClick={router.reload}
          colorScheme='red'
          leftIcon={<BiRefresh />}
        >
          Recarregar pagina
        </Button>
      </Center>
    </Box>
  )
}
