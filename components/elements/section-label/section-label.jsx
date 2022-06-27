// External lib
import React from 'react'
import Marquee from 'react-fast-marquee'

// Styling
import { labelStyle } from './section-label.module.scss';




export const Label = ({ children }) => {
  return (
    <Marquee
      className={labelStyle}
      speed={20}
      gradient={false}
    >
      {/* {children} */}
      {Array.from({ length: 4 }).fill(
        ` ${children} `
      )}
    </Marquee>
  )
}
