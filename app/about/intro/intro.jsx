'use client';

import React from 'react'

import { QUOTE_CONTENT, INTRO_CONTENT } from '../about-content'

import { QuoteBlock } from '@/elements/quote-block/quote-block'

import {
  container,
  textWrap,
  intro as introStyle,
  paragraph,
  blue,
  red,
  inline
} from './intro.module.scss'

export const Intro = () => {
  const { intro, p1, p2, p3 } = INTRO_CONTENT

  return (
    <section className={container}>
      <QuoteBlock {...QUOTE_CONTENT} />
      <div className={textWrap}>
        <p className={introStyle}>{intro}</p>
        <p className={paragraph}>
          <span>{p1.text}</span>
          <span className={blue}>{p1.color_text}</span>
        </p>
        <p className={paragraph}>
          <span>{p2.text}</span>
          <span className={red}>{p2.color_text}</span>
        </p>
        <p className={`${paragraph} ${inline}`}>{p3.text}</p>
      </div>
    </section>
  )
}
