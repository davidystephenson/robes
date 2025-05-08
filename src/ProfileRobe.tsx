import { MdLogout } from 'react-icons/md'
import { Menu, MenuButton, MenuItem, MenuList, MenuProps, useColorMode } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'
import ColorSwitchRobe from './ColorSwitchRobe'
import ButtonRobe from './ButtonRobe'

export default function ProfileRobe (props: Omit<MenuProps, 'children'> & {
  children?: ReactNode
  loading?: boolean
  onColorSwitch?: () => void | Promise<void>
  onLogout?: () => void | Promise<void>
}): JSX.Element {
  const { children, loading, onLogout, onColorSwitch, ...rest } = props
  const colorMode = useColorMode()

  function handleClick (): void {
    if (onColorSwitch) {
      onColorSwitch()
    } else {
      colorMode.toggleColorMode()
    }
  }

  return (
    <Menu {...rest}>
      <MenuButton
        as={ButtonRobe}
        isLoading={loading}
      >
        {children}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleClick}>
          <ColorSwitchRobe inert />
        </MenuItem>
        <MenuItem
          icon={<MdLogout />}
          onClick={onLogout}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
