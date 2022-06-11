// External lib
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import {
  useReducedMotion,
  useSpring,
  useTransform,
  useViewportScroll,
  motion,
} from 'framer-motion'

import {
  plxContainer,
  fg,
  bg,
} from './parallax.module.scss'

export const Parallax = ({ children, offset = 0 }) => {
  const prefersReducedMotion = useReducedMotion()
  const [plxTop, setPlxTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const plxRef = useRef(null)

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    console.log("scrollY changed!", scrollY);
  })
  

  // start animating our element when we've scrolled it into view
  const initial = plxTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = plxTop + offset

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [offset, -offset]
  )
  // apply a spring to ease the result
  const y = useSpring(yRange, {
    stiffness: 400,
    damping: 90,
  })
  useLayoutEffect(() => {
    const plxElement = plxRef.current

    const onResize = () => {
      setPlxTop(
        plxElement.getBoundingClientRect().top +
          window.scrollY || window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () =>
      window.removeEventListener('resize', onResize)
  }, [plxRef])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      className={plxContainer}
      ref={plxRef}
      style={{ y }}
    >
      <motion.div className={fg}>{children[0]}</motion.div>
      <motion.div className={bg}>{children[1]}</motion.div>
    </motion.div>
  )
}
