import { Link, LinkProps } from '@chakra-ui/react'
import { JSX } from 'react'
import robesContext from './robesContext'

export default function LinkRobe (props: LinkProps & {
  active?: boolean
}): JSX.Element {
  const robes = robesContext.use()
  const color = props.active === true? robes.colorScheme : 'inherit'
  return (
    <Link {...props} color={color}>
      {props.children}
    </Link>
  )
}
