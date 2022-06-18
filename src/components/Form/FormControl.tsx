import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/react'
import { useField, useFormikContext } from 'formik'
import { FC } from 'react'

export interface BaseProps extends FormControlProps {
  name: string
  label?: string
  labelProps?: FormLabelProps
  helperText?: string
  helperTextProps?: HelpTextProps
  errorMessageProps?: FormErrorMessageProps
}

/* Esse componente usa hooks do formik para fazer uma integração dos componentes
de Formulário do Chakra-UI com o Formik.  Pode ser overkill ja que esse projeto
é apenas um desafio, mas em uma aplicação com muitos formulários isso melhora
consideravelmente a experiencia de construir formularios */

export const FormControl: FC<BaseProps> = (props: BaseProps) => {
  const {
    children,
    name,
    label,
    labelProps,
    helperText,
    helperTextProps,
    errorMessageProps,
    ...rest
  } = props
  const [, { error, touched }] = useField(name)
  const { isSubmitting } = useFormikContext()

  return (
    <ChakraFormControl
      isDisabled={isSubmitting}
      isInvalid={!!error && touched}
      {...rest}
    >
      {label && (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && (
        <FormErrorMessage {...errorMessageProps}>{error}</FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      )}
    </ChakraFormControl>
  )
}
