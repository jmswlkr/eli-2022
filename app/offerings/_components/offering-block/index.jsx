import React from 'react'

import { Button } from '@/ui-components'

import {
  container,
  blurb,
  text as textStyle,
  header,
  btn,
  details,
  list,
  imgWrap
} from './offering-block.module.scss'
import { twm } from 'utils/tailwind'

export const OfferingBlock = ({
  id,
  title,
  text,
  path,
  list_header,
  details_list = [],
  image,
}) => {
  return (
    <article className={container}>
      <div className={blurb}>
        <div className={textStyle}>
          <h3 className={header}>{title}</h3>
          <p className='par-1'>{text}</p>
        </div>
        <Button
          text='Learn More'
          classes={`solid med ${btn}`}
          path={path}
        />
      </div>
      <div className={details}>
        <h3 className={twm(header, 'head-4')}>{list_header}</h3>
        <ul className={list}>
          {details_list.map((detail, idx) => {
            return <li key={idx} className='par-1'>{detail}</li>
          })}
        </ul>
        <div className={imgWrap}>
          <img src={image.url} alt={image.alt} />
        </div>
      </div>
    </article>
  )
}
