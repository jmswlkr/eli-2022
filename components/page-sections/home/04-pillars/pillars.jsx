import React, { useEffect, useState } from 'react'
import { animate, AnimatePresence, motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'
import { pillarData } from './pillar-data'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'

import {
  pillars,
  sectionAccent,
  fadeTransitionBar,
  shade,
  top,
  bot,
  pillarsImageContainer,
  darken,
  fg,
  bg,
  pillarsTextContent,
  blurb,
  title,
  subtitle,
  text,
  genText,
  specText,
  mText,
  pillarsContainer,
  pillar,
  fadePillar,
  icon,
  btn,
  dots,
  activeDot,
} from './pillars.module.scss'
import { fadeIn } from 'animation/fade'
import { animationProps } from 'animation/animate'

export const Pillars = () => {
  const [curPillar, setCurPillar] = useState(null)

  const handleHoverPillar = (hoveredIdx) => {
    if ([0, 1, 2, 3].includes(hoveredIdx)) {
      setCurPillar(pillarData[hoveredIdx]?.text)
    } else {
      setCurPillar(null)
    }
  }

  return (
    <motion.section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>The Four Pillars</h2>
          <h4 className={subtitle}>
            Of <br /> Embodied Enoughness 
          </h4>
          <span className={sectionAccent}>
            <WaveCircles />
          </span>
          <p className={text}>
            {curPillar ? (
              <AnimatePresence exitBeforeEnter>
                <motion.span
                  key={'spec-text'}
                  className={specText}
                  {...animationProps({ animation: fadeIn, dur: 0.25 })}
                >
                  {curPillar}
                </motion.span>
              </AnimatePresence>
            ) : (
              <AnimatePresence exitBeforeEnter>
                <motion.span
                  key={'gen-text'}
                  className={genText}
                  {...animationProps({ animation: fadeIn, dur: 0.25 })}
                >
                  The four pillars of Embodied Enoughness - Somatic
                  Sensibilities, Wholehearted Presence, Dynamic Discernment, and
                  Leaderful Learning - are practiced-based ways of being that we
                  use to consciously shape how we live and lead.
                </motion.span>
              </AnimatePresence>
            )}
          </p>
        </div>
        <div className={pillarsContainer}>
          {pillarData.map((plr, idx) => {
            // console.log('is curPillar', plr === curPillar)

            return (
              <div
                key={plr.id}
                className={`${pillar} ${
                  curPillar && plr.text !== curPillar && fadePillar
                }`}
                /*
                  if curPillar && plr !==curPillar -> apply darken style
                */
                onMouseEnter={() => {
                  handleHoverPillar(idx)
                }}
                onMouseLeave={() => {
                  handleHoverPillar()
                }}
              >
                <h3 className={title}>{plr.title}</h3>
                <p className={mText}>
                  {plr.text}{' '}
                </p>
                <span className={icon}>{plr.icon}</span>
                {/* <span className={btn}>
                  <ArrowBtn lightText arrowColor='var(--accent)' />
                </span> */}
              </div>
            )
          })}
        </div>
      </div>
      <div className={`${pillarsImageContainer} ${curPillar ? darken : ''}`}>
        <div className={`${fadeTransitionBar} ${top}`} />
        <div className={shade} />
        <img
          className={fg}
          src={baseUrl('center-tree_jxzinq', 'good')}
          alt=''
        />
        <img className={bg} src={baseUrl('BG_no-tree_fsmhkc', 'good')} alt='' />
        <div className={`${fadeTransitionBar} ${bot}`} />
      </div>
      <div className={dots}>
        {pillarData.map((p) => {
          const active = p.text === curPillar
          return <span key={p.id} className={active ? activeDot : ''}>•</span>
})}
      </div>
    </motion.section>
  )
}
