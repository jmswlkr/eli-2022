// External lib
import React from 'react'
import Marquee from 'react-fast-marquee'

// Styling
import { labelStyle } from './section-label.module.scss';




export const Label = ({ children, text = 'Embodied Learning Institute' }) => {
  return (
    <Marquee className={labelStyle} speed={20} gradient={false}>
      {Array.from({ length: 10 }).fill(` ${children ?? text} `)}
    </Marquee>
  )
}
