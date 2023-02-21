import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'
import { pillarData } from './pillar-data-old'

import { WaveCircles } from '@/elements/svg/wave-circles'

import { fadeIn } from 'animation/fade'
import { phases } from 'animation/transition'

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
  subtitle,
  text,
  pillarsSlider,
  pillarCardsContainer,
  cardWrapper,
  pillarCard,
  activeCard,
  standardCard,
  cardIcon,
  cardText,
  padded,
  cardHeading,
} from './pillars.module.scss'
import { useDeviceSize } from 'hooks/useDeviceSize'

export const Pillars = () => {
  const [curPillar, setCurPillar] = useState(null)

  const handleHoverPillar = (hoveredIdx) => {
    if ([0, 1, 2, 3].includes(hoveredIdx)) {
      setCurPillar(pillarData[hoveredIdx]?.id)
    } else {
      setCurPillar(null)
    }
  }

  // TODO: Pillars should have permanent text when grid changes to 2x2.

  return (
    <motion.section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>ELI Pillars</h2>
          <p className={subtitle}>The Practice of Embodied Enoughness</p>
          <p className={text}>
            <span>
              Life is a process to be experienced, not a series of problems to
              be solved.
            </span>
            <span>
              Unfortunately, our culture teaches a lot about linear thinking,
              certainty, control, and individualism, and very little about
              systems thinking, ambiguity, surrender, and interconnectedness.
              Since we are what we practice, this has significant implications.
            </span>
            <span>
              ELI’s 4 pillars are a way to practice
              <strong> Embodied Enoughness</strong>. A way to build Embodied
              Enoughness into our neural pathways, personal relationships,
              communities, organizations, and culture writ large.
            </span>
          </p>
        </div>
        <div className={pillarCardsContainer}>
          {pillarData.map((plr, idx) => {
            return (
              <PillarCard
                key={plr.id}
                idx={idx}
                {...plr}
                curPillar={curPillar}
                handleHoverPillar={handleHoverPillar}
              />
            )
          })}
        </div>
      </div>
      <div className={`${pillarsImageContainer} ${curPillar ? darken : ''}`}>
        <div className={shade} />
        <img
          className={fg}
          src={baseUrl('center-tree_jxzinq', 'good')}
          alt=''
        />
        <img className={bg} src={baseUrl('BG_no-tree_fsmhkc', 'good')} alt='' />
      </div>
    </motion.section>
  )
}

function PillarCard({
  id,
  idx,
  text,
  title,
  icon,
  curPillar,
  handleHoverPillar,
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const deemph = curPillar && curPillar !== id
  const active = curPillar && curPillar === id
  
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 1400)
  }, [])
  


  return (
    <article
      className={cardWrapper}
      onMouseEnter={() => {
        handleHoverPillar(idx)
      }}
      onMouseLeave={() => {
        handleHoverPillar()
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {(active || isSmallScreen) && (
          <motion.div
            {...phases}
            {...fadeIn}
            className={`
              ${activeCard} 
              ${pillarCard} 
            `}
          >
            <h6 className={cardHeading}>{title}</h6>
            <p className={`${cardText} ${idx !== 2 ? padded : ''}`}>{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {!active && !isSmallScreen && (
          <motion.div {...phases} {...fadeIn} className={pillarCard}>
            <h6 className={cardHeading}>{title}</h6>
            <div className={cardIcon}>{icon}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
