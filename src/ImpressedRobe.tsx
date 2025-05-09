import Impressed, { ImpressedProps } from "impressed";
import IconButtonRobe from "./IconButtonRobe";
import ButtonRobe from "./ButtonRobe";

export default function ImpressedRobe(props: ImpressedProps) {
  return (
    <Impressed
      IconView={IconButtonRobe}
      View={ButtonRobe}
      {...props}
    />
  )
}