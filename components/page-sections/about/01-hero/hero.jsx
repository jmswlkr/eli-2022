import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'

import {
  hero,
  heroBg,
  shade,
  fadeTransitionBar,
  heroTextContent,
  title,
  blurb,
  heroBtn,
} from './hero.module.scss'
import { animationProps } from 'animation/animate'
import { blurFadeIn } from 'animation/fade'

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
      <div className={heroBg}>
        <img src={baseUrl('sunlight-tree_ztqwxk', 'best')} alt='' />
        <div className={shade} />
        <div className={fadeTransitionBar} />
      </div>
      <motion.div className={heroTextContent} {...animationProps({ controls, animation: blurFadeIn })}>
        <h1 className={title}>
          <span>ELI</span>
          <span>About the Institute.</span>
        </h1>
        <p className={blurb}>
          Learn more about our history, our people, and the principles that
          drive us.
        </p>
        <span className={heroBtn}>
          <ArrowBtn lightText={true} arrowColor={'var(--accent)'} />
        </span>
      </motion.div>
    </section>
  )
}
