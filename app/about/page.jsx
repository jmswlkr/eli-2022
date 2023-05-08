import React from 'react'
import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'
import { useContentful } from 'utils/contentful/useContentful'

import { Hero } from './hero/hero'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { MissionVision } from './mission-vision/mission-vision'
import { Values } from './values/values'
import { CtaSection } from 'ui-components/cta-section/cta-section'
import { ContentLayout } from 'ui-components/content-layout/content-layout'

const About = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })

  const components = [
    Hero,
    QuoteBlock,
    Intro,
    MissionVision,
    Values,
    CtaSection,
  ]

  return (
    <ContentLayout>
      {content &&
        components.map((Component, idx) => {
          return <Component key={idx} {...content} />
        })}
    </ContentLayout>
  )
}

export default About
