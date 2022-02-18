import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.blocks.background};

  display: grid;
  grid-template-rows: 5rem 1fr;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  column-gap: 1rem;
`
