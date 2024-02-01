'use client'

import * as dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'

import { Button } from '@ui-components/general-btn/general-btn'
import { ContentfulImageBlock } from '@ui-components/contentful-image-block'
import { HeaderParagraph } from '@ui-components/header-paragraph/header-paragraph'
import { HeaderParagraphList } from '@ui-components/header-paragraph/header-paragraph-list'

dayjs.extend(advancedFormat)

export const TrainingCard = ({ event }) => {
  console.log('event: ', event)

  const formattedDate = dayjs(event.eventDate).format('MMMM Do, YYYY')
  const category = event.categoryEntry.fields.eventCategoryId

  return (
    <article className='auto-rows-auto rounded-xl lg:grid-cols-2 grid w-full h-auto grid-cols-1 overflow-hidden'>
      <div className='TEXT_CONTENT full p-md lg:p-lg bg-primary-500/10 flex-col-tl gap-md'>
        <div className='LABEL meta-1 text-primary-500 flex-col-tl lg:flex-center gap-[1ch]'>
          <span>{formattedDate}</span>
          <span className='lg:block hidden'>-</span>
          <span className='font-semibold'>{event.eventLocationName}</span>
        </div>
        <div className='HEADING flex-col-tl lg:flex-center lg:!items-end gap-[1ch]'>
          <h4 className='head-3 text-primary-900 lg:order-first order-last'>{event.eventTitle}</h4>
          <span className='lg:block hidden'>|</span>
          <span className='meta-1 '>{category}</span>
        </div>
        <p>{event.eventDescriptionTeaser}</p>
        <Button text='Sign Up →' path='#' classes='med ' />
      </div>
      <div className='h-[25vh] order-first lg:order-last lg:h-auto relative'>
        <ContentfulImageBlock contentfulData={event.imageMain} />
      </div>
    </article>
  )
}
