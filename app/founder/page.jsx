import React from 'react'

import { HERO_CONTENT, QUOTE_CONTENT } from './founder-content'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'



const Founder = () => {
  return (
    <>
      <PageHero {...HERO_CONTENT} />
      <QuoteBlock {...QUOTE_CONTENT} />
    </>
  )
}

export default Founder
