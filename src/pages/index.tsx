import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Desafio Grao Direto</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex flexDir='column' h='full' color='white' p={8} bg='red.500'>
        <HStack mt={6} justify='center' as={Heading} size='3xl' spacing={2}>
          <chakra.span>Cooked</chakra.span>
          <Icon as={BsLinkedin} />
        </HStack>
        <Box mt={24}>
          <Text textAlign='center' fontWeight='700' fontSize='2xl'>
            Encontre a comida ou prato certo para você.
          </Text>
        </Box>
        <Spacer />
        <Link href='/login'>
          <Button color='red.500'>Eu quero</Button>
        </Link>
      </Flex>
    </>
  )
}

export default Home
