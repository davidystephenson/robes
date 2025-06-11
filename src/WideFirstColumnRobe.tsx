import { Th } from "@chakra-ui/react";
import { RowmanceColumnProps } from "rowmance";

export default function WideFirstColumnRobe(
  props: RowmanceColumnProps
) {
  const { index, ...rest } = props;
  const w = index === 0 ? { w: "100%" } : {};
  return (
    <Th {...w} {...rest} />
  )
}