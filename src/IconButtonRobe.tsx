import { forwardRef } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import useDisabled from './useDisabled'

const IconButtonRobe = forwardRef<HTMLButtonElement, IconButtonProps>((
  props,
  ref
) => {
  const disabled = useDisabled(props)
  return (
    <IconButton
      colorScheme='red'
      isDisabled={disabled}
      size='sm'
      variant='link'
      {...props}
      ref={ref}
    />
  )
})
export default IconButtonRobe
