import React from 'react'

import { HERO_CONTENT, INTRO_CONTENT, QUOTE_CONTENT } from './founder-content'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'

const Founder = () => {
  return (
    <ContentLayout>
      <PageHero {...HERO_CONTENT} />
      <QuoteBlock {...QUOTE_CONTENT} />
      <Intro {...INTRO_CONTENT} />
    </ContentLayout>
  )
}

export default Founder
