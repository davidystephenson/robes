import { JSX } from 'react'
import { IconButtonLinkRobeProps } from './types'
import { Link } from '@chakra-ui/react'
import IconButtonRobe from './IconButtonRobe'

export default function IconButtonLinkRobe (props: IconButtonLinkRobeProps): JSX.Element {
  const { 'aria-label': ariaLabel, button, children, ...rest } = props
  return (
    <Link {...rest}>
      <IconButtonRobe {...button}>
        {children}
      </IconButtonRobe>
    </Link>
  )
}
