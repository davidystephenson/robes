import { JSX } from 'react'
import { ButtonLinkRobeProps } from './types'
import LinkRobe from './LinkRobe'
import ButtonRobe from './ButtonRobe'

export default function ButtonLinkRobe (props: ButtonLinkRobeProps): JSX.Element {
  const { button, ...rest } = props
  return (
    <LinkRobe {...rest}>
      <ButtonRobe {...button}>
        {props.children}
      </ButtonRobe>
    </LinkRobe>
  )
}
