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
import { ImpressedProps } from "impressed"
import { ComponentType, HTMLAttributes, JSX, ReactNode, RefAttributes } from "react"
import { Actor } from "use-actor"

export type ButtonLinkRobeProps = LinkProps & {
  button?: ButtonProps
}
export type ButtonLinkableRobeProps = Linkable<ButtonLinkRobeProps>
export type CurtainRobeProps = {
  children?: ReactNode
  open?: boolean
  hider?: ReactNode
}
export interface FileMenuItemRobeProps {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onFile: (props: { file: File }) => void
}
export type IconButtonLinkRobeProps = LinkProps & {
  button: IconButtonProps
}
export type IconButtonLinkableRobeProps = Linkable<IconButtonLinkRobeProps>
export type IconImpressedActorRobeProps <Input, Output> = Omit<ImpressedActorRobeProps<Input, Output>, 'View'> & IconButtonProps
export type ImpressedActorRobeProps <Input, Output> = {
  actor: Actor<Input, Output>
  input: Input
  leftButtons?: JSX.Element;
  IconView?: ComponentType<IconButtonProps & RefAttributes<HTMLButtonElement>>;
  orientation?: 'horizontal' | 'vertical';
  type?: 'button' | 'submit' | 'reset';
  View?: ComponentType<ButtonProps & RefAttributes<HTMLButtonElement>>;
} & ButtonProps
export interface InlineActorFormProps<Input, Output> {
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
export type PopoverButtonRobeProps = {
  label?: string | number | JSX.Element
  children: ReactNode
} & ButtonProps
export type PopoverIconButtonRobeProps = {
  children: ReactNode
} & IconButtonProps
export type ValuePair = {
  value: string
  onValueChange: (value: string) => void
}