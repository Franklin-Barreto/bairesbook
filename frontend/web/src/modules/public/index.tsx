import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn } from './pages/SignIn/SignIn'

export const PublicArea: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="sign-in" />} />
      </Routes>
    </>
  )
}
