import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 2rem;
  overflow-y: auto;
`

export const Container = styled.div`
  display: none;
  width: 100%;
  padding: 3rem 1rem;

  @media (min-width: 992px) {
    display: flex;
  }
  
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
`

export const ProfilePic = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2.25rem;
`

export const Username = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const Title = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  margin-bottom: 1.125rem;
`

export const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
`

export const CurrentProject = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
  margin-bottom: 1.125rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;

  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.font.primary};
  }
`
export const EditProfileLink = styled(Link)`
  margin-top: 2rem;
  padding: 0 1.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;

  height: 3rem;
  background: transparent;
  border-radius: 0.5rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.palette.blocks.background};
  }

  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.font.secondary};
  }
`
