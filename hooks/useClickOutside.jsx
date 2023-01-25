import { useEffect, useRef } from 'react'

export const useClickOutside = (onClickOutside) => {
  // ! REFACTOR !
  // Use a query selector in place of ref, so that unique ids can be used.
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      // console.log('e from oco hc: ', e);
      onClickOutside()
    }

    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [onClickOutside])
  
  return ref;
}
