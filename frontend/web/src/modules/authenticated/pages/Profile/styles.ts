import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 2rem;
  overflow-y: auto;
`
export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;

  margin-bottom: 1.125rem;
`

export const PicPlaceholder = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.font.active};

  margin-bottom: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
`

export const DisplayName = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const Title = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  `

export const Label = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  margin-top: 1.5rem;
`

export const ProjectName = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.primary};
`

export const Location = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.75rem;

  margin-top: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.font.primary};
  }
`

export const Skills = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  border: solid 1px;
  border-radius: 0.5rem;
  border-color: ${({ theme }) => theme.palette.blocks.border};
`

export const SkillLabel = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  margin-bottom: 1rem;
`

export const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
`

export const Skill = styled.span`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ theme }) => theme.palette.blocks.highlight};
  color: ${({ theme }) => theme.palette.font.primary};
`
