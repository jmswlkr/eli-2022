import { draftMode } from 'next/headers'
import Link from 'next/link'

import { useContentfulEntryByParams } from '@/contentful'

import { CtaSection, TestComponent } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraph } from '@/ui-components'

import { TrainingEventHero } from '../../../_components/event-hero'


const TrainingEventPage = async ({ params }) => {
  const { isEnabled } = draftMode()

  const { entry } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'offeringsTrainingEventPage',
      include: 10,
      'fields.pageSlug[match]': params.slug
    }
  })

  const content = entry?.items[0].fields
  const currentPath = `/offerings/training/events/${params.slug}`

  return (
    <>
      {content?.hero?.fields && (
        <TrainingEventHero
          date={{
            start: content.eventDateStart,
            end: content.eventDateEnd
          }}
          currentPath={currentPath}
          {...content.hero.fields}
        />
      )}
      {content?.eventDescriptionParagraphs && (
        <section className='DESCRIPTION flex-col-tl gap-lg'>
          {content?.eventDescriptionParagraphs?.map(
            (paragraph) => {
              return (
                <HeaderParagraph
                  key={paragraph.sys.id}
                  mainContentHeading={paragraph.fields.heading}
                  mainContentParagraph={
                    paragraph.fields.paragraph
                  }
                />
              )
            }
          )}
        </section>
      )}
      {content?.eventTopicsParagraphs && (
        <section className='TOPICS flex-col-tl gap-md bg-primary-100 p-md rounded-md'>
          <ParagraphHeader
            headingText={content.eventTopicsHeading}
          />
          {content?.eventTopicsParagraphs?.map(
            (paragraph, idx) => {
              return (
                <div key={idx} className='LIST_WRAPPER '>
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
        </section>
      )}
      <div className='ENROLL_SECTION group hover:bg-primary-600 bg-primary-500 rounded-xl py-lg flex-col-center gap-md transition-all'>
        <p className='quote-1 text-white'>
          Step into your embodied enoughness — register today!
        </p>
        <Link
          href={`${currentPath}/enroll`}
          className='general-btn p-sm outline md text-primary-100 border-primary-100'
        >
          ENROLL →
        </Link>
      </div>
      <CtaSection {...content?.eventCta?.fields} />
    </>
  )
}

export default TrainingEventPage
