'use client'

const { useEffect, useState } = require("react")

export const useFontsLoaded = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
    })

    setTimeout(() => {
      if (!fontsLoaded) {
        setFontsLoaded(true)
      }
    }, 2000)
  }, [])

  return { fontsLoaded }
}
