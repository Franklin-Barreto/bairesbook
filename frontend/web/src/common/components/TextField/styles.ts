import styled from 'styled-components'

export const Input = styled.input`
  border: none;
  background: transparent;
  flex-grow: 1;

  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  border: solid 1px;
  padding: 0px 16px;

  background: ${({ theme }) => theme.palette.search.background};
  border-color: ${({ theme }) => theme.palette.blocks.border};

  font-size: 0.875rem;

  &:focus {
    border-color: ${({ theme }) => theme.palette.font.active};
  }
`

export const TextArea = styled.textarea`
  border: none;
  background: transparent;
  flex-grow: 1;

  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  border: solid 1px;
  padding: 0px 16px;

  background: ${({ theme }) => theme.palette.search.background};
  border-color: ${({ theme }) => theme.palette.blocks.border};

  font-size: 0.875rem;

  &:focus {
    border-color: ${({ theme }) => theme.palette.font.active};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.primary};
  margin-bottom: 0.5rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
