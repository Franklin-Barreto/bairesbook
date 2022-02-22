import { useState, useEffect } from 'react'
import api from '../../../api'
import useAuth from '../../../hooks/useAuth'
import { PostInterface } from '../../../interfaces'

interface PostPayload {
  title: string,
  text: string,
  image: string,
  isArticle: boolean
}

interface SearchReturn {
  data: PostInterface[] | null
  loading: boolean
  error: string | null
  create: ({
    title,
    text,
    image,
    isArticle
  }:PostPayload) => void
}

function useFeed(): SearchReturn {
  const [data, setData] = useState<PostInterface[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { currentUser } = useAuth()

  const query = () => {
    api.get<PostInterface[]>('post')
      .then(response => {
        const { data } = response
        console.log(data)
        setData(data)
      })
      .catch(err => {
        setError(JSON.stringify(err))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const create = ({
    title,
    text,
    image,
    isArticle
  }: PostPayload) => {
    const payload = JSON.stringify({
      title,
      text,
      image,
      isArticle
    })
    api.post(`/${currentUser?.id}/post`, payload)
      .then(response => {
        setLoading(true)
        query()
      })
      .catch(err => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    query()
  }, [])

  return {
    data,
    loading,
    error,
    create
  }
}

export default useFeed
