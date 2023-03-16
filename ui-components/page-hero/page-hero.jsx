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

export const PageHero = ({ id, header = '', image = '' }) => {
  console.log('id: ', id);
  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={headerStyle}>
              {header.map((line, idx) => {
                return <span key={idx}>{line}</span>
              })}
              {/* <div className={accentShapes}>
                <BraidedCircles />
              </div> */}
            </h1>
            <Button
              text='Get Started'
              classes='solid dark med'
              path='/#contact'
            />
          </div>
        </div>
        <div className={imgWrap}>
          <img src={image.url} alt={image.alt_text} />
        </div>
      </div>
    </section>
  )
}
