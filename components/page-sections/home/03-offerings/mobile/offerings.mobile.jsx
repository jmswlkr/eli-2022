import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'
import { WaveCircles } from '@/elements/svg/wave-circles'
import { baseUrl } from '@/utils/cloudinary'
import React from 'react'

import { offerings } from '../offerings-data'

import {
  offerings as offeringsStyle,
  sectionAccent,
  header,
  slider,
  slide,
  imgWrap,
  title,
  text,
  btnCta,
} from './offerings.mobile.module.scss'

export const OfferingsMobile = () => {
  return (
    <section className={offeringsStyle}>
      <div className={sectionAccent}>
        <WaveCircles />
      </div>
      <h2 className={header}>What we Offer.</h2>
      <ul className={slider}>
        {offerings.map((ofr, idx) => {
          return (
            <li key={`offr-${idx}`} className={slide}>
              <div className={imgWrap}>
                <img src={baseUrl(ofr.imgUrlFrag)} alt={ofr.blurb} />
                <h4 className={title}>{ofr.title}</h4>
              </div>
              <p className={text}>{ofr.blurb}</p>
              <div className={btnCta}>
                <ArrowBtn />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
