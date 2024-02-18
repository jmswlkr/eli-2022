import React from 'react'

import { MISSION, VISION } from '../about-content'

import {
  container,
  statement,
  header,
  content
} from './mission-vision.module.scss'
import { BorderBlock } from '@/ui-components'

export const MissionVision = ({
  missionTitle,
  missionText,
  visionTitle,
  visionText
}) => {
  return (
    <article className='CONTAINER auto-rows-auto gap-md grid w-full grid-cols-2'>
      {[
        { title: missionTitle, content: missionText },
        { title: visionTitle, content: visionText }
      ].map((statement, idx) => {
        return (
          <BorderBlock
            key={idx}
            heading={statement.title}
            paragraph={statement.content}
          />
        )
      })}
    </article>
  )
}
