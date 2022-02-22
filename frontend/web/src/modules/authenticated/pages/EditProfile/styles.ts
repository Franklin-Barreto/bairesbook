import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 2rem;
  overflow-y: auto;
`
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;

  border-radius: 0.5rem;
  overflow: hidden;

  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0px 1.5rem;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.palette.blocks.border};

  &::before {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 0;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.primary};
  z-index: 1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`
