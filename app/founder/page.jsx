import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'

import { ContentLayout } from '@/ui-components'
import { QuoteBlock } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { useContentful } from '@/contentful'
import { HeroSecondary } from '@/ui-components'
import { IntroSection } from './intro'
import { StorySection } from './story'
import { TrainingSection } from './training'

const Founder = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const components = [
    QuoteBlock,
    IntroSection,
    StorySection,
    TrainingSection,
    CtaSection
  ]

  return (
    <ContentLayout>
      <HeroSecondary {...content.hero.fields} />
      {components.map((Component, idx) => {
        return <Component key={idx} {...content} />
      })}
    </ContentLayout>
  )
}

export default Founder
