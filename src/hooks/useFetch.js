import { useEffect, useState } from 'react'

function useData(url, options, initialState) {
  const [result, setResult] = useState(initialState)
  useEffect(() => {
    const abortController = new AbortController()
    fetch(`${process.env.REACT_APP_BASE_API_URL}${url}`, {
      ...options,
      signal: abortController.signal
    })
      .then((response) => response.json())
      .then((json) => {
        setResult(json)
      })
      .catch((error) => {
        // console.log({ error })
      })
    return () => {
      abortController.abort()
    }
  }, [url, options])
  return result
}

export default useData
