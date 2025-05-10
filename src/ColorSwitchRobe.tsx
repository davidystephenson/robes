'use client'

import { Box, HStack, StackProps, useColorMode } from '@chakra-ui/react'
import { JSX } from 'react'
import robesContext from '../src/robesContext'
import SwitchRobe from './SwitchRobe'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ColorSwitchRobe(props: StackProps & {
  inert?: boolean
}): JSX.Element {
  const { inert, ...rest } = props
  const robes = robesContext.use()
  const disabled = !robes.mounted
  const colorMode = useColorMode()

  return (
    <HStack {...rest}>
      <Box>Light</Box>
      <MdLightMode />
      <SwitchRobe
        inert={inert}
        isDisabled={disabled}
        isChecked={robes.darkened}
        onChange={colorMode.toggleColorMode}
      />
      <MdDarkMode />
      <Box>Dark</Box>
    </HStack>
  )
}