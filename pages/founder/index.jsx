import React from 'react'

import { HERO_CONTENT, QUOTE_CONTENT } from '@/page-sections/founder/founder-content'

import { PageHero } from '@/page-sections/general/page-hero'
import { QuoteBlock } from '@/elements/quote-block/quote-block'


const Founder = () => {
  return (
    <>
      <PageHero {...HERO_CONTENT} />
      <QuoteBlock {...QUOTE_CONTENT} />
    </>
  )
}

export default Founder
