import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const provider = new GoogleAuthProvider()

type FirebaseAuthProps = {
  currentUser: User | null
  handleSignInWithGoogle: () => void
  handleSignInToBairesDev: (user: User) => Promise<void>
  handleSignOut: () => void
}

interface ContextProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext({} as FirebaseAuthProps)

const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  // const navigate = useNavigate()

  const handleSignInToBairesDev = async (user: User) => {
    console.log(user)
    setCurrentUser(user)
  }

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async res => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential?.accessToken
        const user = res.user
        console.log('signInWithPopup', token, user)

        await handleSignInToBairesDev(user)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        window.location.reload()
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        console.log('onAuthStateChanged', user)
        await handleSignInToBairesDev(user)
      }
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    handleSignInWithGoogle,
    handleSignInToBairesDev,
    handleSignOut
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
