import { JSX } from 'react'
import LinkRobe from './LinkRobe'
import { LinkableRobeProps } from './types'

export default function LinkableRobe (props: LinkableRobeProps): JSX.Element {
  if (props.href == null) {
    return <>{props.children}</>
  }
  return (
    <LinkRobe {...props} href={props.href} />
  )
}