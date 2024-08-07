import { draftMode } from 'next/headers'

import { PAGE_CONFIG } from './page.config'
import { useContentful } from '@/contentful'

import { HeroSecondary, QuoteBlock } from '@/ui-components'
import { Intro } from './intro/intro'
import { MissionVision } from './mission-vision/mission-vision'
import { Values } from './values/values'
import { CtaSection } from '@/ui-components'
import { ContentLayout, ReadbleContent } from '@/ui-components'

const About = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,

    preview: isEnabled
  })

  const components = [QuoteBlock, Intro, MissionVision, Values]

  return (
    <ContentLayout>
      <HeroSecondary {...content.hero.fields} />
      <div className='READABLE_WRAP flex-col-center'>
        <ReadbleContent>
          {content &&
            components.map((Component, idx) => {
              return <Component key={idx} {...content} />
            })}
        </ReadbleContent>
      </div>
      <CtaSection {...content.cta.fields} />
    </ContentLayout>
  )
}

export default About
