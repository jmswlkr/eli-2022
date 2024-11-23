import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'

import {
  EmphasisBlock,
  TestComponent,
} from '@/ui-components'
import { CtaSection } from '@/ui-components'
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

  return (
    <>
      {content?.hero?. fields && (
        <TrainingEventHero 
          date={{
            start: content.eventDateStart,
            end: content.eventDateEnd
          }} 
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
        <section className='TOPICS flex-col-tl gap-md'>
          <ParagraphHeader
            headingText={content.eventTopicsHeading}
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
        </section>
      )}
      {/* <div className='bg-primary-100 flex rounded-md'>
        <input placeholder='Email...' type="text" className="border-primary p-md bg-transparent" />
        <p className="italic">Enter your email above </p>
      </div> */}
      <CtaSection {...content?.eventCta?.fields} />
    </>
  )
}

export default TrainingEventPage
