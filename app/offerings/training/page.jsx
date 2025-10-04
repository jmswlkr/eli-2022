import React from 'react'
import { draftMode } from 'next/headers'

import {
  useContentful,
  useContentfulEntryByParams,
} from '@/contentful'
import { PAGE_CONFIG } from './page-config'

import { CtaSection } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraphList } from '@/ui-components'
import { TrainingCard } from '../_components/training-event-card'
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

  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <HeaderParagraphList
        paragraphs={content.mainContentParagraphs}
      />
      {allEvents ? (
        <section className='flex-col-tl gap-lg'>
          <ParagraphHeader headingText={content.eventsHeading} />
          <div className='flex-col-tl gap-lg'>
            {allEvents.map((event, idx) => {
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
      ) : (
        <NoEventsMessage />
      )}
      <CtaSection {...content.cta.fields} />
    </>
  )
}

function NoEventsMessage() {
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
