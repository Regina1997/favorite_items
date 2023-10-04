import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useItemSearch(query, pageNumber, url, limit) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setItems([])
  }, [query, limit])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: url,
      params: { q: query, _page: pageNumber, _limit: limit },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setItems(prevBooks => {
        return [...prevBooks, ...res.data]
      })
      setHasMore(res.headers['x-total-count'])
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber, limit, url])

  return { loading, error, items, hasMore }
}