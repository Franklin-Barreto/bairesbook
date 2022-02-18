import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  max-width: 26.25rem;
  height: 3rem;
  position: relative;

  input {
    appearance: none;
    border: none;
    outline: none;

    width: 100%;
    height: 3rem;
    padding-left: 3.75rem;
    padding-right: 1rem;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.palette.search.background};

    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.search.value};

    &::placeholder {
      color: ${({ theme }) => theme.palette.search.placeholder};
    }

    &:focus {
      border: solid 1px;
      border-color: ${({ theme }) => theme.palette.search.outline};
    }
  }
`

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 15px;
`
