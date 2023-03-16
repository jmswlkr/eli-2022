import { useEffect, useState } from 'react'

export const useScrollOnMount = () => {
  // if the page is loaded with a hash, scroll to it, but only on first mount
  const [scrolledToHash, setScrolledToHash] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    console.log('hash: ', hash)
    if (hash.length > 0 && !scrolledToHash) {
      window.location.hash = ''
      window.location.hash = hash
      setScrolledToHash(true)
    }
  }, [])

  useEffect(() => {
    console.log('scrolledToHash changed: ', scrolledToHash)
  }, [scrolledToHash])
}
