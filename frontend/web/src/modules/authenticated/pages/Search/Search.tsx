import React from 'react'
import { useParams } from 'react-router-dom'

export const Search: React.FC = () => {
  const params = useParams()

  return (
    <div>
      <span>Search term</span><br />{params.term}</div>
  )
}
