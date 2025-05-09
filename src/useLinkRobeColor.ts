import robesContext from './robesContext'
import { LinkRobeProps } from './types'

export default function useLinkRobeColor (props: LinkRobeProps): string {
  const robes = robesContext.use()
  if (props.active === true) {
    return robes.purple
  }
  return 'inherit'
}
