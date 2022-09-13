import { WaveCircles } from '@/elements/svg/wave-circles'
import { baseUrl } from '@/utils/cloudinary'
import React from 'react'

import { pillarData } from './pillar-data'

import {
  pillars,
  flexWrap,
  container,
  reverse,
  imgContent,
  textContent,
  title as titleStyle,
  mTitle,
  text as textStyle,
  accent,
  mAccent,
  outer,
  inner,
} from './pillars-sections.module.scss'

export const PillarsSections = () => {
  return (
    <section className={pillars}>
      {pillarData.map(({ id, title, imgSlug, text, icon, color }, idx) => {
        const reversed = idx === 1


        return (
          <div key={id} className={flexWrap}>
            <div className={`${container} ${reversed && reverse}`}>
              <h2 className={mTitle} style={{ color: color.p }}>
                <span>{title}</span>
                <span className={mAccent}>{icon}</span>
              </h2>
              <div className={imgContent}>
                <img src={baseUrl(imgSlug, 'eco')} alt={title} />
              </div>
              <div className={textContent}>
                <h2 className={titleStyle} style={{ color: color.p }}>
                  {title}
                </h2>
                <p className={textStyle}>{text}</p>
              </div>
              <div className={accent}>
                <span className={inner}>{icon}</span>
                <span className={outer}>
                  <WaveCircles color={color.s} />
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
