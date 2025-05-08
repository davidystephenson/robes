import { ReactNode, forwardRef } from 'react'
import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import useDisabled from './useDisabled'

const InputRobe = forwardRef<
HTMLInputElement,
InputProps & {
  controlProps?: FormControlProps
  errorMessage?: string
  label?: string
  rightElement?: ReactNode
}
>((props, ref) => {
  const disabled = useDisabled(props)
  const { type, errorMessage, label, rightElement, ...restProps } = props
  const dateField = type === 'date'
  const inputType = disabled && dateField ? 'text' : type
  const invalid = errorMessage != null
  const errorView = invalid && (
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  )
  const rightView = rightElement != null && (
    <InputRightElement w='fit-content'>{rightElement}</InputRightElement>
  )
  const labelView = label != null && <FormLabel>{label}</FormLabel>
  return (
    <FormControl isInvalid={invalid} {...props.controlProps}>
      {labelView}
      <InputGroup>
        <Input
          variant='flushed'
          isDisabled={disabled}
          {...restProps}
          size='sm'
          type={inputType}
          ref={ref}
        />
        {rightView}
      </InputGroup>
      {errorView}
    </FormControl>
  )
})
export default InputRobe
