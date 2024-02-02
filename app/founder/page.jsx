import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'

import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { BodyContent } from './body-content/body-content'
import { Story } from './story/story'
import { CtaSection } from 'ui-components/cta-section/cta-section'
import { useContentful } from 'utils/contentful/useContentful'
import { HeroSecondary } from '@/ui-components/hero/secondary'

const Founder = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const components = [
    QuoteBlock,
    Intro,
    BodyContent,
    Story,
    CtaSection
  ]

  return (
    <ContentLayout>
      <HeroSecondary {...content.hero.fields} />
      {content &&
        components.map((Component, idx) => {
          return <Component key={idx} {...content} />
        })}
    </ContentLayout>
  )
}

export default Founder
