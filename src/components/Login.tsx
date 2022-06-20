import { Button, Flex, Stack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { FetchArgType, FetchReturnType } from 'openapi-typescript-fetch'
import { InputControl, SubmitButton } from 'src/components/Form/InputControl'
import { apiLogin } from 'src/lib/api'
import { object, string } from 'yup'

export type LoginArgs = FetchArgType<typeof apiLogin>
export type LoginResponse = FetchReturnType<typeof apiLogin>

const loginValidationSchema = object({
  email: string()
    .email('Digite um Email válido')
    .required('É necesário digitar um Email'),
  password: string().required('É necessário digitar a senha.'),
})
type Props = {
  handleLogin: (values: LoginArgs) => Promise<any>
}

export const Login = ({ handleLogin }: Props) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={loginValidationSchema}
    >
      <Stack as={Form} spacing={5}>
        <InputControl name='email' autoComplete='email' placeholder='Email' />
        <InputControl
          name='password'
          placeholder='Senha'
          autoComplete='current-password'
          type='password'
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
  )
}
