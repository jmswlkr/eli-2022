import { useEffect } from 'react'

export const useActionOnKey = (action, key = 'Escape') => {
  useEffect(() => {
    const close = (e) => {
      if (e.key === key) {
        action()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [action, key])
}
