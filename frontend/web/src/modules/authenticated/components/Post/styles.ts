import styled, { keyframes } from 'styled-components'
import { FiMessageSquare } from 'react-icons/fi'

const pulse = keyframes`
  from {
    box-shadow: #3EBBFF 0 0 0;
  }
  to {
    box-shadow: #3EBBFF00 0 0 0 12px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: solid 1px;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  background: ${({ theme }) => theme.palette.blocks.container};
  border-color: ${({ theme }) => theme.palette.blocks.border};
`

export const Content = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem 0;
  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 1.5rem;
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  > * {
    flex-shrink: 0;
  }
`

export const ContentArticle = styled.article`
  width: 100%;

`

export const ContentSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3rem;
`

export const PostTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.primary};
  margin-bottom: 1.25rem;
`

export const PostText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.primary};
  font-weight: 400;

  strong, b {
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.font.primary};
    font-weight: 400;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    strong, b {
      font-weight: 600;
    }
  }
`

export const PostImage = styled.img`
  max-width: 100%;
  max-height: auto;
  border-radius: 0.5rem;
`

export const PostUserName = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const PostUserTitle = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
`

export const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
`

export const Placeholder = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.font.active};
  color: white;

  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 1.5rem;

  form {
    width: 100%;
    display: flex;
    position: relative;
    column-gap: 0.75rem;
  }
`

export const CommentIcon = styled(FiMessageSquare)`
  position: absolute;
  left: 16px;
  top: 15px;
  pointer-events: none;
`

export const CommentInput = styled.input`
  border: none;
  background: transparent;
  flex-grow: 1;

  height: 3rem;
  border-radius: 0.5rem;
  border: solid 1px;
  padding: 0px 16px 0px 60px;

  background: ${({ theme }) => theme.palette.search.background};
  border-color: ${({ theme }) => theme.palette.blocks.border};

  font-size: 0.875rem;

  &:focus {
    border-color: ${({ theme }) => theme.palette.font.active};
  }
`

export const LikeButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.75rem;
  cursor: pointer;

  border: none;
  background: transparent;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.font.primary};
  }
`

export const LikedIconContainer = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  border-radius: 50%;
  animation: ${pulse} 500ms;
}
`

export const SocialCount = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
`

export const LikeCount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const CommentToggle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.primary};

  &:hover {
    text-decoration: underline;
  }
`

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentContainer = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 2rem 1fr;
  column-gap: 1.5rem;
  align-items: flex-start;
`

export const CommentAvatar = styled.img`
  flex-grow: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  aspect-ratio: 1;
`

export const CommentPlaceholder = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.font.active};
  color: white;

  font-size: 1rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CommentValue = styled.p`
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.primary};
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.blocks.border};
  border-radius: 0.5rem;
`

export const DateTime = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.secondary};
`
