import { HStack, Heading, StackProps } from '@chakra-ui/react'
import { JSX } from 'react'
import LinkRobe from './LinkRobe'
import ProfileRobe from './ProfileRobe'

export default function NavbarLayoutView (props: StackProps): JSX.Element {
  const { children, ...rest } = props
  return (
    <HStack justifyContent='space-between' mt='10px' {...rest}>
      <LinkRobe href='/lists'>
        <Heading>Cloudsort</Heading>
      </LinkRobe>
      {children}
      <ProfileRobe />
    </HStack>
  )
}