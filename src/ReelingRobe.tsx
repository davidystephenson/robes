import { useColorMode } from "@chakra-ui/react"
import { Reeling, ReelingProps } from "reeling"

export default function ReelingRobe(props: ReelingProps) {
  const colorMode = useColorMode()
  const noir = colorMode.colorMode === 'light'
  return <Reeling noir={noir} {...props} />
}