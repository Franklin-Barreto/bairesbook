import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import useAuth from './hooks/useAuth'
import { AuthenticatedArea } from './modules/authenticated'
import { SignIn } from './modules/public/pages/SignIn/SignIn'

import { EditProfile } from './modules/authenticated/pages/EditProfile/EditProfile'
import { Feed } from './modules/authenticated/pages/Feed/Feed'
import { Post } from './modules/authenticated/pages/Post/Post'
import { Profile } from './modules/authenticated/pages/Profile/Profile'
import { Search } from './modules/authenticated/pages/Search/Search'

const Router: React.FC = () => {
  const { currentUser, loading } = useAuth()

  // if (loading) return <p>loading...</p>

  return (
    <Routes>
      <Route path="/" element={!currentUser ? <SignIn /> : <Navigate to="/feed" />} />

      {/* {!!currentUser && (
        <Route path="/*" element={<AuthenticatedArea />} />
      )} */}

      <Route element={<AuthenticatedArea />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/post/add" element={<Post />} />
        <Route path="/edit/profile" element={<EditProfile />} />
        <Route path="*" element={<Navigate to="feed" />} />
      </Route>

      {/* <Route path="/" element={<Navigate to="/sign-in" />} /> */}
    </Routes>
  )
}

export default Router
