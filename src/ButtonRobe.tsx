import { forwardRef } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import useDisabled from './useDisabled'

const ButtonRobe = forwardRef<HTMLButtonElement, ButtonProps>((
  props,
  ref
) => {
  const disabled = useDisabled(props)
  return (
    <Button
      colorScheme='purple'
      minW='unset'
      size='sm'
      width='fit-content'
      {...props}
      isDisabled={disabled}
      ref={ref}
    />
  )
})
export default ButtonRobe
