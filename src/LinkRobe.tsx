import { Link } from '@chakra-ui/react'
import { JSX } from 'react'
import robesContext from './robesContext'
import { LinkRobeProps } from './types'

export default function LinkRobe (props: LinkRobeProps): JSX.Element {
  const robes = robesContext.use()
  const color = props.active === true
    ? robes.colorScheme
    : 'inherit'
  return (
    <Link {...props} color={color}>
      {props.children}
    </Link>
  )
}
