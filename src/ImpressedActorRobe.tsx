import IconButtonRobe from "./IconButtonRobe";
import ButtonRobe from "./ButtonRobe";
import { ImpressedActorRobeProps } from "./types";
import ImpressedRobe from "./ImpressedRobe";

export default function ImpressedActorRobe <Input, Output> (props: ImpressedActorRobeProps<Input, Output>) {
  const { actor, ...rest } = props
  function handleClick () {
    actor.act(props.input)
  }
  return (
    <ImpressedRobe
      error={actor.error?.message}
      IconView={IconButtonRobe}
      loading={actor.acting}
      handleClick={handleClick}
      View={ButtonRobe}
      {...rest}
    />
  )
}