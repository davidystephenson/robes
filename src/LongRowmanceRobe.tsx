import { LongRowmance, RowmanceProps } from "rowmance"
import IconButtonRobe from "./IconButtonRobe"
import InputRobe from "./InputRobe"
import TableRobe from "./TableRobe"
import WideFirstColumnRobe from "./WideFirstColumnRobe";

export default function LongRowmanceRobe<Row>(
  props: RowmanceProps<Row>
) {
  const Th = props.Th ?? WideFirstColumnRobe;
  return (
    <LongRowmance
      IconButton={IconButtonRobe}
      Input={InputRobe}
      Table={TableRobe}
      Th={Th}
      {...props}
    />
  )
}