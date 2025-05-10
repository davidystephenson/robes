import { JSX } from 'react'
import { ButtonLinkRobeProps } from './types'
import LinkRobe from './LinkRobe'
import ButtonRobe from './ButtonRobe'

export default function ButtonLinkRobe (props: ButtonLinkRobeProps): JSX.Element {
  return (
    <LinkRobe {...props}>
      <ButtonRobe {...props.button}>
        {props.children}
      </ButtonRobe>
    </LinkRobe>
  )
}
