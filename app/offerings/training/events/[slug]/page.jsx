import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'

import { HeroTertiary } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { ParagraphHeader } from '@/ui-components'
import { HeaderParagraph } from '@/ui-components'

import { EventBanner } from '../../../_components/event-banner'

const TrainingEventPage = async ({ params }) => {
  const { isEnabled } = draftMode()

  const { entry } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'offeringsTrainingEventPage',
      include: 1,
      'fields.pageSlug[match]': params.slug
    }
  })

  const content = entry?.items[0].fields

  return (
    <>
      <HeroTertiary type={'event'} {...content.hero.fields} />
      <EventBanner bannerText={content.eventDescriptionTeaser} />
      <section className='DESCRIPTION flex-col-tl gap-lg'>
        {content?.eventDescriptionParagraphs?.map((paragraph) => {
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
        <ParagraphHeader headingText={content.eventTopicsHeading} />
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
      <CtaSection {...content?.eventCta?.fields} />
    </>
  )
}

export default TrainingEventPage
