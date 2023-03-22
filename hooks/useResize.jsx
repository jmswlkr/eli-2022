import { useEffect } from 'react'

export const useResize = (onResize) => {
    useEffect(() => {

      window.addEventListener('resize', onResize)
      return () => window.addEventListener('resize', onResize)
    }, [onResize])
}
