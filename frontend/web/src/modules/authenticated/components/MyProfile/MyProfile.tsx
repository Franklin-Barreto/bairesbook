import React from 'react'
import { FiMapPin, FiSettings } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import useAuth from '../../../../hooks/useAuth'
import { MyPosts } from '../MyPosts/MyPosts'

import {
  Container,
  CurrentProject,
  EditProfileLink,
  Label,
  Location,
  ProfilePic,
  Title,
  Username,
  Wrapper
} from './styles'

export const MyProfile: React.FC = () => {
  const theme = useTheme()
  const { currentUser } = useAuth()
  return (
    <Wrapper>
      <Container>
        {currentUser?.photoUrl && (
          <ProfilePic src={currentUser?.photoUrl} />
        )}
        <Username>{currentUser?.name}</Username>
        <Title>Frontend Developer</Title>
        {currentUser?.currentProject && (
          <>
          <Label>Current project</Label>
          <CurrentProject>{currentUser.currentProject}</CurrentProject>
          </>
        )}
        {currentUser?.locationDto && (
          <Location>
            <FiMapPin size={16} color={theme.palette.font.primary} />
            <span>{currentUser.locationDto.state}, {currentUser.locationDto.country}</span>
          </Location>
        )}

          <EditProfileLink to="/edit/profile">
            <FiSettings size={16} color={theme.palette.font.secondary} />
            <span>Edit profile</span>
          </EditProfileLink>
      </Container>
      <MyPosts />
    </Wrapper>
  )
}
