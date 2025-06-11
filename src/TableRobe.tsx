import { Table, TableProps } from '@chakra-ui/react'
import { JSX } from 'react'
import WideFirstColumnRobe from './WideFirstColumnRobe'

export default function TableRobe (props: TableProps): JSX.Element {
  return (
    <Table size='sm' Th={WideFirstColumnRobe} {...props} />
  )
}
