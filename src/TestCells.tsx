import { Td } from "@chakra-ui/react"
import FullCellRobe from "./FullCellRobe"

export default function TestCells(props: {
  row: {
    name: string,
    email: string
  }
}) {
  if (props.row.name === 'Item 2') {
    return (
      <FullCellRobe bg='red'>
        {props.row.name}
      </FullCellRobe>
    )
  }
  return (
    <>
      <Td>
        {props.row.name}
      </Td>
      <Td>
        {props.row.email}
      </Td>
    </>
  )
}