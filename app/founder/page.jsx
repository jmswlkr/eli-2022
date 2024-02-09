import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'

import { ContentLayout } from '@/ui-components'
import { QuoteBlock } from '@/ui-components'
import { Intro } from './intro/intro'
import { BodyContent } from './body-content/body-content'
import { Story } from './story/story'
import { CtaSection } from '@/ui-components'
import { useContentful } from '@/utils'
import { HeroSecondary } from '@/ui-components'

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
