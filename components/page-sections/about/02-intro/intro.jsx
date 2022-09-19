import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { aboutImages, aboutIntroText } from '@/data/about-data'
import { baseUrl } from '@/utils/cloudinary'

import { SectionHeader } from '@/elements/section-header'

import { animationProps } from 'animation/animate'

import {
  intro,
  collage,
  collageImg,
  introTextContent,
  main as mainStyle,
  sub as subStyle,
  tenetList as tenetStyle,
  tenets,
  tenet,
  title,
  blurb,
} from './intro.module.scss'



export const Intro = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { main, sub, tenetList } = aboutIntroText
  const [sectionRef, sectionInView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (sectionInView) {
      controls.start('visible')
    }
  }, [sectionInView, controls])

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  

  return (
    <section className={intro} ref={sectionRef}>
      <div className={collage}>
        {aboutImages.map((abImg, idx) => {
          return (
            <motion.span
              key={idx}
              className={collageImg}
              {...animationProps({ controls, del: (idx + 1) * 0.5, dur: 1.5 })}
            >
              <img src={baseUrl(abImg.urlFrag, 'eco')} alt={abImg.altTag} />
            </motion.span>
          )
        })}
      </div>
      <div className={introTextContent}>
        <div className={mainStyle}>
          <SectionHeader title={main.title} withLabel={true} />
          <p className={blurb}>{main.blurb}</p>
        </div>
        <div className={subStyle}>
          <h4 className={title}>{sub.title}</h4>
          <p className={blurb}>{sub.blurb}</p>
        </div>
        <div className={tenetStyle}>
          <h4 className={title}>{tenetList.title}</h4>
          <ul className={tenets}>
            {tenetList.tenets.map((tnt, idx) => {
              return (
                <li key={idx} className={tenet}>
                  {tnt}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
