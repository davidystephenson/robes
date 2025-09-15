import { Link } from '@chakra-ui/react'
import { JSX } from 'react'
import { LinkRobeProps } from './types'
import useLinkRobe from './useLinkRobe'

export default function LinkRobe (props: LinkRobeProps): JSX.Element {
  const link = useLinkRobe(props)
  const { active, debug, ...rest } = props
  if (debug) {
    console.debug('LinkRobe props', props)
  }
  return (
    <Link {...rest} {...link}>
      {props.children}
    </Link>
  )
}
