// External lib
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Internal lib
import { baseUrl } from '@/utils/cloudinary.js'

// Components
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { Logo } from 'components/elements/svg/logo'

// Styling & Animation
import { blurFadeIn, fadeSlideUpShort } from 'animation/fade'
import { phases, smooth } from 'animation/transition'

import {
  hero,
  heroImages,
  bg,
  fg,
  shade,
  heroTextContent,
  logoTitle,
  title,
  logoWrap,
  tagline,
  slogan,
  btn,
  fadeTransitionBar,
} from './hero.module.scss'

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroImages}>
        <AnimatePresence>
          <motion.div
            key='shade'
            className={shade}
            {...blurFadeIn}
            {...phases}
            transition={smooth(3, 0)}
          />
          <motion.img
            className={bg}
            key='img1'
            src={baseUrl('tiedie-woman_dgw1ht', 'best')}
            alt='oceanview woman'
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 1)}
          />
          {/* <motion.img
            className={fg}
            key='img2'
            src={baseUrl('FG-girl--rs_tum4ix', 'best')}
            alt='girl fg'
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 2)}
          /> */}
        </AnimatePresence>
        <div className={fadeTransitionBar} />
      </div>
      <div className={heroTextContent}>
        <div className={logoTitle}>
          <h1 className={title}>
            <span>The</span>
            <span>Embodied Learning Institute</span>
          </h1>
          <span className={logoWrap}>
            <Logo />
          </span>
        </div>
        <div className={tagline}>
          <h2 className={slogan}>
            Learn to <em>Thrive.</em>
          </h2>
          <div className={btn}>
            <ArrowBtn
              text='Get Started'
              arrowColor='var(--accent)'
              lightText={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
