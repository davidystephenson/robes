import { JSX } from 'react'
import { ButtonLinkRobeProps } from './types'
import ButtonRobe from './ButtonRobe'
import { Link } from '@chakra-ui/react'

export default function ButtonLinkRobe (props: ButtonLinkRobeProps): JSX.Element {
  const { button, ...rest } = props
  return (
    <Link {...rest}>
      <ButtonRobe {...button}>
        {props.children}
      </ButtonRobe>
    </Link>
  )
}
