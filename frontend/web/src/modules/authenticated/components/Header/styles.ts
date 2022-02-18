import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;

  border-bottom: solid 1px ${({ theme }) => theme.palette.blocks.border};
  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media (min-width: 992px) {
    column-gap: 5rem;
  }

  #main-logo--desktop {
    display: none;

    @media (min-width: 992px) {
      display: block;
    }
  }

  #main-logo--mobile {
    @media (min-width: 992px) {
      display: none;
    }
  }  
`
