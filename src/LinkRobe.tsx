import { Link } from '@chakra-ui/react'
import { JSX } from 'react'
import { LinkRobeProps } from './types'
import useLinkRobeColor from './useLinkRobeColor'

export default function LinkRobe (props: LinkRobeProps): JSX.Element {
  const color = useLinkRobeColor(props)
  return (
    <Link {...props} color={color}>
      {props.children}
    </Link>
  )
}
