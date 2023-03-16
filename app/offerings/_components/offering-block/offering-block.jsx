import React from 'react'

import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  blurb,
  text as textStyle,
  header,
  content,
  btn,
  details,
  list,
  imgWrap
} from './offering-block.module.scss'

export const OfferingBlock = ({
  id,
  title,
  text,
  path,
  details_list = [],
  image,
}) => {
  return (
    <article className={container}>
      <div className={blurb}>
        <div className={textStyle}>
          <h3 className={header}>{title}</h3>
          <p className={content}>{text}</p>
        </div>
        <Button
          text='Learn More'
          classes={`solid med ${btn}`}
          path={path}
        />
      </div>
      <div className={details}>
        <h3 className={header}>Who it's for</h3>
        <ul className={list}>
          {details_list.map((detail, idx) => {
            return <li key={idx}>{detail}</li>
          })}
        </ul>
        <div className={imgWrap}>
          <img src={image.url} alt={image.alt} />
        </div>
      </div>
    </article>
  )
}
