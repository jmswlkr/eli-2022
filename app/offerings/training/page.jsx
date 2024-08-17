import React from 'react'
import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import { PAGE_CONFIG } from './page-config'

import { CtaSection, TestComponent } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraphList } from '@/ui-components'
import { TrainingCard } from '../_components/training-event-card'
import { TrainingCategoryCard } from '../_components/training-category-card'

const TrainingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })
  
  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <HeaderParagraphList
        paragraphs={content.mainContentParagraphs}
      />
      <TestComponent content={content}/>
      {content?.eventsMostRecent && (
        <section className='flex-col-tl gap-lg'>
          <ParagraphHeader headingText={content.eventsHeading} />
          <div className='flex-col-tl gap-lg'>
            {content.eventsMostRecent.map((event, idx) => {
              return (
                <TrainingCard
                  key={idx}
                  event={event.fields}
                  entry={event}
                />
              )
            })}
          </div>
        </section>
      )}
      {content?.categoryList && (
        <section className='flex-col-tl gap-lg'>
          <ParagraphHeader
            headingText={content.categoriesHeading}
          />
          <div className='gap-md lg:grid-cols-2 auto-rows-auto lg:grid-rows-2 grid w-full grid-cols-1'>
            {content.categoryList.map((category, idx) => {
              return (
                <TrainingCategoryCard
                  key={idx}
                  category={category.fields}
                />
              )
            })}
          </div>
        </section>
      )}
      <CtaSection {...content.cta.fields} />
    </>
  )
}

export default TrainingPage
