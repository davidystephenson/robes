import { ImpressedProps } from "impressed"
import { HeadingProps, LinkProps, MenuProps, StackProps } from "@chakra-ui/react"
import { ReactNode } from "react"

export type ProfileRobeProps = Omit<MenuProps, 'children'> & {
  children?: ReactNode
  loading?: boolean
  onColorSwitch?: () => void | Promise<void>
  onLogout?: () => void | Promise<void>
  button?: ImpressedProps
}

export type LinkRobeProps = LinkProps & {
  active?: boolean
}

export type NavbarRobeProps = Omit<StackProps, 'children'> & {
  children?: ReactNode
  heading?: HeadingProps
  link?: LinkRobeProps
  profile?: ProfileRobeProps
}

