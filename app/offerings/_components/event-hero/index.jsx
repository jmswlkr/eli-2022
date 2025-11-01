'use client'

import dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'


import {
  Button,
  LinkButton,
  TestComponent
} from '@/ui-components'
import { ContentfulImageBlock } from '@/ui-components'

dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)

function formatTimeTo12Hour(time24) {
  // Automatically handle both HH:mm and HH:mm:ss
  const format =
    time24.split(':').length === 3 ? 'HH:mm:ss' : 'HH:mm'
  const time = dayjs(time24, format)

  return time.format('h:mm A')
}

export const TrainingEventHero = ({
  heroImage,
  date,
  locationName,
  heroPrimaryText,
  currentPath,
  descriptionHero: heroDescriptionText,
  eventFrequency,
  eventDay,
  eventStartTime,
  ...rest
}) => {
  const formattedDate = {
    start: dayjs(date.start).format('MMM Do'),
    end: dayjs(date.end).format('MMM Do'),
    year: dayjs(date.start).format('YYYY')
  }

  const dateDisplayType = {
    ONCE: 'DATES',
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY'
  }['WEEKLY']
  // }[rest.eventFrequency ?? 'ONCE']

  const testContent = {
    heroImage,
    date,
    locationName,
    heroPrimaryText,
    currentPath,
    heroDescriptionText,
    formattedDate,
    rest
  }

  function EventDateDisplay({ displayType }) {
    const formattedDoW = eventDay.endsWith('s') ? eventDay : `${eventDay}s`;
    // const startTime = eventStartTime ? formatTimeTo12Hour(eventStartTime) : null;
    const isStartTimeValid = typeof eventStartTime === 'string' && dayjs(eventStartTime, ['HH:mm', 'HH:mm:ss'], true).isValid();
    const startTime = isStartTimeValid ? formatTimeTo12Hour(eventStartTime) : null;

    if (displayType === 'DATES') return (
        <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
          <span>{formattedDate.start}</span>
          <span>-</span>
          <span>{formattedDate.end}</span>
          <span>-</span>
          <span>{formattedDate.year}</span>
        </div>
    )
    if (displayType === 'WEEKLY') return (
      <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
        <span>
          {formattedDoW} {startTime ? `- ${startTime}` : ''}
        </span>
      </div>
    )
    return null;
  }
  
  return (
    <div className='TRAINING_HERO hero-container-3 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[.55fr_.45fr] mt-lg gap-md w-full'>
      {/* <TestComponent content={testContent} /> */}
      <div className={'relative full rounded-md overflow-clip'}>
        <ContentfulImageBlock contentfulImage={heroImage} />
      </div>
      <div className='TEXT_WRAP full gap-md flex flex-col items-start justify-end'>
        <p className='meta-1 text-primary-600'>Training Event</p>
        <h1 className='TEXT_1_TITLE head-2 text-primary-600 !font-weight-300'>
          {heroPrimaryText}
        </h1>
        <h2 className='TEXT_2_DATE flex-col-tl gap-[1ch] link-1 !font-body'>
          <EventDateDisplay displayType={dateDisplayType} />
          {/* <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
            <span>{formattedDate.start}</span>
            <span>-</span>
            <span>{formattedDate.end}</span>
            <span>-</span>
            <span>{formattedDate.year}</span>
          </div> */}
          <span>{locationName}</span>
          <LinkButton
            text={'Enroll →'}
            path={`${currentPath}/enroll`}
            classes={'md !tracking-[3px] solid light'}
          />
        </h2>
        {heroDescriptionText && (
          <p className='TEXT_3 par-1 !text-[24px]'>
            {heroDescriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
