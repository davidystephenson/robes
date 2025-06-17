import { forwardRef } from 'react'
import { IconButtonProps } from '@chakra-ui/react'
import RedIconButtonRobe from './RedIconButtonRobe'
import { MdDeleteForever } from 'react-icons/md'

const DeleteIconButtonRobe = forwardRef<HTMLButtonElement, Omit<IconButtonProps, 'icon'>>((
  props,
  ref
) => {
  return <RedIconButtonRobe icon={<MdDeleteForever />} {...props} ref={ref} />
})
export default DeleteIconButtonRobe
