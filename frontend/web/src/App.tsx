import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AuthProvider from './context/AuthProvider'
import Router from './router'

import GlobalStyle from './styles/global'
import { ThemeToggleProvider } from './styles/ThemeToggleProvider'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeToggleProvider>
        <AuthProvider>
          <Router />
          <GlobalStyle />
        </AuthProvider>
      </ThemeToggleProvider>
    </BrowserRouter>
  )
}

export default App
