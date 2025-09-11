import { Button, useDisclosure } from '@chakra-ui/react'
import { JSX } from 'react'
import PopoverController from './PopoverController'
import { PopoverButtonRobeProps } from './types'

export default function PopoverButtonRobe (props: PopoverButtonRobeProps): JSX.Element {
  const { label, children, ...rest } = props
  const { isOpen, onToggle, onClose } = useDisclosure()
  const trigger = <Button onClick={onToggle} {...rest}>{label}</Button>
  return (
    <PopoverController
      isOpen={isOpen}
      onClose={onClose}
      trigger={trigger}
    >
      {children}
    </PopoverController>
  )
}