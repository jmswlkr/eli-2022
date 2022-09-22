import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'
import { pillarData } from './pillar-data'

import { WaveCircles } from '@/elements/svg/wave-circles'

import { animationProps } from '/animation/animate'
import { slideUpFadeIn } from '/animation/slide'

import {
  pillars,
  flexWrap,
  container,
  reverse,
  imgContent,
  textContent,
  title as titleStyle,
  mTitle,
  text as textStyle,
  accent,
  mAccent,
  outer,
  inner,
} from './pillars-sections.module.scss'



export const PillarsSections = () => {
    const [section1Ref, section1InView] = useInView()
    const [section2Ref, section2InView] = useInView()
    const [section3Ref, section3InView] = useInView()
    const controls = useAnimation()
    const controls2 = useAnimation()
    const controls3 = useAnimation()

    useEffect(() => {
      if (section1InView) {
        console.log('observer works')
      }
    }, [section1InView])

  return (
    <section className={pillars}>
      {pillarData.map(({ id, title, imgSlug, text, icon, color }, idx) => {
        const reversed = idx === 1


        return (
          <motion.div key={id} className={flexWrap} >
            <div className={`${container} ${reversed && reverse}`}>
              <h2 className={mTitle} style={{ color: color.p }}>
                <span>{title}</span>
                <span className={mAccent}>{icon}</span>
              </h2>
              <div className={imgContent}>
                <img src={baseUrl(imgSlug, 'eco')} alt={title} />
              </div>
              <div className={textContent}>
                <h2 className={titleStyle} style={{ color: color.p }}>
                  {title}
                </h2>
                <p className={textStyle}>{text}</p>
              </div>
              <div className={accent}>
                <span className={inner}>{icon}</span>
                <span className={outer}>
                  <WaveCircles color={color.s} />
                </span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}
