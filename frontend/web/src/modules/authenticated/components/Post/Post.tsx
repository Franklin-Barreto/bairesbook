import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { useTheme } from 'styled-components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { formatRelative, parseISO } from 'date-fns'

import { Button } from '../../../../common/components'
import useAuth from '../../../../hooks/useAuth'
import { PostInterface } from '../../../../interfaces'
import {
  Avatar,
  CommentAvatar,
  CommentContainer,
  CommentIcon,
  CommentInput,
  CommentPlaceholder,
  CommentsWrapper,
  CommentToggle,
  CommentValue,
  Container,
  Content,
  ContentArticle,
  ContentHeader,
  ContentSocial,
  ContentWrapper,
  DateTime,
  LikeButton,
  LikeCount,
  LikedIconContainer,
  Placeholder,
  PostImage,
  PostText,
  PostTitle,
  PostUserName,
  PostUserTitle,
  SocialContainer,
  SocialCount
} from './styles'

export const Post: React.FC<PostInterface> = ({
  data,
  postedBy,
  isArticle,
  createdAt
}) => {
  const [comment, setComment] = useState<string>('')
  const { currentUser } = useAuth()
  const theme = useTheme()

  const [liked, setLiked] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleAddComment: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!comment) return

    setComment('')
    // navigate('/feed')
  }

  // function renderHTML() {
  //   return { __html: data.text }
  // }

  return (
    <Container>
      <Content>
        {postedBy.photoUrl
          ? (
          <Avatar src={postedBy.photoUrl} alt={postedBy.name} />
            )
          : (
         <Placeholder>{postedBy.name[0]}</Placeholder>
            )}
        <ContentWrapper>
          <ContentHeader>
            <div>
              <PostUserName>{postedBy.name}</PostUserName>
              <PostUserTitle>{postedBy.title}</PostUserTitle>
            </div>
            {!!createdAt && <DateTime>{formatRelative(parseISO(createdAt), new Date())}</DateTime>}
          </ContentHeader>
          <ContentArticle>
            {!!data.title && <PostTitle>{data.title}</PostTitle>}
            {!!data.text && <PostText><p>{data.text}</p></PostText>}
            {!!data.image && <PostImage src={data.image} />}
          </ContentArticle>
          <ContentSocial>
            <LikeButton onClick={() => setLiked(!liked)}>
              {liked
                ? (
                <LikedIconContainer>
                  <AiFillHeart color={theme.palette.font.active} size={17} />
                </LikedIconContainer>
                  )
                : (
                  <AiOutlineHeart color={theme.palette.font.primary} size={17} />
                  )}
                  <span>Like</span>
            </LikeButton>
            <SocialCount>
              {/* <CommentToggle onClick={() => setExpanded(!expanded)}>
                {!!comments?.length && `${comments.length} comments`}
              </CommentToggle> */}
              {/* {liked && <LikeCount>{liked ? '1' : '0'} people liked this {isArticle ? 'article' : 'post'}</LikeCount>} */}
            </SocialCount>
          </ContentSocial>
        </ContentWrapper>
      </Content>
      <SocialContainer>
        {currentUser?.photoUrl
          ? (
          <Avatar src={currentUser?.photoUrl} alt={currentUser?.name as string} />
            )
          : (
          <Placeholder>{currentUser?.name?.[0]}</Placeholder>
            )}
        <form onSubmit={handleAddComment}>
          <CommentInput
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
            placeholder='Add a comment'
          />
          <CommentIcon size={18} color={theme.palette.font.primary} />
          <Button variant='primary'>Send</Button>
        </form>
      </SocialContainer>
      {expanded && (
        <CommentsWrapper>
          {/* {comments?.map(item => (
            <CommentContainer key={item.id}>
              {item.user.photoUrl
                ? (
                <CommentAvatar src={item.user.photoUrl} />
                  )
                : (
                <CommentPlaceholder>{item.user.name[0]}</CommentPlaceholder>
                  )}
                  <CommentValue>{item.text}</CommentValue>
            </CommentContainer>
          ))} */}
        </CommentsWrapper>
      )}
    </Container>
  )
}
