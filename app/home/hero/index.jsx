'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/ui-components'
import { phases, smooth } from '@/animation'
import { fadeIn } from '@/animation'
import { useFontsLoaded } from '@/hooks'


export const HeroSection = (props) => {
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
      <h1 className='head-1 flex-col-center gap-sm text-center'>
        <span className='text-white'>Transformational Change</span>
        <span className='text-[20px] lg:text-[24px] uppercase tracking-[3px] text-white'>
          Through
        </span>
        <span className='text-primary-300'>Embodied Learning</span>
      </h1>
      <Button
        text='Get Started'
        path='/#intro'
        classes='solid sm lg:med !bg-primary-300 !border-none'
      />
    </motion.div>
  )
}

function HeroBG() {
  return (
    <div className='HERO_BG isolate absolute-center z-0 w-screen h-full'>
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  )
}
