import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Desafio Grao Direto</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Heading>Desafio Grao Direto</Heading>
      </main>
    </div>
  )
}

export default Home
