import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Buscar } from 'src/components/Buscar'
import { Header } from 'src/components/Header'
import { ProtectedPage } from 'src/components/ProtectedPage'

const BuscaPage: NextPage = () => {
  const { query } = useRouter()

  return (
    <ProtectedPage>
      <Head>
        <title>Buscando por {query.q} </title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Header />
        <Box mt={5} px={6}>
          <Buscar />
        </Box>
      </Box>
    </ProtectedPage>
  )
}

export default BuscaPage
