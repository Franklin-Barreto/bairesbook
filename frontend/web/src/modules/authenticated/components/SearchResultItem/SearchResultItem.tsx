import React from 'react'
import { User } from '../../../../interfaces'

import {
  Avatar,
  Container,
  Content,
  DisplayName,
  Label,
  PicPlaceholder,
  ProjectName,
  Title
} from './styles'

export const SearchResultItem: React.FC<User> = ({
  id,
  name,
  photoUrl,
  title
}) => {
  return (
    <Container to={`/profile/${id}`}>
      {photoUrl
        ? (
        <Avatar src={photoUrl} alt={name} />
          )
        : (
        <PicPlaceholder>{name[0]}</PicPlaceholder>
          )}
      <Content>
        <DisplayName>{name}</DisplayName>
        <Title>{title}</Title>

        {/* {project && (
          <>
            <Label>Current project</Label>
            <ProjectName>{project}</ProjectName>
          </>
        )} */}
      </Content>
    </Container>
  )
}
