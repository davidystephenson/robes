import { JSX } from 'react'
import { Container } from '@chakra-ui/react'
import NavbarRobe from './NavbarRobe'
import { LayoutRobeProps } from './types'

export default function LayoutRobe (props: LayoutRobeProps): JSX.Element {
  const { children, navbar, ...rest } = props
  return (
    <Container pt='10px' {...rest}>
      <NavbarRobe {...navbar} />
      {children}
    </Container>
  )
}

