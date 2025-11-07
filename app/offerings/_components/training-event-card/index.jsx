'use client'

import Link from 'next/link'
import * as dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import {
  HeaderParagraph,
  LinkButton,
  TestComponent
} from '@/ui-components'
import { ContentfulImageBlock } from '@/ui-components'
import { twm } from 'utils/tailwind'

dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)

function formatTimeTo12Hour(time24) {
  // Automatically handle both HH:mm and HH:mm:ss
  const format =
    time24.split(':').length === 3 ? 'HH:mm:ss' : 'HH:mm'
  const time = dayjs(time24, format)

  return time.format('h:mm A')
}

export const TrainingCard = ({ event }) => {

  const formattedDate = {
    start: dayjs(event.eventDateStart).format('MMM Do'),
    end: dayjs(event.eventDateEnd).format('MMM Do'),
    year: dayjs(event.eventDateStart).format('YYYY')
  }

  const dateDisplayType = {
    ONCE: 'DATES',
    REPEAT_WEEKLY: 'WEEKLY',
  }[event?.eventFrequency ?? 'ONCE']

  function EventDateDisplay({ displayType }) {
    const formattedDoW = event?.eventDay.endsWith('s')
      ? event?.eventDay
      : `${event?.eventDay}s`
    const isStartTimeValid =
      typeof event?.eventStartTime === 'string' &&
      dayjs(
        event?.eventStartTime,
        ['HH:mm', 'HH:mm:ss'],
        true
      ).isValid()
    const startTime = isStartTimeValid
      ? formatTimeTo12Hour(event?.eventStartTime)
      : null

    if (displayType === 'DATES')
      return (
        <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
          <span>{formattedDate.start}</span>
          <span>-</span>
          <span>{formattedDate.end}</span>
          <span>-</span>
          <span>{formattedDate.year}</span>
        </div>
      )
    if (displayType === 'WEEKLY')
      return (
        <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
          <span>
            {formattedDoW} {startTime ? `- ${startTime}` : ''}
          </span>
        </div>
      )
    // return null;
  }

  return (
    <Link
      className='group p-ms hover:bg-primary-300 overflow-clip rounded-xl transition-all border border-transparent'
      href={`/offerings/training/events/${
        event?.pageSlug ?? '#'
      }`}
    >
      <TestComponent content={event} />
      <article
        className={twm(
          'TRAINING_CARD auto-rows-auto rounded-xl grid w-full h-auto overflow-hidden',
          event.hero?.fields?.heroImage
            ? 'lg:grid-cols-2 grid-cols-1'
            : 'grid-cols-1'
        )}
      >
        <div className='TEXT_CONTENT full p-ms md:p-md bg-primary-100 flex-col-tl gap-sm md:gap-ms lg:gap-md'>
          <div className='LABEL meta-1 text-primary-500 flex-col-tl lg:flex-center lg:!flex-row gap-[1ch]'>
            <EventDateDisplay displayType={dateDisplayType} />
            {/* <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
              <span>{formattedDate.start}</span>
              <span>-</span>
              <span>{formattedDate.end}</span>
              <span>-</span>
              <span>{formattedDate.year}</span>
            </div> */}
            <span className='lg:block hidden'>•</span>
            <span className='lg:font-normal font-semibold'>
              {event.eventLocationName}
            </span>
          </div>
          <div className='HEADING_BLOCK flex-col-tl gap-[1ch]'>
            <h3 className='HEADING head-3 text-primary-900'>
              {event?.hero?.fields?.heroPrimaryText
                ? event?.hero?.fields?.heroPrimaryText
                : event?.eventTitle}
            </h3>
          </div>
          {event?.teaserDescription && (
            <HeaderParagraph
              mainContentParagraph={event?.teaserDescription}
            />
          )}
          <button className='general-btn sm outline text-primary-500 group-hover:bg-primary-600 group-hover:text-white'>
            Sign up →
          </button>
        </div>
        {event?.hero?.fields?.heroImage && (
          <div className='IMAGE_WRAP h-[25vh] order-first lg:order-last lg:h-auto relative'>
            <ContentfulImageBlock
              contentfulImage={event.hero.fields.heroImage}
            />
          </div>
        )}
      </article>
    </Link>
  )
}
