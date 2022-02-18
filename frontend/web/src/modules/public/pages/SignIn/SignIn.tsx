import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import { GoogleButton } from '../../components'

export const SignIn: React.FC = () => {
  const { handleSignInWithGoogle } = useAuth()

  return (
    <div>
      <span>Sign in</span>
      <GoogleButton onClick={handleSignInWithGoogle} label="Continue with Google" />
    </div>
  )
}
