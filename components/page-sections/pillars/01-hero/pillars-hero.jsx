import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'

import {
  hero,
  content,
  heroImg,
  shade,
  heroText,
  quote,
  symbol,
  text,
  attr,
  header,
  title,
  subtitle,
  blurb,
} from './pillars-hero.module.scss'
import { QuoteMark } from '@/elements/svg/quote-mark'
import { animationProps } from 'animation/animate'
import { blurFadeIn } from 'animation/fade'
import { slideUpFadeIn } from 'animation/slide'

export const PillarsHero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
      controls.start('visible')
    })
  }, [controls])

  return (
    <section className={hero}>
      <div className={content}>
        <motion.div
          className={heroImg}
          {...animationProps({ controls, dur: 2.5, animation: slideUpFadeIn })}
        >
          <span className={shade} />
          <img src={baseUrl('sequoia-full_wdznnq', 'good')} alt='' />
        </motion.div>
        <motion.div
          className={heroText}
          {...animationProps({ controls, dur: 1, animation: blurFadeIn })}
        >
          <aside className={quote}>
            <span className={symbol}>
              <QuoteMark />
            </span>
            <em className={text}>
              Etiam vehicula pretium mi ut rhoncus. <br /> Mauris faucibus eros
              nec tristique volutpat.
            </em>
            <b className={attr}>- Jean Luc Godard</b>
          </aside>
          <h1 className={header}>
            <div className={title}>
              <span>The</span>
              <span>Three Pillars</span>
            </div>
            <span className={subtitle}>
              <span>Of the</span>
              <span>
                Embodied <br /> Learning Institute
              </span>
            </span>
          </h1>
          <p className={blurb}>
            Quisque hendrerit mauris odio, eu lacinia augue bibendum ut. Nulla
            vitae massa eget libero maximus faucibus sit amet ac eros.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
