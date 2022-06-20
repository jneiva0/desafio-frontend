import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

export const SearchBar = () => {
  return (
    <Box mx='auto' maxW='md'>
      <InputGroup>
        <InputLeftElement>
          <Icon as={BiSearch} />
        </InputLeftElement>
        <Input placeholder='Buscar restaurante ou Prato' />
      </InputGroup>
    </Box>
  )
}
