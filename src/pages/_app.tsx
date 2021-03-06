import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/pt-sans'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { theme } from 'src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Toaster position='bottom-center' />
    </ChakraProvider>
  )
}

export default MyApp
