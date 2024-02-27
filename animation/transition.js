
// Animation Phase Objects
export const phases = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
}

export const scrollPhases = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  exit: 'hidden',
}


// Animation Transition Objects
export const smooth = (duration = 1, delay = 0) => {
  return {
    delay,
    duration,
    type: 'tween',
    transition: 'var(--smooth-framer)',
  }
}

export const smoothStagger = (duration = 2.5) => {
  return {
    duration: duration,
    type: 'tween',
    transition: 'var(--smooth-framer)',
    stagggerChildren: 0.5,
  }
}