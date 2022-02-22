import React from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { FiMapPin } from 'react-icons/fi'

import useProfile from '../../hooks/useProfile'

import {
  Avatar,
  Container,
  Content,
  DisplayName,
  Label,
  Location,
  PicPlaceholder,
  ProjectName,
  Skill,
  SkillLabel,
  SkillList,
  Skills,
  Title,
  Wrapper
} from './styles'

export const Profile: React.FC = () => {
  const params = useParams()
  const theme = useTheme()

  const { data, loading } = useProfile(Number(params.id))

  if (loading) return <span> loading</span>

  return (
    <Wrapper>
      <Container>
        <Content>
          {data?.photoUrl
            ? (
            <Avatar src={data.photoUrl} alt={data.name} />
              )
            : (
            <PicPlaceholder>{data?.name[0]}</PicPlaceholder>
              )}
            <DisplayName>{data?.name}</DisplayName>
            <Title>{data?.title}</Title>

            {!!data?.currentProject && (
              <>
                <Label>Current project</Label>
                <ProjectName>{data.currentProject}</ProjectName>
              </>
            )}

            {!!data?.location && (
              <Location>
                <FiMapPin size={16} color={theme.palette.font.primary} />
                <span>Rio de Janeiro, Brazil</span>
              </Location>
            )}

            <Skills>
              <SkillLabel>SKILLS</SkillLabel>
              <SkillList>
                {data?.skills?.map(item => <Skill key={item.name}>{item.name}</Skill>)}
              </SkillList>
            </Skills>
        </Content>
      </Container>
    </Wrapper>
  )
}
