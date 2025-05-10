import { JSX } from 'react'
import { ButtonLinkableRobeProps } from './types'
import ButtonLinkRobe from './ButtonLinkRobe'
import ButtonRobe from './ButtonRobe'

export default function ButtonLinkableRobe (props: ButtonLinkableRobeProps): JSX.Element {
  if (props.href == null) {
    return <ButtonRobe {...props.button} />
  }
  return <ButtonLinkRobe {...props} href={props.href} />
}