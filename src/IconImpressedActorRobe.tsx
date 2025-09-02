import IconButtonRobe from "./IconButtonRobe";
import { IconImpressedActorRobeProps } from "./types";
import IconImpressedRobe from "./IconImpressedRobe";

export default function IconImpressedActorRobe <Input, Output> (props: IconImpressedActorRobeProps<Input, Output>) {
  const { actor, ...rest } = props
  function handleClick () {
    actor.act(props.input)
  }
  return (
    <IconImpressedRobe
      error={actor.error?.message}
      IconView={IconButtonRobe}
      loading={actor.acting}
      handleClick={handleClick}
      {...rest}
    />
  )
}