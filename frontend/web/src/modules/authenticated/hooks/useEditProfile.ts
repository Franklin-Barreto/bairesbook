import { useState, useEffect } from 'react'
import api from '../../../api'

function useEditProfile(userId: number) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)

  const query = () => {
    api.get(`user/${userId}`)
      .then(response => {
        const { data } = response
        console.log(data)
        setData(data[0])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const update = () => {
    api.post('user')
  }

  useEffect(() => {
    query()
  }, [userId])

  return {
    data,
    loading,
    update
  }
}

export default useEditProfile
