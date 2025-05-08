import { LinkProps } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'
import LinkRobe from './LinkRobe'

export default function LinkableRobe (props: Omit<LinkProps, 'href'> & {
  children: ReactNode
  href?: string | null
}): JSX.Element {
  if (props.href == null) {
    return (
      <>{props.children}</>
    )
  }
  return (
    <LinkRobe {...props} href={props.href}>
      {props.children}
    </LinkRobe>
  )
}