import {
  Box,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

export const SearchBar = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const isValid = useMemo(
    () => query.length >= 3 || query.length === 0,
    [query],
  )

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        router.push({ pathname: '/busca', query: { q: query } })
      }
    },
    [query, router],
  )

  return (
    <Box mx='auto' maxW='md'>
      <FormControl isInvalid={!isValid}>
        <InputGroup shadow='lg'>
          <InputLeftElement>
            <Icon boxSize='24px' color='teal.500' as={BiSearch} />
          </InputLeftElement>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Buscar restaurante ou Prato'
            onKeyDown={onKeyDown}
          />
        </InputGroup>
        {!isValid && (
          <FormHelperText>Digite ao menos 3 caracteres</FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
