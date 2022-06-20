import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { toast } from 'react-hot-toast'
import { Loading } from 'src/components/Loading'
import { Login, LoginArgs } from 'src/components/Login'
import { TextLogo } from 'src/components/TextLogo'
import { useUsuario } from 'src/hooks/useUsuario'
import { apiLogin } from 'src/lib/api'

const LoginPage: NextPage = () => {
  const { user, mutate, loading } = useUsuario({
    redirectIfFound: true,
    redirectTo: '/restaurantes',
  })

  const handleLogin = async (values: LoginArgs) => {
    try {
      const res = await apiLogin(values)
      console.log(res)
      const { accessToken } = res.data
      localStorage.setItem('accessToken', accessToken)
      await mutate()
    } catch (e) {
      console.log(e)
      if (e instanceof apiLogin.Error) {
        const error = e.getActualType()
        if (error.status === 400) {
          toast.error(error.data.validationErrors)
        } else if (error.status === 500) {
          toast.error(error.data.errorMessage)
        } else {
          toast.error('Ocorreu um erro ao tentar fazer login.')
        }
      }
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>CookedIn - Entrar</title>
        <meta name='description' content='Desafio Grao Direto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box h='full' bg='red.500'>
        <Flex justify='center'>
          <Stack spacing={12} color='white' w='full' maxW='lg' py={12} px={6}>
            <VStack spacing={3}>
              <TextLogo />
              <Text fontSize='lg'>
                Entre para ver seus restaurantes preferidos
              </Text>
            </VStack>
            <Box
              rounded='lg'
              bg='chakra-body-bg'
              color='initial'
              shadow='lg'
              p={8}
            >
              <Login handleLogin={handleLogin} />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default LoginPage
