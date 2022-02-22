import { useState, useEffect } from 'react'
import api from '../../../api'
import { User } from '../../../interfaces'

interface SearchReturn {
  data: User[] | null
  loading: boolean
  error: string | null
}

function useSearch(searchTerm: string, filter: 'all' | 'users' | 'skills'): SearchReturn {
  const [data, setData] = useState<User[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const queryString = filter === 'skills' ? `?skills.name_like=${searchTerm}` : `?name_like=${searchTerm}`

  const query = () => {
    api.get<User[]>(`user${queryString}`)
      .then(response => {
        const { data } = response
        setData(data)
      })
      .catch(err => {
        setError(JSON.stringify(err))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    query()
  }, [searchTerm, filter])

  return {
    data,
    loading,
    error
  }
}

export default useSearch
