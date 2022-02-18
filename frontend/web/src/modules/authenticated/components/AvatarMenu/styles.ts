import styled from 'styled-components'

export const ProfilePic = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
`

export const Container = styled.div`
  position: relative;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  cursor: pointer;
`

export const Greeting = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.font.primary};

  margin-right: 0.75rem;

  strong {
    font-weight: 600;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  min-width: 100%;
  
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.blocks.container};
  box-shadow: ${({ theme }) => theme.palette.blocks.shadow};
  padding: 0.5rem 0;
`

export const OptionButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.palette.blocks.container};

  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
  
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.primary};
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.palette.blocks.background};
  }
`
