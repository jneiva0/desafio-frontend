import { Box, Button, HStack, IconButton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { TextLogo } from 'src/components/TextLogo'
import { useUsuario } from 'src/hooks/useUsuario'
export const Header = () => {
  return (
    <HStack py={4} px={6} bg='red.500' justify='space-between'>
      <Link href='/restaurantes'>
        <Button variant='unstyled'>
          <TextLogo size='xl' />
        </Button>
      </Link>
      <Box>
        <HeaderRightSection />
      </Box>
    </HStack>
  )
}

const HeaderRightSection = () => {
  const { logout, user } = useUsuario()

  return (
    <HStack spacing={4}>
      <Text fontSize='sm' color='white'>
        {user?.email}
      </Text>
      <IconButton aria-label='Sair' onClick={logout} icon={<FiLogOut />} />
    </HStack>
  )
}
