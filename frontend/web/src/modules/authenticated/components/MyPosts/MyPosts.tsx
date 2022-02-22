import React from 'react'
import useAuth from '../../../../hooks/useAuth'

import { Container, Label } from './styles'

export const MyPosts: React.FC = () => {
  const { currentUser } = useAuth()

  return (
    <Container>
      <Label>POSTS</Label>
    </Container>
  )
}
