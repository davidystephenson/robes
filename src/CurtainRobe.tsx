import { JSX } from 'react'
import { CurtainRobeProps } from './types'

export default function CurtainRobe (props: CurtainRobeProps): JSX.Element {
  if (props.open === true) {
    return <>{props.children}</>
  }
  return <>{props.hider}</>
}