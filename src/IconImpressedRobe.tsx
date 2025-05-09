import { IconImpressed, IconImpressedProps } from "impressed";
import IconButtonRobe from "./IconButtonRobe";

export default function IconImpressedRobe(props: IconImpressedProps) {
  return (
    <IconImpressed
      IconView={IconButtonRobe}
      {...props}
    />
  )
}