import { Button } from '@/elements/general-btn/general-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'
import React from 'react'

import {
  container,
  hero,
  imgWrap,
  textWrap,
  heroText,
  header,
  accentShapes,
} from './page-hero.module.scss'

export const PageHero = () => {
  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={header}>
              <span>ELI</span>
              <span>Collaborative</span>
              <span>Learning</span>
            </h1>
            <Button text='Get Started' classes='solid dark large' path='/#contact'/>
            <span className={accentShapes}>
              <WaveCircles />
            </span>
          </div>
        </div>
        <div className={imgWrap}>
          <img
            src='https://res.cloudinary.com/jameswalker-work/image/upload/v1676831350/ELI/pexels-sam-kolder-2387873_hkvtbl.jpg'
            alt='test image'
          />
        </div>
      </div>
    </section>
  )
}
