import {
  Button,
  ButtonProps,
  chakra,
  forwardRef,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { Form, useField, useFormikContext } from 'formik'
import { ForwardedRef } from 'react'
import { BaseProps, FormControl } from 'src/components/Form/FormControl'

// a funcao chakra recebe um qualquer componente e adiciona as opcoes de estilo e tema do Chakra-ui nesse componente
// para mais info: https://chakra-ui.com/docs/styled-system/features/chakra-factory
export const ChakraForm = chakra(Form)

export type InputControlProps = BaseProps & InputProps

// encaminhamento de Refs necessario aqui pois FunctionComponents não podem
// receber refs, e o formik necessita acesso a ref para controlar o elemento no
// contexto do DOM para coisas como focus,
export const InputControl = forwardRef(
  (props: InputControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label, ...rest } = props
    const [field] = useField(name)

    return (
      <FormControl name={name} label={label} {...rest}>
        <Input {...field} id={name} {...rest} ref={ref} />
      </FormControl>
    )
  },
)

export const SubmitButton = (props: ButtonProps) => {
  const { isSubmitting, dirty, isValid } = useFormikContext()

  return (
    <Button
      type='submit'
      isDisabled={!dirty || !isValid}
      isLoading={isSubmitting}
      {...props}
    >
      {props.children}
    </Button>
  )
}
