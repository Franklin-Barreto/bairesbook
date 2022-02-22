import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import api from '../api'

const provider = new GoogleAuthProvider()

type FirebaseAuthProps = {
  currentUser: UserCredential | null
  loading: boolean
  handleSignInWithGoogle: () => void
  handleSignInToBairesDev: (user: User) => void
  handleSignOut: () => void
}

interface ContextProps {
  children: JSX.Element | JSX.Element[]
}

interface UserCredential {
  id: number
  name: string
  birthDate: string
  slackUser: string
  StartDate: string
  isMentor: true
  title: string
  locationDto: {
    state: string,
    country: string
  },
  email: string
  currentProject: string
  googleUserId: string
  photoUrl: string
}

export const AuthContext = createContext({} as FirebaseAuthProps)

const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserCredential | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  const handleSignInToBairesDev = (user: User) => {
    const payload = JSON.stringify({
      name: user.displayName,
      email: user.email,
      googleUserId: user.uid,
      photoUrl: user.photoURL
    })
    api.post<UserCredential>('/user/', payload)
      .then(response => {
        console.log(response)
        setCurrentUser(response.data)
      })
  }

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async res => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential?.accessToken
        const user = res.user

        handleSignInToBairesDev(user)
      }).catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null)
        navigate('/')
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        await handleSignInToBairesDev(user)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loading,
    handleSignInWithGoogle,
    handleSignInToBairesDev,
    handleSignOut
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
