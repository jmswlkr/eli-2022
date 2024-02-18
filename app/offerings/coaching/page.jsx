import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import {
  BorderBlock,
  CtaSection,
  HeaderParagraph,
  HeaderParagraphList,
  HeroSecondary,
  TestComponent
} from '@/ui-components'

import { PAGE_CONFIG } from './page-config'
import { parseContentfulData } from './parse-contentful-data'

const CoachingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const { intro, coaching } = parseContentfulData(content)

  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <div className='READABLE_WRAP flex-col-center'>
        <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-lg'>
          <section className='INTRO flex-col-tl gap-lg'>
            {intro.map((block) => {
              return (
                <HeaderParagraph
                  key={block.heading}
                  mainContentHeading={block.heading}
                  mainContentParagraph={block.paragraph}
                  classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
                />
              )
            })}
          </section>
          <section className='COACHING_CARDS flex-col-tl gap-md mb-xxl'>
            {coaching.map((block) => {
              return (
                <BorderBlock
                  key={block.heading}
                  heading={block.heading}
                  paragraph={block.paragraph}
                />
              )
            })}
          </section>
        </div>
        <CtaSection />
      </div>
    </>
  )
}

export default CoachingPage
