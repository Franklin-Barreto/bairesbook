import React from 'react'

import AuthProvider from './context/AuthProvider'
import Router from './router'

import GlobalStyle from './styles/global'
import { ThemeToggleProvider } from './styles/ThemeToggleProvider'

export const App: React.FC = () => {
  return (
    <ThemeToggleProvider>
      <AuthProvider>
        <Router />
        <GlobalStyle />
      </AuthProvider>
    </ThemeToggleProvider>
  )
}

export default App
