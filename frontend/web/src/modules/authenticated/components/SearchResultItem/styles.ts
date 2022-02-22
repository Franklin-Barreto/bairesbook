import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;

  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.blocks.border};
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
`

export const PicPlaceholder = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.font.active};

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const DisplayName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const Title = styled.h5`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  `

export const Label = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  margin-top: 1.5rem;
`

export const ProjectName = styled.h5`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 0.75rem;
`

export const SkillTag = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  display: block;
  width: fit-content;
  height: 2.625rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.blocks.highlight};


  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
`
