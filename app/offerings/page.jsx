import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import { PAGE_CONFIG } from './page-config'
import { extractOfferingsContent } from './extract-offerings-content'

import { CtaSection, HeaderParagraph } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'
import { OfferingBlock } from './_components/offering-block'

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
      <HeroSecondary {...content.hero.fields}/>
      <HeaderParagraph
        mainContentHeading={content.mainContentHeading}
        mainContentParagraph={content.mainContentParagraph}
      />
      {offeringsBlocks.map((block, idx) => {
        return <OfferingBlock key={idx} {...block} />
      })}
      <CtaSection {...content.cta.fields} />
    </>
  )
}

export default Offerings
