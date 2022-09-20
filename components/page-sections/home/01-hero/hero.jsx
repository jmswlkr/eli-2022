import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary.js'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { Logo } from 'components/elements/svg/logo'

import { phases, smooth } from 'animation/transition'
import { animationProps } from 'animation/animate'
import { blurFadeIn, fadeSlideUpShort } from 'animation/fade'

import {
  hero,
  heroImages,
  bg,
  fg,
  shade,
  heroTextContent,
  companyTitle,
  title,
  logoWrap,
  tagline,
  slogan,
  btn,
  fadeTransitionBar,
} from './hero.module.scss'

export const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
      controls.start('visible')
    })
  }, [controls])

  useEffect(() => {
    setTimeout(() => {
      if (!fontsLoaded) {
        setFontsLoaded(true)
      }
    }, 3000)
  }, [fontsLoaded])

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
          <video
            key='img1'
            className={bg}
            src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1663676344/ELI/beach_tlfnut.mp4`}
            autoPlay
            loop
            muted
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 1)}
          />
          {/* <motion.img
            className={bg}
            key='img1'
            src={baseUrl('tiedie-woman_dgw1ht', 'best')}
            alt='oceanview woman'
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 1)}
          /> */}
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
        <motion.div
          className={fadeTransitionBar}
          {...fadeSlideUpShort}
          {...phases}
          transition={smooth(1, 0)}
        />
      </div>
      <motion.div
        className={heroTextContent}
        {...animationProps({ controls, animation: blurFadeIn, del: 2 })}
      >
        <div className={companyTitle}>
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
      </motion.div>
    </section>
  )
}
