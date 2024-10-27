import { draftMode } from 'next/headers'
import Link from 'next/link'

import { useContentfulEntryByParams } from '@/contentful'

import { HeroSecondary } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraph } from '@/ui-components'

import { TrainingCard } from '../../../_components/training-event-card'

const TrainingCategoryPage = async ({ params }) => {
  const { isEnabled } = draftMode()

  const { entry } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'offeringsTrainingCategoryPage',
      include: 10,
      'fields.slug[match]': params.slug
    }
  })

  const content = entry?.items[0].fields

  const hasDescription = content?.descriptionParagraphs?.length > 0
  const hasTopics = content?.eventTopicsParagraphs?.length > 0
  const hasEvents = content?.categoryEventsEventList?.length > 0

  return (
    <>
      <HeroSecondary {...content?.hero?.fields} subtitlePositionTop />  
      {hasDescription && <section className='DESCRIPTION flex-col-tl gap-lg'>
        {content?.descriptionParagraphs?.map((paragraph) => {
          return (
            <HeaderParagraph
              key={paragraph.sys.id}
              mainContentHeading={paragraph.fields.heading}
              mainContentParagraph={paragraph.fields.paragraph}
            />
          )
        })}
      </section>}
      {hasTopics && <section className='TOPICS flex-col-tl gap-md'>
        <ParagraphHeader
          headingText={content.eventFocusHeader}
        />
        {content?.eventTopicsParagraphs?.map(
          (paragraph, idx) => {
            return (
              <div
                key={idx}
                className='LIST_WRAPPER bordered-list-wrapper'
              >
                <HeaderParagraph
                  mainContentHeading={paragraph.fields.heading}
                  mainContentParagraph={
                    paragraph.fields.paragraph
                  }
                  classes={{
                    header:
                      '!text-primary-900 font-semibold head-5'
                  }}
                />
              </div>
            )
          }
        )}
      </section>}
      <section className='CATEGORY_EVENTS flex-col-tl gap-lg w-full'>
        {hasEvents ? (
          <>
            <ParagraphHeader
              headingText={content.categoryEventsHeader}
            />
            <div className='EVENT_LIST flex-col-tl gap-lg w-full'>
              {content?.categoryEventsEventList?.map(
                (event, idx) => {
                  return (
                    <TrainingCard
                      key={idx}
                      event={event.fields}
                      entry={event}
                    />
                  )
                }
              )}
            </div>
          </>
        ) : (
          <NoEventsMessage categoryTitle={content.categoryTitle} />
        )}
      </section>
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
        Currently, there are no upcoming{' '}
        <strong>&nbsp;{categoryTitle}&nbsp;</strong> events.{' '}
        <br />
        <br />
        <Link className='text-primary-500' href='/#contact'>Subscribe to our newsletter</Link>{' '}
        to be notified!
      </p>
    </div>
  )
}

export default TrainingCategoryPage
