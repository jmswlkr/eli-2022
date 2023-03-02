import React from 'react'

import { MISSION, VISION } from '../about-content'

import { container, statement, header, content } from './mission-vision.module.scss'

export const MissionVision = () => {
  return (
    <article className={container}>
      {[MISSION, VISION].map(({ title, text }) => {
        return (
          <div key={title} className={statement}>
            <h3 className={header}>{title}</h3>
            <p className={content}>{text}</p>
          </div>
        )
      })}
    </article>
  )
}
