import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

import useSearch from '../../hooks/useSearch'

import {
  Container,
  Content,
  Filter,
  Filters,
  Header,
  Label,
  List,
  Term,
  Wrapper
} from './styles'
import { SearchResultItem } from '../../components'

export const Search: React.FC = () => {
  const { term } = useParams()
  const [filter, setFilter] = useState<'users' | 'skills'>('users')

  const theme = useTheme()

  const { loading, data } = useSearch(term as string, filter)

  if (loading) return <h1>Loading</h1>

  return (
    <Wrapper>
      <Container>
        <Header>
          <Filters>
            <Filter
              selected={filter === 'users'}
              onClick={() => setFilter('users')}
            >Users</Filter>
            <Filter
              selected={filter === 'skills'}
              onClick={() => setFilter('skills')}
            >Skills</Filter>
          </Filters>
        </Header>
        <Content>
          <Label>Search term</Label>
          <Term>{term}</Term>
          <List>
            {data?.map(item => (
              <SearchResultItem key={item.id} {...item} />
            ))}
          </List>
        </Content>
      </Container>
    </Wrapper>
  )
}
