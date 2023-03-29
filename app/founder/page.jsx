import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page.config'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { QuoteBlock } from 'ui-components/quote-block/quote-block'
import { Intro } from './intro/intro'
import { BodyContent } from './body-content/body-content'
import { Story } from './story/story'
import { CtaSection } from 'ui-components/cta-section/cta-section'

const Founder = async () => {
  const content = await useContentful(PAGE_CONFIG)

  const components = [
    PageHero,
    QuoteBlock,
    Intro,
    BodyContent,
    Story,
    CtaSection,
  ]

  return (
    <ContentLayout>
      {components.map((Component, idx) => {
        return <Component key={idx} {...content} />
      })}
    </ContentLayout>
  )
}

export default Founder
