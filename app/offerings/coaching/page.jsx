import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import {
  BorderBlock,
  CtaSection,
  HeaderParagraph,
  HeroSecondary,
} from '@/ui-components'

import { PAGE_CONFIG } from './page-config'

const CoachingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <div className='READABLE_WRAP flex-col-center'>
        <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-xl'>
          <section className='INTRO flex-col-tl gap-lg'>
            {content.mainContent.map((block) => {
              return (
                <HeaderParagraph
                  key={block.sys.id}
                  mainContentHeading={block.fields.heading}
                  mainContentParagraph={block.fields.paragraph}
                  classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
                />
              )
            })}
          </section>
          <section className='COACHING_CARDS flex-col-tl gap-md'>
            {content.listContent.map((block) => {
              return (
                <BorderBlock
                  key={block.sys.id}
                  heading={block.fields.heading}
                  paragraph={block.fields.paragraph}
                />
              )
            })}
          </section>
        </div>
      </div>
      <CtaSection {...content.cta.fields} />
    </>
  )
}

export default CoachingPage
