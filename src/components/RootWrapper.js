import React from 'react'
import { ColorModeProvider, Preflight } from '@xstyled/styled-components'
import { GlobalStyle, ThemeProvider } from './Theme'

export function RootWrapper({ children }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
