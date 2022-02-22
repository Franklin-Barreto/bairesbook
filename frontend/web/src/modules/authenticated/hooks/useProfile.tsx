import { useEffect, useState } from 'react'
import api from '../../../api'
import { User } from '../../../interfaces'

function useProfile(id: number) {
  const [data, setData] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const query = () => {
    api.get<User>(`user/${id}`)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      }).catch(err => {
        setError(JSON.stringify(err))
      }).finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    query()
  }, [id])

  return {
    data,
    loading,
    error
  }
}

export default useProfile
