// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === 'light' ? 'gray.100' : 'gray.900'
      }
    })
  },
  config
})

export default theme