import { Button, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { TextLogo } from 'src/components/TextLogo'
export const Header = () => {
  return (
    <HStack py={4} px={6} bg='red.500'>
      <Link href='/restaurantes'>
        <Button variant='unstyled'>
          <TextLogo size='xl' />
        </Button>
      </Link>
    </HStack>
  )
}
