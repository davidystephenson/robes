import { ImpressedProps } from "impressed"
import {
  BoxProps,
  ButtonProps,
  ContainerProps,
  FormControlProps,
  HeadingProps,
  IconButtonProps,
  InputProps,
  LinkProps,
  MenuButtonProps,
  MenuProps,
  StackProps
} from "@chakra-ui/react"
import { HTMLAttributes, JSX, ReactNode } from "react"
import { Actor } from "use-actor"

export type ButtonLinkRobeProps = LinkProps & {
  button?: ButtonProps
}
export type ButtonLinkableRobeProps = Linkable<ButtonLinkRobeProps>
export type ValuePair = {
  value: string
  onValueChange: (value: string) => void
}
export interface InlineActorFormProps <Input, Output> {
  actor: Actor<Input, Output>
  form?: FormRobeProps
  input: Input
  onValueChange: (value: string) => void
  value: string
}
export interface InlineFormRobeProps {
  errorMessage?: string
  form?: FormRobeProps
  label?: string
  loading?: boolean
  onCancel?: () => void
  onValueChange?: (value: string) => void
  onSubmit?: () => void | Promise<void>
  value?: string
}

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
export type MenuRobeProps = MenuProps & {
  children: ReactNode
  icon?: JSX.Element
  loading?: boolean
} 
export type MenuButtonRobeProps = MenuButtonProps & IconButtonProps & {
  loading?: boolean
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