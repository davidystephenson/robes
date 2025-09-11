import { IconButton, useDisclosure } from '@chakra-ui/react'
import { JSX } from 'react'
import PopoverController from './PopoverController'
import { PopoverIconButtonRobeProps } from './types'

export default function PopoverIconButtonRobe (props: PopoverIconButtonRobeProps): JSX.Element {
  const { children, ...rest } = props
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <PopoverController isOpen={isOpen} onClose={onClose} trigger={<IconButton onClick={onToggle} {...rest} />}>
      {children}
    </PopoverController>
  )
}