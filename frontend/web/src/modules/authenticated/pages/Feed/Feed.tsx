import React, { useMemo, useState } from 'react'
import { useTheme } from 'styled-components'
import { FiPlus } from 'react-icons/fi'

import { Post } from '../../components/Post/Post'
import useFeed from '../../hooks/useFeed'
import {
  Container,
  Content,
  CreatePostButton,
  Filter,
  Filters,
  Header,
  Wrapper
} from './styles'

export const Feed: React.FC = () => {
  const theme = useTheme()
  const [filter, setFilter] = useState<'all' | 'articles'>('all')

  const { data, loading, error } = useFeed()

  const posts = useMemo(() => {
    if (filter === 'articles') {
      return data?.reverse().filter(item => item.isArticle) || []
    }
    return data?.reverse()
  }, [data, filter])

  return (
    <Wrapper>
      <Container>
        <Header>
          <Filters>
            <Filter
              selected={filter === 'all'}
              onClick={() => setFilter('all')}
            >General posts</Filter>
            <Filter
              selected={filter === 'articles'}
              onClick={() => setFilter('articles')}
            >Articles</Filter>
          </Filters>
          <CreatePostButton to="/post/add">
            <FiPlus size={18} color={theme.palette.button.primary.color} />
            <span>Create post</span>
          </CreatePostButton>
        </Header>
        <Content>
          {posts?.map(item => <Post key={item.id} {...item}/>)}
        </Content>
      </Container>
    </Wrapper>
  )
}
