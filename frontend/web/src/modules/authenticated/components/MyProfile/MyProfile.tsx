import React from 'react'
import { FiMapPin, FiSettings } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import useAuth from '../../../../hooks/useAuth'

import { Container, CurrentProject, EditProfileLink, Label, Location, ProfilePic, Title, Username } from './styles'

export const MyProfile: React.FC = () => {
  const theme = useTheme()
  const { currentUser } = useAuth()
  return (
    <Container>
      {currentUser?.photoURL && (
        <ProfilePic src={currentUser?.photoURL} />
      )}
      <Username>{currentUser?.displayName}</Username>
      <Title>Frontend Developer</Title>
      <Label>Current project</Label>
      <CurrentProject>Pinterest - Data Engineering</CurrentProject>
      <Location>
        <FiMapPin size={16} color={theme.palette.font.primary} />
        <span>Rio de Janeiro, Brazil</span>
      </Location>

        <EditProfileLink to="/profile/me">
          <FiSettings size={16} color={theme.palette.font.secondary} />
          <span>Edit profile</span>
        </EditProfileLink>
    </Container>
  )
}
