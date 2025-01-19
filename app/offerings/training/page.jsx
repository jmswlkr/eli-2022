import React from 'react'
import { draftMode } from 'next/headers'

import {
  useContentful,
  useContentfulEntryByParams
} from '@/contentful'
import { PAGE_CONFIG } from './page-config'

import { CtaSection, TestComponent } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraphList } from '@/ui-components'
import { TrainingCard } from '../_components/training-event-card'
import { TrainingCategoryCard } from '../_components/training-category-card'
import Link from 'next/link'

const TrainingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const {
    entry: { items: allEvents }
  } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'offeringsTrainingEventPage',
      include: 10
    }
  })

  const upcomingEvents = allEvents?.filter((event) => {
    const eventDate = new Date(event.fields.eventDateStart)
    const currentDate = new Date()
    return eventDate >= currentDate
  })

  const hasUpcomingEvents = upcomingEvents?.length > 0

  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <HeaderParagraphList
        paragraphs={content.mainContentParagraphs}
      />
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
      <section className='CATEGORY_EVENTS flex-col-tl gap-lg relative w-full'>
        <span className='scroll-pad' id='events' />
        {hasUpcomingEvents ? (
          <>
            <ParagraphHeader
              headingText={'Upcoming Training Events'}
            />
            <div className='EVENT_LIST flex-col-tl gap-lg w-full'>
              {hasUpcomingEvents &&
                upcomingEvents?.map((event, idx) => {
                  return (
                    <TrainingCard
                      key={idx}
                      event={event.fields}
                      entry={event}
                    />
                  )
                })}
            </div>
          </>
        ) : (
          <NoEventsMessage
            categoryTitle={content.categoryTitle}
          />
        )}
      </section>
      {/* {content?.categoryList && (
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
      )} */}
      <CtaSection {...content.cta.fields} />
    </>
  )
}

function NoEventsMessage({ categoryTitle = 'Test!' }) {
  return (
    <div className='NO_EVENT_MESSAGE flex-col-center gap-md py-lg px-md bg-primary-500/10 w-full rounded-lg'>
      <h2 className='head-4 text-primary-500 italic'>
        No Upcoming Events!
      </h2>
      <p className='par-1 text-center'>
        Currently, there are no upcoming events scheduled.
        <br />
        <br />
        <Link className='text-primary-500' href='/#contact'>
          Subscribe to our newsletter
        </Link>{' '}
        to be notified!
      </p>
    </div>
  )
}

export default TrainingPage
