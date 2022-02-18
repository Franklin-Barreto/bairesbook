import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile: React.FC = () => {
  const params = useParams()

  return (
    <div>
      <h3>{params.id === 'me' ? 'Edit Profile' : 'Profile'}</h3>
    </div>
  )
}
