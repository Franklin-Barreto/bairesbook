import styled from 'styled-components'

export const Primary = styled.button`
  background: transparent;
  border: none;

  height: 3rem;

  padding: 0px 1.5rem;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;

  background: ${({ theme }) => theme.palette.button.primary.background};
  color: ${({ theme }) => theme.palette.button.primary.color};
`

export const Secondary = styled.button`
  background: transparent;
  border: none;

  height: 3rem;

  padding: 0px 1.5rem;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;

  border: solid 1px;

  border-color: ${({ theme }) => theme.palette.button.secondary.border};
  color: ${({ theme }) => theme.palette.button.secondary.color};
`
