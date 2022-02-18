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
  display: grid;
  grid-template-columns: 1fr 2rem;
  align-items: center;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  padding-right: 1rem;

  form {
    width: 100%;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
  }

  #main-logo--desktop {
    display: none;
    flex-shrink: 0;

    @media (min-width: 992px) {
      display: block;
    }
  }

  #main-logo--mobile {
    flex-shrink: 0;
    @media (min-width: 992px) {
      display: none;
    }
  }  
`
