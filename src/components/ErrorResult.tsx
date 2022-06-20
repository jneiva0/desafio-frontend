import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Heading,
} from '@chakra-ui/react'
import { ApiError } from 'openapi-typescript-fetch'

type Props = {
  error: ApiError | any
}

export const ErrorResult = ({ error }: Props) => {
  return (
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
  )
}
