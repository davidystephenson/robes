import { ImpressedProps } from "impressed"
import {
  BoxProps,
  ButtonProps,
  ContainerProps,
  FormControlProps,
  HeadingProps,
  InputProps,
  LinkProps,
  MenuProps,
  StackProps
} from "@chakra-ui/react"
import { HTMLAttributes, ReactNode } from "react"

export type ButtonLinkRobeProps = LinkProps & {
  button?: ButtonProps
}
export type ButtonLinkableRobeProps = Linkable<ButtonLinkRobeProps>
export type InputRobeProps = InputProps & {
  control?: FormControlProps
  error?: ReactNode
  label?: string
  rightElement?: ReactNode
}
export type FormRobeProps = BoxProps & HTMLAttributes<HTMLFormElement> & {
  stack?: StackProps
}
export type LayoutRobeProps = ContainerProps & {
  children?: ReactNode
  navbar?: NavbarRobeProps
}
export type LinkRobeProps = LinkProps & {
  active?: boolean
}
export type Linkable<Props extends LinkProps> = Omit<Props, 'href'> & {
  href?: string | null
}
export type LinkableRobeProps = Linkable<LinkRobeProps> & {
  children: ReactNode
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