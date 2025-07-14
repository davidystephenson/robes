import { Td, TableCellProps } from '@chakra-ui/react'
import { useRowmanceContext } from 'rowmance'

export default function FullCellRobe (props: TableCellProps) {
  const rowmance = useRowmanceContext()
  return (
    <Td colSpan={rowmance.columns.length} {...props} />
  )
}