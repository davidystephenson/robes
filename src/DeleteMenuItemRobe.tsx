import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import robesContext from './robesContext'

export default function DeleteMenuItemRobe (props: MenuItemProps): JSX.Element {
  const robes = robesContext.use()
  return (
    <MenuItem icon={<MdDeleteForever />} color={robes.red} {...props}>
      Delete
    </MenuItem>
  )
}
