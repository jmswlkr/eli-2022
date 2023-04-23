import React from 'react'

import { MISSION, VISION } from '../about-content'

import {
  container,
  statement,
  header,
  content,
} from './mission-vision.module.scss'

export const MissionVision = ({
  missionTitle,
  missionTextContent,
  visionTitle,
  visionTextContent,
}) => {
  return (
    <article className={container}>
      <div className={statement}>
        <h3 className={header}>{missionTitle}</h3>
        <p className={content}>{missionTextContent}</p>
      </div>
      <div className={statement}>
        <h3 className={header}>{visionTitle}</h3>
        <p className={content}>{visionTextContent}</p>
      </div>
    </article>
  )
}
