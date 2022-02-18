import styled from 'styled-components'

export const Button = styled.button`
  width: fit-content;
  max-width: 100%;
  height: 3rem;
  padding: 0 2rem;

  background: white;
  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.font.active};

  font-size: 1rem;
  color: ${({ theme }) => theme.palette.font.primary};

  cursor: pointer;

  display: flex;
  column-gap: 1rem;
  align-items: center;
`
