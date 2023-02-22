import React from 'react'

import { PageHero } from '@/page-sections/general/page-hero'
import { QuoteBlock } from '@/elements/quote-block/quote-block'

const HERO_CONTENT = {
  header: ['About the', 'Founder', <>Alison Brzenchek <br/> MSW, Ph.D</>],
  image: {
    url: 'https://res.cloudinary.com/jameswalker-work/image/upload/v1655285379/ELI/founder-ph_tujxvc.png',
    alt_text: 'The founder of ELI, Alison Brzencheck MSW, Ph.D',
  },
}

const QUOTE_CONTENT = {
  quote : 'We are steeped in the normalized myth that we are, each of us, mere individuals striving to attain private goals. The more we define ourselves that way, the more estranged we become from the vital aspects of who we are and what we need to be healthy.',
  author: 'Gabor Maté',
  source: 'The Myth of Normal: Trauma, Illness and Healing in a Toxic Culture',
}

const Founder = () => {
  return (
    <>
      <PageHero {...HERO_CONTENT} />
      <QuoteBlock {...QUOTE_CONTENT} />
    </>
  )
}

export default Founder
