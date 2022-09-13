import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { baseUrl } from '@/utils/cloudinary'

import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'
import { FlowerIcon, StonesIcon, YogaIcon } from '@/svg/pillar-icons'

import {
  pillars,
  sectionAccent,
  fadeTransitionBar,
  shade,
  top,
  bot,
  pillarsImageContainer,
  fg,
  bg,
  pillarsTextContent,
  blurb,
  title,
  subtitle,
  text,
  mText,
  pillarsContainer,
  pillar,
  icon,
  btn,
  dots,
} from './pillars.module.scss'

const pillarData = [
  {
    id: 'mindful-01',
    path: '/',
    title: (
      <>
        Mindful <br /> Living
      </>
    ),
    icon: <StonesIcon />,
  },
  {
    id: 'embodied-02',
    path: '/',
    title: (
      <>
        Embodied <br /> Learning
      </>
    ),
    icon: <FlowerIcon />,
  },
  {
    id: 'presence-03',
    path: '/',
    title: (
      <>
        Wholehearted <br /> Presence
      </>
    ),
    icon: <YogaIcon />,
  },
]

export const Pillars = () => {
  return (
    <section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>Three Pillars</h2>
          <h4 className={subtitle}>
            Of the <br /> Embodied Learning Institute
          </h4>
          <span className={sectionAccent}>
            <WaveCircles />
          </span>
          <p className={text}>
            <span>
              Paragraph text: liquam tempor risus lectus, eu bibendum eros
              fermentum quis. Mauris faucibus eros nec tristique volutpat.
              pretium diam ut lacinia interdum.
            </span>
          </p>
        </div>
        <div className={pillarsContainer}>
          {pillarData.map((plr, idx) => {
            return (
              <div key={plr.id} className={pillar}>
                <h3 className={title}>{plr.title}</h3>
                <p className={mText}>
                  Aliquam tempor risus lectus, eu bibendum eros fermentum quis.
                  Mauris faucibus eros nec tristique volutpat.{' '}
                </p>
                <span className={icon}>{plr.icon}</span>
                <span className={btn}>
                  <ArrowBtn lightText arrowColor='var(--accent)' />
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={pillarsImageContainer}>
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
        {pillarData.map((p) => (
          <span key={p.id}>•</span>
        ))}
      </div>
    </section>
  )
}
