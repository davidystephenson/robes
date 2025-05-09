import { HStack, Heading } from '@chakra-ui/react'
import { JSX } from 'react'
import LinkRobe from './LinkRobe'
import ProfileRobe from './ProfileRobe'
import { NavbarRobeProps } from './types'

export default function NavbarRobe (props: NavbarRobeProps): JSX.Element {
  const { children, profile, link, heading, ...rest } = props
  return (
    <HStack
      justifyContent='space-between'
      mt='10px'
      {...rest}
    >
      <LinkRobe href='/lists' {...link}>
        <Heading {...heading}>Cloudsort</Heading>
      </LinkRobe>
      {children}
      <ProfileRobe {...profile} />
    </HStack>
  )
}