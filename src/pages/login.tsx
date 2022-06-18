import { Box, Button, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { InputControl, SubmitButton } from 'src/components/Form/InputControl'
import { TextLogo } from 'src/components/TextLogo'
import { object, string } from 'yup'

const loginValidationSchema = object({
  Email: string()
    .email('Digite um email válido')
    .required('É necesário digitar um email'),
  Password: string().required('É necessário digitar a senha.'),
})

const LoginPage: NextPage = () => {
  const handleSubmit = async (values: { Email: string; Password: string }) => {
    console.log(values)

    return true
  }

  return (
    <>
      <Head>
        <title>CookedIn</title>
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
              <Formik
                initialValues={{ Email: '', Password: '' }}
                onSubmit={handleSubmit}
                validationSchema={loginValidationSchema}
              >
                <Stack as={Form} spacing={5}>
                  <InputControl
                    autoComplete='email'
                    name='Email'
                    placeholder='Email'
                  />
                  <InputControl
                    type='password'
                    name='Password'
                    placeholder='Senha'
                    autoComplete='current-password'
                  />
                  <SubmitButton colorScheme='red'>Entrar</SubmitButton>
                  <Flex pt={2} justify='flex-end'>
                    <Link href='/registrar'>
                      <Button colorScheme='blue' variant='ghost'>
                        Não tem uma conta?{' '}
                      </Button>
                    </Link>
                  </Flex>
                </Stack>
              </Formik>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default LoginPage
