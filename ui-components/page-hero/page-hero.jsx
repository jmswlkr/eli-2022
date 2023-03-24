import React from 'react'
import { Button } from 'ui-components/general-btn/general-btn'
import { BraidedCircles } from 'ui-components/svg/braided-circles'

import {
  container,
  hero,
  imgWrap,
  textWrap,
  heroText,
  header as headerStyle,
  accentShapes,
} from './page-hero.module.scss'

export const PageHero = async ({
  heroHeaderLines = [],
  heroSubtitle = '',
  image = '',
  defaultImage = '',
  heroButtonText = 'Get Started',
  buttonLink = '/#contact',
}) => {
  
  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={headerStyle}>
              {heroHeaderLines.map((line, idx) => {
                return <span key={idx}>{line}</span>
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
        <div className={imgWrap}>
          <img
            src={image ? image.url : defaultImage}
            alt={image.alt_text || ''}
          />
        </div>
      </div>
    </section>
  )
}
