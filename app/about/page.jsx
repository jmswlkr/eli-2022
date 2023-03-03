import React from 'react'

import { QUOTE_CONTENT, CTA_CONTENT } from './about-content'
console.log('CTA_CONTENT: ', CTA_CONTENT);

import { Hero } from './hero/hero'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { MissionVision } from './mission-vision/mission-vision'
import { Values } from './values/values'
import { CtaSection } from 'ui-components/cta-section/cta-section'

import { container } from './page.module.scss'

const About = () => {
  return (
    <div className={container}>
      <Hero />
      <QuoteBlock {...QUOTE_CONTENT} />
      <Intro />
      <MissionVision />
      <Values />
      <CtaSection {...CTA_CONTENT} />
    </div>
  )
}

export default About
