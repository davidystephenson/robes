import { forwardRef } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import useDisabled from './useDisabled'

const ButtonRobe = forwardRef<HTMLButtonElement, ButtonProps>((
  props,
  ref
) => {
  const disabled = useDisabled(props)
  const buttonView = (
    <>
      <Button
        colorScheme='purple'
        size='sm'
        width='fit-content'
        {...props}
        isDisabled={disabled}
        ref={ref}
      />
    </>
  )
  return <>{buttonView}</>
})
export default ButtonRobe
