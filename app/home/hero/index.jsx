'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { LinkButton } from '@/ui-components'
import { phases, smooth } from '@/animation'
import { fadeIn, fadeInStagger } from '@/animation'
import { useFontsLoaded } from '@/hooks'

export const HeroSection = () => {
  return (
    <section className='HERO_SECTION isolate hero-container-1 relative w-full'>
      <HeroText />
      <HeroBG />
    </section>
  )
}

function HeroText() {
  const { fontsLoaded } = useFontsLoaded()

  return (
    <motion.div
      {...phases}
      {...fadeIn}
      className='HERO_TEXT max-w-4/5 full flex-col-center gap-lg relative z-10'
    >
      <motion.h1
        {...phases}
        {...fadeInStagger}
        className='head-1 flex-col-center gap-sm text-center'
      >
        <motion.span {...fadeIn} className='text-white'>
          Transformational Change
        </motion.span>
        <motion.span
          {...fadeIn}
          className='text-[20px] lg:text-[24px] uppercase tracking-[3px] text-white'
        >
          Through
        </motion.span>
        <motion.span {...fadeIn} className='text-primary-300'>
          Embodied Learning
        </motion.span>
        <motion.span {...fadeIn} className='span'>
          <LinkButton
            text='Get Started'
            path='/#intro'
            classes='solid sm lg:med !bg-primary-300 !border-none'
          />
        </motion.span>
      </motion.h1>
    </motion.div>
  )
}

function HeroBG() {
  return (
    <AnimatePresence>
      <div className='HERO_BG isolate absolute-center z-0 w-screen h-full'>
        <motion.div className='SHADE bg-gradient-to-r from-primary-500/70 to-accent-300/50 absolute-shade full z-10' />
        <motion.div className='SHADE_DARK bg-black/40 absolute-shade full z-10' />
        <motion.video
          {...phases}
          {...fadeIn}
          transition={smooth()}
          autoPlay
          loop
          muted
          src='https://res.cloudinary.com/jameswalker-work/video/upload/f_auto,q_auto:good/v1674832419/ELI/ocean_qxigpo.mp4'
          className='VIDEO absolute-img full z-0'
        />
      </div>
    </AnimatePresence>
  )
}
