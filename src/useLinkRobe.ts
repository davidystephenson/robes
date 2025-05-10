import robesContext from './robesContext'
import { LinkRobeProps } from './types'

export default function useLinkRobe (props: LinkRobeProps): LinkRobeProps {
  const robes = robesContext.use()
  if (props.active === true) {
    return { textDecoration: 'none', color: robes.purple, cursor: 'default' }
  }
  return { color: 'inherit' }
}
