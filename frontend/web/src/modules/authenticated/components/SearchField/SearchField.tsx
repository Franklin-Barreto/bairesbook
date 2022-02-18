import React, { ChangeEvent } from 'react'
import { useTheme } from 'styled-components'

import { Container, SearchIcon } from './styles'

interface SearchFieldProps {
  value: string
  onChange: (value: string) => void
}

export const SearchField: React.FC<SearchFieldProps> = ({ value, onChange }) => {
  const theme = useTheme()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Container>
      <input type="text" value={value} onChange={handleChange} placeholder='Search' />
      <SearchIcon color={theme.palette.search.icon} size={18} />
    </Container>
  )
}
