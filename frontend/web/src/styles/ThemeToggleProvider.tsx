import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles'
import { dark, light } from './theme'

interface ContextInterface {
  theme: Theme
  handleTheme: () => void
}

interface ContextProps {
  children: JSX.Element | JSX.Element[]
}

export const ThemeChanger = createContext({} as ContextInterface)

export const useThemeToggle = () => {
  return useContext(ThemeChanger)
}

export const ThemeToggleProvider: React.FC<ContextProps> = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
  }

  const value = {
    theme,
    handleTheme
  }

  return (
    <ThemeChanger.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeChanger.Provider>
  )
}
