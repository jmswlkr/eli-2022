// External lib
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Internal lib
import { baseUrl } from '@/utils/cloudinary.js'

// Styling & Animation
import {
  blurFadeIn,
  fadeSlideUpShort,
} from 'animation/fade'
import { phases, smooth } from 'animation/transition'
import {
  hero,
  heroImages,
  bg,
  fg,
  shade,
  heroTextContent,
  title,
  article,
  noun,
  subtitle,
  btn,
  logoContainer,
  fadeTransitionBar
} from './hero.module.scss'
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'
import { Logo } from '@/elements/svg/logo'

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroImages}>
        <AnimatePresence>
          <motion.div
            key='shade'
            className={shade}
            {...blurFadeIn}
            initial='visible'
            animate='hidden'
            transition={smooth(3, 0)}
          />
          <motion.img
            className={bg}
            key='img1'
            src={baseUrl('BG-mountains--rs_xvt0mx', 'best')}
            alt='mountains bg'
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 1)}
          />
          <motion.img
            className={fg}
            key='img2'
            src={baseUrl('FG-girl--rs_tum4ix', 'best')}
            alt='girl fg'
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 2)}
          />
        </AnimatePresence>
        <div className={fadeTransitionBar}/>
      </div>
      <div className={heroTextContent}>
        <h1 className={title}>
          <span className={article}>The</span>
          <span className={noun}>Embodied Learning Institute</span>
        </h1>
        <p className={subtitle}>Learn to Thrive.</p>
        <div className={btn}>
          <ArrowBtn>Get Started</ArrowBtn>
        </div>
        <div className={logoContainer}>
          <Logo />
        </div>
      </div>
    </section>
  )
}
