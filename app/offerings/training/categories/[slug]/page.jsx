import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/utils'

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
      include: 1,
      'fields.slug[match]': params.slug
    }
  })

  const content = entry?.items[0].fields

  return (
    <>
      <HeroSecondary {...content?.hero?.fields} />
      <section className='DESCRIPTION flex-col-tl gap-lg'>
        {content?.descriptionParagraphs?.map((paragraph) => {
          return (
            <HeaderParagraph
              key={paragraph.sys.id}
              mainContentHeading={paragraph.fields.heading}
              mainContentParagraph={paragraph.fields.paragraph}
            />
          )
        })}
      </section>
      <section className='TOPICS flex-col-tl gap-md'>
        <ParagraphHeader headingText={content.eventFocusHeader} />
        {content?.eventTopicsParagraphs?.map((paragraph, idx) => {
          return (
            <div key={idx} className='LIST_WRAPPER bordered-list-wrapper'>
              <HeaderParagraph
                mainContentHeading={paragraph.fields.heading}
                mainContentParagraph={paragraph.fields.paragraph}
                classes={{ header: '!text-primary-900 font-semibold head-5' }}
              />
            </div>
          )
        })}
      </section>
      <section className='flex-col-tl gap-lg'>
        <ParagraphHeader headingText={content.categoryEventsHeader} />
        <div className='flex-col-tl gap-lg'>
          {content.categoryEventsEventList.map((event, idx) => {
            return <TrainingCard key={idx} event={event.fields} entry={event} />
          })}
        </div>
      </section>
      <CtaSection {...content.ctaCard.fields}/>
    </>
  )
}

export default TrainingCategoryPage
