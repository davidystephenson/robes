import robesContext from "./robesContext"

export default function useDisabled (props: {
  isDisabled?: boolean
}) {
  const robes = robesContext.use()
  const disabled = !robes.mounted || props.isDisabled === true
  return disabled
}