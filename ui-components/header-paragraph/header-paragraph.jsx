import React from 'react'

import { container, header, content } from './header-paragraph.module.scss'

export const HeaderParagraph = ({ title = null, text }) => {
  return (
    <div className={container}>
      {title && <h5 className={header}>{title}</h5>}
      <p className={content}>{text}</p>
    </div>
  )
}
