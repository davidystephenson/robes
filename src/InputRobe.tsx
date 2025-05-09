import { forwardRef } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import useDisabled from './useDisabled'
import { InputRobeProps } from './types'

const InputRobe = forwardRef<
HTMLInputElement,
InputRobeProps
>((props, ref) => {
  const disabled = useDisabled(props)
  const { type, error, label, rightElement: right, ...restProps } = props
  const dateField = type === 'date'
  const inputType = disabled && dateField ? 'text' : type
  const invalid = error != null
  const errorView = invalid && (
    <FormErrorMessage>{error}</FormErrorMessage>
  )
  const rightView = right != null && (
    <InputRightElement w='fit-content'>{right}</InputRightElement>
  )
  const labelView = label != null && <FormLabel>{label}</FormLabel>
  return (
    <FormControl isInvalid={invalid} {...props.control}>
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
