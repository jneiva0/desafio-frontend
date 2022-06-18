import { BoxProps, chakra, Heading, HStack, Icon } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

export const TextLogo = (props: BoxProps) => (
  <HStack
    mt={6}
    justify='center'
    as={Heading}
    size='3xl'
    spacing={2}
    {...props}
  >
    <chakra.span>Cooked</chakra.span>
    <Icon as={BsLinkedin} />
  </HStack>
)
