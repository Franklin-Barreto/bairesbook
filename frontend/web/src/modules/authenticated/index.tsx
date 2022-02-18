import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { GridContainer } from '../../common/components'
import { Header, MyProfile } from './components'

import { Feed } from './pages/Feed/Feed'
import { Profile } from './pages/Profile/Profile'
import { Search } from './pages/Search/Search'

import { Grid, PageContainer } from './styles'

export const AuthenticatedArea: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <GridContainer>
        <Grid>
          <MyProfile />
          <Routes>
            <Route path="feed" element={<Feed />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="search/:term" element={<Search />} />
            <Route path="*" element={<Navigate to="feed" />} />
          </Routes>
        </Grid>
      </GridContainer>
    </PageContainer>
  )
}
