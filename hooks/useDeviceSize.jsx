import { useEffect, useState } from 'react'

export const useDeviceSize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesk, setIsDesk] = useState(false)

  useEffect(() => {
    function setBreakpoints() {
      setIsMobile(window.innerWidth <= 592)
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 592)
      setIsDesk(window.innerWidth > 1024)
    }

    window.addEventListener('resize', setBreakpoints)

    return () => window.addEventListener('resize', setBreakpoints)
  }, [])

  return { isTablet, isMobile, isDesk }
}
