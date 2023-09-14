import { draftMode } from 'next/headers'

import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page-config'
import { extractOfferingsContent } from './extract-offerings-content'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { OfferingBlock } from './_components/offering-block/offering-block'
import { PageHero } from 'ui-components/page-hero/page-hero'

const Offerings = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const heroContent = {
    heroHeaderLines: content.heroHeaderLines,
    heroImage: content.heroImage,
    heroButtonText: 'Get Started'
  }

  const offeringsBlocks = extractOfferingsContent(content)

  return (
    <>
      <PageHero {...heroContent} />
      <HeaderParagraph
        mainContentHeading={content.mainContentHeading}
        mainContentParagraph={content.mainContentParagraph}
      />
      {offeringsBlocks.map((block, idx) => {
        return <OfferingBlock key={idx} {...block} />
      })}
    </>
  )
}

export default Offerings
