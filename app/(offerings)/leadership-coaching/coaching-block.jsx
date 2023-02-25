import React from 'react'

import { container, header, content } from './coaching-block.module.scss'

export const CoachingBlock = ({ idx, title, text }) => {
  return (
    <article className={container} data-grid-id={`c${idx}`}>
      <h4 className={header}>{title}</h4>
      <p className={content}>{text}</p>
    </article>
  )
}