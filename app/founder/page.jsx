import React from 'react'

import {
  BODY_CONTENT,
  HERO_CONTENT,
  INTRO_CONTENT,
  QUOTE_CONTENT,
  STORY_CONTENT,
} from './founder-content'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { BodyContent } from './body-content/body-content'
import { Story } from './story/story'

const Founder = () => {
  return (
    <ContentLayout>
      <PageHero {...HERO_CONTENT} />
      <QuoteBlock {...QUOTE_CONTENT} />
      <Intro {...INTRO_CONTENT} />
      <BodyContent contents={BODY_CONTENT} />
      <Story {...STORY_CONTENT} />
    </ContentLayout>
  )
}

export default Founder
