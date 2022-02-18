import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useAuth from './hooks/useAuth'
import { AuthenticatedArea } from './modules/authenticated'
import { PublicArea } from './modules/public'

const Router = () => {
  const { currentUser } = useAuth()

  // return (
  //   <div>
  //       {!!currentUser && <span>Hey, {currentUser.displayName}</span>}
  //       {!currentUser && <button onClick={handleSignInWithGoogle}>Sign In with Google</button>}
  //   </div>
  // )

  return (
    <BrowserRouter>
      <Routes>
        {!currentUser && (
          <Route path="/*" element={<PublicArea />} />
        )}
        {!!currentUser && (
          <Route path="/*" element={<AuthenticatedArea />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
