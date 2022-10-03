import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { baseUrl } from '@/utils/cloudinary'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

import { slideFadeInTop, slideInTopShort } from 'animation/slide'
import { smooth } from 'animation/transition'
import { animationProps } from 'animation/animate'

import {
  intro,
  sectionLabel,
  quote,
  collage,
  collageImg,
  sec,
  ter,
  collagePrimary,
  collageTextContent,
  sectionAccent,
  title,
  blurb,
  blurbEmph,
  btn,
  collageMainImg,
} from './intro.module.scss'

export const Intro = () => {
  const [sectionRef, sectionInView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (sectionInView) {
      controls.start('visible')
    }
  }, [sectionInView, controls])

  return (
    <section className={intro} ref={sectionRef} id="intro">
      <div className={collage}>
        <motion.div
          className={collagePrimary}
          {...animationProps({ controls, del: 0.25, dur: 1.5 })}
        >
          <img
            src={baseUrl('bench-girl_lfbyyl', 'eco')}
            alt='girl watching sunset on bench'
          />
          <div className={collageTextContent}>
            <SectionHeader title='A new beginning.' />
            <p className={blurb}>
              The Embodied Learning Institute (ELI) is an organization founded
              by Dr. Ali  (MSW, Ph.D.). Dr. Ali’s passion is helping individuals
              and organizations thrive via the 4 pillars of Embodied Enoughness:{' '}
              <br />{' '}
              <span className={blurbEmph}>
               somatic sensibility, <br /> dynamic discernment, <br /> leaderful living, <br/>
                and wholehearted presence.
              </span>
            </p>
            <div className={btn}>
              <ArrowBtn text='About ELI' pageLink={`/about`} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`${collageImg} ${sec}`}
          {...animationProps({ controls })}
        >
          <img
            src={baseUrl('cloudy-hills_uadnic', 'eco')}
            alt='girl watching sunset on bench'
          />
        </motion.div>

        <motion.div
          className={`${collageImg} ${ter}`}
          {...animationProps({ controls, del: 1 })}
        >
          <img
            src={baseUrl('lily_qzb4mr', 'eco')}
            alt='girl watching sunset on bench'
          />
        </motion.div>
      </div>
    </section>
  )
}
