import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'

import { ContentLayout, CtaSection, HeroSecondary, QuoteBlock } from '@/ui-components'
import { useContentful } from 'contentful/hooks'
import { StorySection } from 'app/founder/story'

const BookPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  // console.log('🚀 ~ BookPage ~ content:', content)
  // const components = [QuoteBlock, IntroSection, StorySection, TrainingSection]

  return (
    <ContentLayout>
      <HeroSecondary {...content.hero.fields} />
      <QuoteBlock {...content}/>
      <StorySection {...content}/>
      <CtaSection {...content.cta.fields}/>
    </ContentLayout>
  )
}

export default BookPage
