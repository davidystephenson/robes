import { Link } from '@chakra-ui/react'
import { JSX } from 'react'
import { LinkRobeProps } from './types'
import useLinkRobe from './useLinkRobe'

export default function LinkRobe (props: LinkRobeProps): JSX.Element {
  const link = useLinkRobe(props)
  return (
    <Link {...props} {...link}>
      {props.children}
    </Link>
  )
}
