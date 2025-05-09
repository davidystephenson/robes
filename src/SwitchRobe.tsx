'use client'

import { Switch, SwitchProps } from '@chakra-ui/react'
import robesContext from './robesContext'
import { JSX } from 'react'

export default function SwitchRobe (props: SwitchProps & {
  inert?: boolean
}): JSX.Element {
  const robes = robesContext.use()
  const disabled = !robes.mounted
  const { inert, ...rest } = props
  if (inert) {
    rest.onChange = undefined
  }

  return (
    <Switch colorScheme='purple' isDisabled={disabled} {...rest} />
  )
}