import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const useAnimationControls = () => {
  const [sectionRef, sectionInView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (sectionInView || window.innerWidth < 1024) {
      controls.start('visible')
    }
  }, [sectionInView, controls])

  return { sectionRef, controls }
}
