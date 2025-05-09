import { ImpressedProps } from "impressed"
import {
  ContainerProps,
  FormControlProps,
  HeadingProps,
  InputProps,
  LinkProps,
  MenuProps,
  StackProps
} from "@chakra-ui/react"
import { ReactNode } from "react"

export type InputRobeProps = InputProps & {
  control?: FormControlProps
  error?: ReactNode
  label?: string
  rightElement?: ReactNode
}
export type LayoutRobeProps = ContainerProps & {
  children?: ReactNode
  navbar?: NavbarRobeProps
}
export type LinkRobeProps = LinkProps & {
  active?: boolean
}
export type LinkableRobeProps = Omit<LinkRobeProps, 'href'> & {
  children: ReactNode
  href?: string | null
}
export type NavbarRobeProps = Omit<StackProps, 'children'> & {
  children?: ReactNode
  heading?: HeadingProps
  link?: LinkRobeProps
  profile?: ProfileRobeProps
}
export type ProfileRobeProps = Omit<MenuProps, 'children'> & {
  children?: ReactNode
  loading?: boolean
  onColorSwitch?: () => void | Promise<void>
  onLogout?: () => void | Promise<void>
  button?: ImpressedProps
}