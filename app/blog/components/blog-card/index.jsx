import React from 'react'

import {
  container,
  imageWrap,
  textWrap,
  heading,
  subheading,
  meta,
  button
} from './blog-card.module.scss'
import { Button } from 'ui-components/general-btn/general-btn'

export const BlogCard = ({ content: c, truncated = false }) => {

  return (
    <div className={container}>
      <div className={imageWrap}>
        <img
          src={`${c.mainImage.fields.file.url}?f=face&fit=fill`}
          alt={'Featured Image'}
        />
      </div>
      <div className={textWrap}>
        <h2 className={heading}>{c.heading}</h2>
        {!truncated && <p className={subheading}>{c.subheading}</p>}
        {!truncated && <div className={meta}>
          <span>{c.publishDate.month} </span>
          <span>{c.publishDate.day}, </span>
          <span>{c.publishDate.year}</span>
          <span>•</span>
          <span>{c.timeToRead} minute read</span>
        </div>}
        <Button text='Read More' path={`blog/${c.entryId}`} classes={button} />
      </div>
    </div>
  )
}
