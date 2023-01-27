import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary.js'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { Logo } from '@/elements/logo/logo'

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
import { Button } from '@/elements/general-btn/general-btn'

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
            // src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1663676344/ELI/beach_tlfnut.mp4`}
            src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1674832419/ELI/ocean_qxigpo.mp4`}
            autoPlay
            loop
            muted
            {...fadeSlideUpShort}
            {...phases}
            transition={smooth(3, 1)}
          />
        </AnimatePresence>
      </div>
      <motion.div
        className={heroTextContent}
        {...animationProps({ controls, animation: blurFadeIn, del: 2 })}
      >
        <div className={tagline}>
          <h2 className={slogan}>
            Learn to <em>Thrive.</em>
          </h2>
          <div className={btn}>
            <Button text='Get Started' path='/#intro' />
            {/* <ArrowBtn
              text='Get Started'
              arrowColor='var(--accent)'
              lightText={true}
              pageLink={`/#intro`}
            /> */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

