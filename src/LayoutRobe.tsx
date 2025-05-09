import { JSX, ReactNode } from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'
import NavbarRobe from './NavbarRobe'
import { NavbarRobeProps } from './types'

export default function LayoutRobe (props: ContainerProps & {
  children: ReactNode
  navbar?: NavbarRobeProps
}): JSX.Element {
  const { children, navbar, ...rest } = props
  return (
    <Container pt='10px' {...rest}>
      <NavbarRobe {...navbar} />
      {children}
    </Container>
  )
}

