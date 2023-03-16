import { useEffect } from 'react'

export const useScrollLinks = (targetHash = null) => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = targetHash || window.location.hash

    if (!hash) return

    const headerOffset = window.innerHeight * 0.09 || 70
    const contactPos = document
      .querySelector('#contact')
      .getBoundingClientRect().top
    console.log('contactPos: ', contactPos)

    // Only proceed if target is a single hash tag
    const startWithHashRegex = /^#\w+/g
    if (!startWithHashRegex.test(hash)) return

    let target = document.querySelectorAll(`${hash}`)[0]
    console.log('target: ', target);

    if (!target) return

    const elementPosition = target.getBoundingClientRect().top
    console.log('elementPosition: ', elementPosition)
    // const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    const offsetPosition =
      elementPosition + window.pageYOffset + window.innerHeight
    console.log('offsetPosition: ', offsetPosition)

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }, [targetHash])
}