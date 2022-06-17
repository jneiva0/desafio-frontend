import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html,body,#__next': {
        height: '100%',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'PT Sans', sans-serif`,
  },
})
