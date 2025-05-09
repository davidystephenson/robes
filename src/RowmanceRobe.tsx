import { Rowmance, RowmanceProps } from "rowmance"
import IconButtonRobe from "./IconButtonRobe"
import InputRobe from "./InputRobe"
import TableRobe from "./TableRobe"

export default function RowmanceRobe<Row>(
  props: RowmanceProps<Row>
) {
  return (
    <Rowmance
      IconButton={IconButtonRobe}
      Input={InputRobe}
      Table={TableRobe}
      {...props}
    />
  )
}