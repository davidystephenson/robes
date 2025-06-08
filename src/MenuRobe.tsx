import { Menu, MenuList } from '@chakra-ui/react'
import { JSX } from 'react'
import MenuButtonRobe from './MenuButtonRobe'
import { CgMoreVertical } from 'react-icons/cg'
import { MenuRobeProps } from './types'

export default function MenuRobe (props: MenuRobeProps): JSX.Element {
  const icon = props.icon ?? <CgMoreVertical />
  return (
    <Menu {...props}>
      <MenuButtonRobe
        aria-label='Options'
        icon={icon}
        loading={props.loading}
      />
      <MenuList zIndex={2}>
        {props.children}
      </MenuList>
    </Menu>
  )
}

