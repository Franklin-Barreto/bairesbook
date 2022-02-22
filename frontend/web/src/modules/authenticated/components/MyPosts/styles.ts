import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 992px) {
    display: flex;
  }

  margin-top: 1.5rem;
  
  flex-direction: column;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
`

export const Label = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.secondary};
  margin-bottom: 1rem;
`
