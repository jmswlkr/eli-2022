import React, { useEffect, useState } from 'react'

import { Label } from '../section-label/section-label'
import { WaveCircles } from '../svg/wave-circles'

import {
  container,
  sectionAccent,
  title as titleStyle,
  left,
} from './section-header.module.scss'

export const SectionHeader = ({
  title = 'Section Title',
  alignLeft = false,
  labelText = 'Embodied Learning Institute',
  withLabel = true,
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  return (
    <div className={container}>
      <div className={sectionAccent}>
        {withLabel && <Label text={labelText} />}
      </div>
      <h2 className={`${titleStyle} ${alignLeft ? left : ''}`}>{title}</h2>
    </div>
  )
}
