import { useEffect } from 'react'

export const useScrollOnMount = () => {

  // if the page is loaded with a hash, scroll to it

  useEffect(() => {
    const hash = window.location.hash
    if (hash.length > 0) {
      window.location.hash = ''
      window.location.hash = hash
    }
  })
}