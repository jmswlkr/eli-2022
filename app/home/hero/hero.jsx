'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { phases, smooth } from 'animation/transition'
import { blurFadeIn, fadeSlideUpShort } from 'animation/fade'

import {
  hero,
  heroImages,
  bg,
  shade,
  heroTextContent,
  tagline,
  slogan,
  small,
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
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {fontsLoaded && (
          <motion.div
            transition={smooth(3, 1)}
            {...phases}
            {...fadeIn}
            className={heroTextContent}
          >
            <div className={tagline}>
              <h2 className={slogan}>
                <span>{heroHeaderLines[0]}</span>
                <span className={small}>{heroHeaderLines[1]}</span>
                <em>{heroHeaderLines[2]}</em>
              </h2>
              <div className={btn}>
                <a general-btn solid light href={'/#intro'}>
                  {heroButtonText}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
