import { MenuItemProps } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import RedMenuItemRobe from './RedMenuItemRobe'

export default function DeleteMenuItemRobe (props: MenuItemProps): JSX.Element {
  const { children, ...rest } = props
  const child = children ?? 'Delete'
  return (
    <RedMenuItemRobe icon={<MdDeleteForever />} {...rest}>
      {child}
    </RedMenuItemRobe>
  )
}
