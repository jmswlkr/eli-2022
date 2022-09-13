import React from 'react'

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

export const PillarsHero = () => {
  return (
    <section className={hero}>
      <div className={content}>
        <div className={heroImg}>
          <span className={shade} />
          <img src={baseUrl('sequoia-full_wdznnq', 'good')} alt='' />
        </div>
        <div className={heroText}>
          <aside className={quote}>
            <span className={symbol}>
              <QuoteMark />
            </span>
            <em className={text}>
              Etiam vehicula pretium mi ut rhoncus. <br /> Mauris faucibus eros
              nec tristique volutpat.
            </em>
            <b className={attr}>- Gilles Deleuze</b>
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
        </div>
      </div>
    </section>
  )
}
