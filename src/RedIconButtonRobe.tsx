import { forwardRef } from 'react'
import { IconButtonProps } from '@chakra-ui/react'
import robesContext from './robesContext'
import IconButtonRobe from './IconButtonRobe'

const RedIconButtonRobe = forwardRef<HTMLButtonElement, IconButtonProps>((
  props,
  ref
) => {
  const robes = robesContext.use()
  return <IconButtonRobe colorScheme={robes.red} {...props} ref={ref} />
})
export default RedIconButtonRobe
