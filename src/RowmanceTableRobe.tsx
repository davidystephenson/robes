import { RowmanceTable, RowmanceTableProps } from "rowmance";
import TableRobe from "./TableRobe";

export default function RowmanceTableRobe<Row>(
  props: RowmanceTableProps<Row>
) {
  return (
    <RowmanceTable
      Table={TableRobe}
      {...props}
    />
  )
}
