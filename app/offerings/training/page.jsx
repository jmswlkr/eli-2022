import React from 'react'
import { draftMode } from 'next/headers'

import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page-config'
import { PLACEHOLDER_DATA } from './placeholder-data'

import { CtaSection } from 'ui-components/cta-section/cta-section'
import { PageHero } from 'ui-components/page-hero/page-hero'
import { HeroSecondary } from '@/ui-components/hero/secondary'
import { ParagraphHeader } from '@/ui-components/headings/paragraph-header'
import { HeaderParagraphList } from '@/ui-components/header-paragraph/header-paragraph-list'
import { TrainingCard } from '../_components/training-event-card'
import { TrainingCategoryCard } from '../_components/training-category-card'
import { TestComponent } from '../_components/test'

const { cta } = PLACEHOLDER_DATA

const TrainingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  console.log(
    'content ******************************: ',
    content.categoryList[0]
  )
  return (
    <>
      {/* HERO */}
      {/* <PageHero {...content} /> */}
      <HeroSecondary {...content.hero.fields}/>

      {/* INTRO */}
      <HeaderParagraphList paragraphs={content.mainContentParagraphs} />

      {/* EVENTS */}
      <section className='flex-col-tl gap-lg'>
        <ParagraphHeader headingText={content.eventsHeading} />
        <div className='flex-col-tl gap-lg'>
          {content.eventsMostRecent.map((event, idx) => {
            return <TrainingCard key={idx} event={event.fields} entry={event} />
          })}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className='flex-col-tl gap-lg'>
        <ParagraphHeader headingText={content.categoriesHeading} />
        <div className='gap-md lg:grid-cols-2 auto-rows-auto lg:grid-rows-2 grid w-full grid-cols-1'>
          {content.categoryList.map((category, idx) => {
            return <TrainingCategoryCard key={idx} category={category.fields} />
          })}
        </div>
      </section>
      
      {/* TEST */}
      <TestComponent content={content}/>

      {/* <div className="my-24 bg-primary-500/20 w-full h-[.5px]"></div> */}

      {/* CTA */}
      <CtaSection {...cta} />
    </>
  )
}

export default TrainingPage
