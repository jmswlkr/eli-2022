import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import {
  container,
  imageWrap,
  textWrap,
  header
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
    <section className={container}>
      <div className={textWrap}>
        <h1 className={header}>
          <span>About the</span>
          <span>Embodied Learning</span>
          <span>Institute</span>
        </h1>
      </div>
      <div className={imageWrap}>
        <img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1676831310/ELI/karl-magnuson-HQR_JXd-fPs-unsplash_spk0t3.jpg'
          alt='3 travelers stand silhoutted in front of a blue sky over an orange sunset in a hazy valley'
        />
      </div>
    </section>
  )
}
