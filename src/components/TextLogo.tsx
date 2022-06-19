import { chakra, Heading, HeadingProps, HStack, Icon } from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

export const TextLogo = (props: HeadingProps) => (
  <HStack
    justify='center'
    color='white'
    as={Heading}
    size='3xl'
    spacing={2}
    {...props}
  >
    <chakra.span>Cooked</chakra.span>
    <Icon as={BsLinkedin} />
  </HStack>
)
