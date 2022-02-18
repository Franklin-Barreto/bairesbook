import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles'
import { dark, light } from './theme'

const STORAGE_KEY = '@BairesBook:theme'

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
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return light
    }

    if (stored === 'light') return light

    return dark
  })

  const handleTheme = () => {
    setTheme(current => {
      if (current.name === 'light') {
        window.localStorage.setItem(STORAGE_KEY, 'dark')
        return dark
      }
      window.localStorage.setItem(STORAGE_KEY, 'light')
      return light
    })
    // window.localStorage.setItem(STORAGE_KEY, theme.name === 'light' ? 'light' : 'dark')
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
