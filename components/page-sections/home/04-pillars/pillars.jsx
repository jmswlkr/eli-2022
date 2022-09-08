// External lib
import React from 'react'
import Link from 'next/link'

// Internal lib
import { baseUrl } from '@/utils/cloudinary'

// Components
import { FlowerIcon } from 'components/elements/svg/flower'
import { StonesIcon } from 'components/elements/svg/stones'
import { YogaIcon } from 'components/elements/svg/yoga'

// Styling & Animation
import {
  pillars,
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
  pillarsContainer,
  pillar,
  icon,
  btn,
} from './pillars.module.scss'
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'

const pillarData = [
  {
    id: 'mindful-01',
    path: '/',
    title: <>Mindful <br /> Living</>,
    icon: <StonesIcon/>,
  },
  {
    id: 'embodied-02',
    path: '/',
    title: <>Embodied <br /> Learning</>,
    icon: <FlowerIcon />,
  },
  {
    id: 'presence-03',
    path: '/',
    title: <>Wholehearted <br /> Presence</>,
    icon: <YogaIcon />,
  },
]

export const Pillars = () => {
  return (
    <section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>Three Pillars</h2>
          <h4 className={subtitle}>Of the Embodied Learning Institute</h4>
          <p className={text}>
            Aliquam tempor risus lectus, eu bibendum eros fermentum quis. Mauris
            faucibus eros nec tristique volutpat. Quisque hendrerit mauris odio,
            eu lacinia augue bibendum ut. Nulla vitae massa eget libero maximus
            faucibus sit amet ac eros. Donec orci neque, malesuada id urna
            vitae, condimentum eleifend.
          </p>
        </div>
        <div className={pillarsContainer}>
          {pillarData.map((plr, idx) => {
            return (
              <div key={plr.id} className={pillar}>
                <h3 className={title}>{plr.title}</h3>
                <span className={icon}>{plr.icon}</span>
                <span className={btn}>
                  <ArrowBtn lightText arrowColor='var(--accent)'/>
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={pillarsImageContainer}>
        <div className={`${fadeTransitionBar} ${top}`} />
        <div
          className={shade}
        />
        <img
          className={fg}
          src={baseUrl('center-tree_jxzinq', 'good')}
          alt=''
        />
        <img className={bg} src={baseUrl('BG_no-tree_fsmhkc', 'good')} alt='' />
        <div className={`${fadeTransitionBar} ${bot}`} />
      </div>
    </section>
  )
}
