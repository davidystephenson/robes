import { forwardRef } from 'react'
import { ButtonProps } from '@chakra-ui/react'
import robesContext from './robesContext'
import ButtonRobe from './ButtonRobe'

const RedButtonRobe = forwardRef<HTMLButtonElement, ButtonProps>((
  props,
  ref
) => {
  const robes = robesContext.use()
  return <ButtonRobe colorScheme={robes.red} {...props} ref={ref} />
})
export default RedButtonRobe
