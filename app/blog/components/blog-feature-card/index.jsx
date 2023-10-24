import React from 'react'
import Link from 'next/link'

import {
  container,
  imageWrap,
  textWrap,
  heading,
  subheading,
  meta,
  button
} from './blog-feature-card.module.scss'
import { Button } from 'ui-components/general-btn/general-btn'

export const BlogFeatureCard = ({ content: c }) => {
  return (
    <div className={container}>
      <div className={imageWrap}>
        <img src={c.image.src} alt={c.image.alt} />
      </div>
      <div className={textWrap}>
        <h2 className={heading}>{c.heading}</h2>
        <p className={subheading}>{c.subheading}</p>
        <div className={meta}>
          <span>{c.date}</span>
          <span>•</span>
          <span>{c.ttr}</span>
        </div>
        <Button
          text={c.button.text}
          path={c.button.link}
          classes={button}
        />
      </div>
    </div>
  )
}
