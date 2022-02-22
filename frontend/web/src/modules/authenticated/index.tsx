import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { GridContainer } from '../../common/components'
import useAuth from '../../hooks/useAuth'
import { Header, MyProfile } from './components'

import { EditProfile } from './pages/EditProfile/EditProfile'
import { Feed } from './pages/Feed/Feed'
import { Post } from './pages/Post/Post'
import { Profile } from './pages/Profile/Profile'
import { Search } from './pages/Search/Search'

import { Grid, PageContainer } from './styles'

export const AuthenticatedArea: React.FC = () => {
  const { currentUser } = useAuth()
  return (
    <PageContainer>
      <Header />
      <GridContainer>
        <Grid>
          <MyProfile />
          {currentUser ? <Outlet /> : <Navigate to="/" />}
          {/* <Routes>
            <Route path="feed" element={<Feed />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="search/:term" element={<Search />} />
            <Route path="post/add" element={<Post />} />
            <Route path="edit/profile" element={<EditProfile />} />
            <Route path="*" element={<Navigate to="feed" />} />
          </Routes> */}
        </Grid>
      </GridContainer>
    </PageContainer>
  )
}
