import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'
import { useContentful } from '@/contentful'

import { HeroSecondary, QuoteBlock } from '@/ui-components'
import { Intro } from './intro/intro'
import { MissionVision } from './mission-vision/mission-vision'
import { Values } from './values/values'
import { CtaSection } from '@/ui-components'
import { ContentLayout } from '@/ui-components'

const About = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const components = [QuoteBlock, Intro, MissionVision, Values, CtaSection]

  return (
    <ContentLayout>
      <HeroSecondary {...content.hero.fields} />
      <div className='READABLE_WRAP flex-col-center'>
        <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-xxl'>
          {content &&
            components.map((Component, idx) => {
              return <Component key={idx} {...content} />
            })}
        </div>
      </div>
    </ContentLayout>
  )
}

export default About
