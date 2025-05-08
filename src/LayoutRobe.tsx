import { JSX, ReactNode } from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'
import NavbarRobe from './NavbarRobe'

export default function LayoutRobe (props: ContainerProps & {
  children: ReactNode
}): JSX.Element {
  const { children, ...rest } = props
  return (
    <Container pt='10px' {...rest}>
      <NavbarRobe />
      {children}
    </Container>
  )
}

