import React from 'react'

import { QUOTE_CONTENT } from './about-content'

import { Hero } from './hero/hero'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { MissionVision } from './mission-vision/mission-vision'
import { Values } from './values/values'

import { container } from './page.module.scss'

const About = () => {
  return (
    <div className={container}>
      <Hero />
      <QuoteBlock {...QUOTE_CONTENT} />
      <Intro />
      <MissionVision />
      <Values />
    </div>
  )
}

export default About