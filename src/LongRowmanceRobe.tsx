import { LongRowmance, RowmanceProps } from "rowmance"
import IconButtonRobe from "./IconButtonRobe"
import InputRobe from "./InputRobe"
import TableRobe from "./TableRobe"

export default function LongRowmanceRobe<Row>(
  props: RowmanceProps<Row>
) {
  return (
    <LongRowmance
      IconButton={IconButtonRobe}
      Input={InputRobe}
      Table={TableRobe}
      {...props}
    />
  )
}