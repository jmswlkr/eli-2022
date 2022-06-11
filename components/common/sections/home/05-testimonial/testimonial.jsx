// External lib
import { baseUrl } from '@/utils/cloudinary'
import React, { useEffect } from 'react'

// Components
import { QuoteMark } from '@/elements/svg/quote-mark'
import { Label } from '@/elements/section-label/section-label'

// Stying & Animation
import {
  testimonial,
  label,
  blurb,
  title,
  text,
  testimonialSliderBase,
  testimonialSlider,
  testimonialList,
  testItem,
  quoteMark,
  quote,
  attr,
  attrImg,
  fadeTransitionBlock
} from './testimonial.module.scss'

const testimonialData = [
  {
    path: '/',
    text: (
      <>
        Aliquam tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '',
    initials: 'G.D.',
  },
  {
    path: '/',
    text: (
      <>
        Aliquam tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '',
    initials: 'G.D.',
  },
  {
    path: '/',
    text: (
      <>
        Aliquam tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '',
    initials: 'G.D.',
  },
  {
    path: '/',
    text: (
      <>
        Aliquam tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '',
    initials: 'G.D.',
  },
  {
    path: '/',
    text: (
      <>
        Aliquam tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '',
    initials: 'G.D.',
  },
]

export const Testimonial = () => {


  return (
    <div className={testimonial}>
      <div className={label}>
        <Label> Testimonial Testimonial Testimonial </Label>
      </div>
      <div className={blurb}>
        <h2 className={title}>Testimonials</h2>
        <p className={text}>
          Mauris dictum egestas felis at semper. Aenean at
          tortor eros. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div className={testimonialSliderBase}>
        <div className={testimonialSlider}>
          <ul className={testimonialList}>
            {testimonialData.map((tst, idx) => {
              return (
                <li key={idx} className={testItem}>
                  <span className={quoteMark}>
                    <QuoteMark />
                  </span>
                  <blockquote className={quote}>
                    {tst.text}
                  </blockquote>
                  <span className={attr}>
                    {tst.initials}
                  </span>
                  <span className={attrImg}>
                    <img
                      src={baseUrl(tst.avatarUrl, 'eco')}
                      alt={tst.initials}
                    />
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={fadeTransitionBlock} />
      </div>
    </div>
  )
}
