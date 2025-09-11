import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'

export default function PopoverController (props: {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  trigger: ReactNode
}): JSX.Element {
  return (
    <Popover isOpen={props.isOpen} onClose={props.onClose}>
      <PopoverTrigger>
        {props.trigger}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody onClick={props.onClose}>{props.children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}