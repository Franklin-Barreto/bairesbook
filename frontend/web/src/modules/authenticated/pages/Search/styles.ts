import styled, { css } from 'styled-components'

interface Props {
  selected?: boolean
}

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

export const Label = styled.span`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.font.secondary};
`

export const Term = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.primary};
  margin-bottom: 2rem;
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
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

export const Filters = styled.div`
  display: flex;
  width: fit-content;
  height: 5rem;
`

export const Filter = styled.button`
  background: transparent;
  border: none;
  position: relative;

  height: 5rem;
  padding: 0px 2rem;
  cursor: pointer;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.primary};

  transition: all 0.2s ease-in-out; 

  &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -1px;
      left: 50%;
      margin-left: -30px;
      border-radius: 1px;
      z-index: -1;
      opacity: 0;

      width: 3.75rem;
      height: 4px;
      background: ${({ theme }) => theme.palette.font.active};

      transition: opacity 0.2s ease-in-out;
    }


  ${({ selected }: Props) => selected && css`
    color: ${({ theme }) => theme.palette.font.active};
    pointer-events: none;

    &::after {
      opacity: 1;
    }
  `}
`
