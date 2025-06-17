import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import { JSX } from 'react'
import robesContext from './robesContext'

export default function RedMenuItemRobe (props: MenuItemProps): JSX.Element {
  const robes = robesContext.use()
  return (
    <MenuItem color={robes.red} {...props} />
  )
}
