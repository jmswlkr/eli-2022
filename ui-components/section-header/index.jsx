'use client';

import Marquee from 'react-fast-marquee'

import {
  container,
  sectionAccent,
  title as titleStyle,
  left,
  label
} from './section-header.module.scss'

export const SectionHeader = ({
  title = 'Section Title',
  alignLeft = false,
  labelText = 'Embodied Learning Institute',
  withLabel = true,
}) => {

  return (
    <div className={container}>
      <div className={sectionAccent}>
        {withLabel && <Label text={labelText} />}
      </div>
      <h2 className={`${titleStyle} ${alignLeft ? left : ''}`}>{title}</h2>
    </div>
  )
}


const Label = ({ children, text = 'Embodied Learning Institute' }) => {
  return (
    <Marquee className={label} speed={20} gradient={false}>
      {Array.from({ length: 10 }).fill(` ${children ?? text} `)}
    </Marquee>
  )
}
