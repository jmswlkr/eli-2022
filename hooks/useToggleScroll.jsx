'use client';

import { useEffect, useState } from 'react'

export const useToggleScroll = (isDisabled = false) => {
  const [scrollDisabled, setScrollDisabled] = useState(null)

  // set with hook arg.
  useEffect(() => {
    setScrollDisabled(isDisabled)
  }, [isDisabled])

  // set with state.
  useEffect(() => {
    const html = document.documentElement
    html.style.overflow = scrollDisabled ? 'hidden' : 'auto'
  }, [scrollDisabled])

  return { scrollDisabled, setScrollDisabled }
}
