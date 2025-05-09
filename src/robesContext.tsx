'use client'

import useMounted from './useMounted'
import { useMemo } from 'react'
import contextCreator from 'context-creator'
import { ColorMode, useColorMode } from '@chakra-ui/react'

const robesContext = contextCreator({
  name: 'robes',
  useValue: (props: {
    colorMode?: ColorMode
  }) => {
    const mounted = useMounted()
    const chakraMode = useColorMode()
    const colorMode = props.colorMode ?? chakraMode.colorMode
    const darkened = colorMode === 'dark'
    const borderColor = darkened
      ? 'var(--chakra-colors-gray-700)'
      : 'var(--chakra-colors-gray-100)'
    const purple = darkened
      ? 'var(--chakra-colors-purple-200)'
      : 'var(--chakra-colors-purple-600)'
    const red = darkened ? 'pink' : 'red'
    const value = useMemo(() => {
      return {
        mounted,
        colorMode,
        darkened,
        borderColor,
        purple,
        red
      }
    }, [mounted, colorMode, darkened, borderColor, purple, red])
    return value
  }
})
export default robesContext
