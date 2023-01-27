import React, { useEffect, useState } from 'react'
import { animate, AnimatePresence, motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'
import { pillarData } from './pillar-data'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'

import {
  pillars,
  sectionAccent,
  shade,
  pillarsImageContainer,
  darken,
  fg,
  bg,
  pillarsTextContent,
  blurb,
  title,
  text,
  genText,
  specText,
  mText,
  pillarsContainer,
  pillar,
  fadePillar,
  icon,
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

  // TODO: Fade animate between pillar text changes.

  return (
    <motion.section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>ELI Pillars</h2>
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
                  Life is a process to be experienced, not a series of problems
                  to be solved. Unfortunately, our culture teaches a lot about
                  linear thinking, certainty, control, and individualism, and
                  very little about systems thinking, ambiguity, surrender, and
                  interconnectedness. Since we are what we practice, this has
                  significant implications. ELI’s 4 pillars are a way to
                  practice Embodied Enoughness. A way to build Embodied
                  Enoughness into our neural pathways, personal relationships,
                  communities, organizations, and culture writ large.
                </motion.span>
              </AnimatePresence>
            )}
          </p>
        </div>
        <div className={pillarsContainer}>
          {pillarData.map((plr, idx) => {
            return (
              <div
                key={plr.id}
                className={`${pillar} ${
                  curPillar && plr.text !== curPillar && fadePillar
                }`}
                // onClick={() => {
                //   handleHoverPillar(idx)
                // }}
                onMouseEnter={() => {
                  handleHoverPillar(idx)
                }}
                onMouseLeave={() => {
                  handleHoverPillar()
                }}
              >
                <h3 className={title}>{plr.title}</h3>
                <p className={mText}>{plr.text} </p>
                <span className={icon}>{plr.icon}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`${pillarsImageContainer} ${curPillar ? darken : ''}`}>
        {/* <div className={`${fadeTransitionBar} ${top}`} /> */}
        <div className={shade} />
        <img
          className={fg}
          src={baseUrl('center-tree_jxzinq', 'good')}
          alt=''
        />
        <img className={bg} src={baseUrl('BG_no-tree_fsmhkc', 'good')} alt='' />
        {/* <div className={`${fadeTransitionBar} ${bot}`} /> */}
      </div>
      <div className={dots}>
        {pillarData.map((p) => {
          const active = p.text === curPillar
          return (
            <span key={p.id} className={active ? activeDot : ''}>
              •
            </span>
          )
        })}
      </div>
    </motion.section>
  )
}
