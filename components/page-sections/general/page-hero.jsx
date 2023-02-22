import { Button } from '@/elements/general-btn/general-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'
import React from 'react'

import {
  container,
  hero,
  imgWrap,
  textWrap,
  heroText,
  header as headerStyle,
  accentShapes,
} from './page-hero.module.scss'

export const PageHero = ({ id, header, image }) => {
  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={headerStyle}>
              <span>ELI</span>
              {header.map((line, idx) => {
                return <span key={idx}>{line}</span>
              })}
            </h1>
            <Button
              text='Get Started'
              classes='solid dark large'
              path='/#contact'
            />
            <span className={accentShapes}>
              <WaveCircles />
            </span>
          </div>
        </div>
        <div className={imgWrap}>
          <img src={image.url} alt={image.alt_text} />
        </div>
      </div>
    </section>
  )
}
