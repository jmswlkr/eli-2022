'use client'

import * as dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'

import { LinkButton } from '@/ui-components'
import { ContentfulImageBlock } from '@/ui-components'

dayjs.extend(advancedFormat)

export const TrainingCard = ({ event }) => {
  const formattedDate = dayjs(event.eventDate).format('MMMM Do, YYYY')
  const category = event?.categoryEntry?.fields?.categoryTag

  return (
    <article className='TRAINING_CARD auto-rows-auto rounded-xl lg:grid-cols-2 grid w-full h-auto grid-cols-1 overflow-hidden'>
      <div className='TEXT_CONTENT full p-ms md:p-md bg-primary-500/10 flex-col-tl gap-sm md:gap-ms lg:gap-md'>
        <div className='LABEL meta-1 text-primary-500 flex-col-tl lg:flex-center lg:!flex-row gap-[1ch]'>
          <span>{formattedDate}</span>
          <span className='lg:block hidden'>•</span>
          <span className='lg:font-normal font-semibold'>
            {event.eventLocationName}
          </span>
        </div>
        <div className='HEADING_BLOCK flex-col-tl gap-[1ch]'>
          {category && (
            <>
              <span className='CATEGORY meta-1'>{category}</span>
            </>
          )}
          <h3 className='HEADING head-3 text-primary-900'>
            {event.hero.fields.heroPrimaryText}
          </h3>
        </div>
        <p className='PARAGRAPH'>
          {event.eventDescriptionTeaser}
        </p>
        <LinkButton
          text='Sign Up →'
          path={`/offerings/training/events/${event.pageSlug}`}
          classes='sm outline text-primary-500'
        />
        {/* TODO: Include buttons for read more and sign up. */}
      </div>
      <div className='IMAGE_WRAP h-[25vh] order-first lg:order-last lg:h-auto relative'>
        <ContentfulImageBlock
          contentfulImage={event.hero.fields.heroImage}
        />
      </div>
    </article>
  )
}
