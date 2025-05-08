import { JSX, ReactNode } from 'react'
import { ChakraProvider, ChakraProviderProps, ColorMode, ColorModeScript } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import robesContext from './robesContext'

export default function RobesProvider(props: ChakraProviderProps & {
  children?: ReactNode
  colorMode?: ColorMode
}): JSX.Element {
  const { children, colorMode, ...rest } = props
  const config: ThemeConfig = {
    initialColorMode: 'system'
  }
  const theme = extendTheme({ config })
  return (
    <ChakraProvider theme={theme} {...rest}>
      <robesContext.Provider colorMode={colorMode}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </robesContext.Provider>
    </ChakraProvider>
  )
}
