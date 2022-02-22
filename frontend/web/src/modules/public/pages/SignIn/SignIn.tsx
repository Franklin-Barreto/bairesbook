import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import { GoogleButton } from '../../components'
import { MainLogo } from './MainLogo'
import { Page } from './styles'

export const SignIn: React.FC = () => {
  const { loading, handleSignInWithGoogle } = useAuth()

  if (loading) return <p>Loading...</p>

  return (
    <Page>
      <MainLogo />
      <GoogleButton onClick={handleSignInWithGoogle} label="Sign in with Google" />
    </Page>
  )
}
