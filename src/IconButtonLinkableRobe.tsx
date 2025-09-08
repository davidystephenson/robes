import { JSX } from 'react'
import { IconButtonLinkableRobeProps } from './types'
import IconButtonLinkRobe from './IconButtonLinkRobe'
import IconButtonRobe from './IconButtonRobe'

export default function IconButtonLinkableRobe (props: IconButtonLinkableRobeProps): JSX.Element {
  if (props.href == null) {
    return <IconButtonRobe aria-label={props['aria-label']} {...props.button} />
  }
  return <IconButtonLinkRobe {...props} href={props.href} />
}