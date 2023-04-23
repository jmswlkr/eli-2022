'use client'

import React from 'react'
import MD from 'react-markdown'

import {
  container,
  textWrap,
  intro as introStyle,
  paragraph,
  inline,
} from './intro.module.scss'

export const Intro = ({
  mainContentParagraph1,
  mainContentParagraph2,
  mainContentParagraph3,
  mainContentParagraph4,
}) => {

  return (
    <section className={container}>
      <div className={textWrap}>
        <p className={introStyle}>
          <MD>{mainContentParagraph1}</MD>
        </p>
        <p className={paragraph}>
          <MD>{mainContentParagraph2}</MD>
        </p>
        <p className={paragraph}>
          <MD>{mainContentParagraph3}</MD>
        </p>
        <p className={`${paragraph} ${inline}`}>
          <MD>{mainContentParagraph4}</MD>
        </p>
      </div>
    </section>
  )
}
