import { Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { TextLogo } from 'src/components/TextLogo'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CookedIn</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box h='full' bg='red.500'>
        <Container maxW='lg' h='full'>
          <Flex flexDir='column' align='center' h='full' py={8} color='white'>
            <TextLogo />
            <Box mt={24}>
              <Text textAlign='center' fontWeight='700' fontSize='2xl'>
                Encontre a comida ou prato certo para você.
              </Text>
            </Box>
            <Spacer />

            <Box w='full' mx='auto' maxW='xs'>
              <Link href='/login'>
                <Button w='full' color='red.500'>
                  Eu quero
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Home
