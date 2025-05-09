import { MdLogout } from 'react-icons/md'
import { Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react'
import { JSX } from 'react'
import ColorSwitchRobe from './ColorSwitchRobe'
import ImpressedRobe from './ImpressedRobe'
import { ProfileRobeProps } from './types'

export default function ProfileRobe (props: ProfileRobeProps): JSX.Element {
  const { children, button: buttonProps, loading, onLogout, onColorSwitch, ...rest } = props
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
        as={ImpressedRobe}
        isLoading={loading}
        {...buttonProps}
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
