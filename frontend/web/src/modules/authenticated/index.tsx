import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { GridContainer } from '../../common/components'
import { Header } from './components'

import { Feed } from './pages/Feed/Feed'
import { Search } from './pages/Search/Search'

import { PageContainer } from './styles'

export const AuthenticatedArea: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <GridContainer>
        <Routes>
          <Route path="feed" element={<Feed />} />
          {/* <Route path="profile/:id" element={} /> */}
          <Route path="search/:term" element={<Search />} />
          <Route path="*" element={<Navigate to="feed" />} />
        </Routes>
      </GridContainer>
    </PageContainer>
  )
}
