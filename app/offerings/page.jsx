import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import { PAGE_CONFIG } from './page-config'

import { CtaSection, HeaderParagraph, TestComponent } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'
import { OfferingsPreviewCard } from './_components/preview-card'

const Offerings = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })


  return (
    <>
      <HeroSecondary {...content.hero.fields}/>
      <HeaderParagraph
        mainContentHeading={content.mainContentHeading}
        mainContentParagraph={content.mainContentParagraph}
      />
      {content?.offeringPagesPreviewCards?.map((card, idx) => {
        return <OfferingsPreviewCard key={idx} entryId={card.sys.id} />
      })}
      <CtaSection {...content.cta.fields} />
    </>
  )
}

export default Offerings
