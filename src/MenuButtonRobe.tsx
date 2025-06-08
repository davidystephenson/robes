import { IconButton, MenuButton } from "@chakra-ui/react"
import ReelingRobe from "./ReelingRobe"
import { MenuButtonRobeProps } from "./types"
import { JSX } from "react"

export default function MenuButtonRobe (
  props: MenuButtonRobeProps
): JSX.Element {
  const { loading, ...rest } = props
  const icon = loading
    ? <ReelingRobe size='66%' />
    : props.icon
  return (
    <MenuButton
      {...rest}
      icon={icon}
      isDisabled={loading}
      as={IconButton}
      size='xs'
      variant='ghost'
    />
  )
}