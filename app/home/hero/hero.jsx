'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { phases, smooth } from 'animation/transition'
import { blurFadeIn } from 'animation/fade'

import {
  hero,
  heroImages,
  bg,
  shade,
  heroTextContent,
  tagline,
  slogan,
  btn,
} from './hero.module.scss'

export const Hero = ({ heroHeaderLines, heroButtonText }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
    })
  }, [controls])

  useEffect(() => {
    setTimeout(() => {
      if (!fontsLoaded) {
        setFontsLoaded(true)
      }
    }, 3000)
  }, [fontsLoaded])

  // TODO: Add an image if video fails to load.

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
            src={`https://res.cloudinary.com/jameswalker-work/video/upload/f_auto,q_auto:good/v1674832419/ELI/ocean_qxigpo.mp4`}
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
      >
        <div className={tagline}>
          <h2 className={slogan}>
            <span>{heroHeaderLines[0]}</span>
            <em>{heroHeaderLines[1]}</em>
          </h2>
          <div className={btn}>
            <a href={'/#intro'}>
              <button className='general-btn solid light'>
                {heroButtonText}
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
