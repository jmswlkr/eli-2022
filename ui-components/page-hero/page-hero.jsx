'use client'

import React from 'react'
import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  hero,
  imgWrap,
  positionBottom,
  textWrap,
  heroText,
  header as headerStyle,
} from './page-hero.module.scss'

export const PageHero = ({
  heroHeaderLines = [],
  heroSubtitle = '',
  image = '',
  heroImage = '',
  defaultImage = '',
  heroButtonText = 'Contact Us',
  buttonLink = '/#contact',
}) => {
  const imageToBottom = heroImage.fields.title === 'founder-image'

  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={headerStyle}>
              {heroHeaderLines?.map((line, idx) => {
                return <span key={idx}>{line ?? ''}</span>
              })}
              {heroSubtitle && <span>{heroSubtitle}</span>}
            </h1>
            <Button
              text={heroButtonText}
              classes='solid dark med'
              path={buttonLink}
            />
          </div>
        </div>
        <div className={`${imgWrap} ${imageToBottom ? positionBottom : ''}`}>
          <img
            src={heroImage.fields.file.url ?? defaultImage}
            alt={heroImage.fields.description ?? ''}
          />
        </div>
      </div>
    </section>
  )
}
