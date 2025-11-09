'use client'

import { useEffect, useMemo } from 'react'
import * as dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'
import * as timezone from 'dayjs/plugin/timezone'
import * as utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { useEnrollContext } from './enroll.context'

dayjs.extend(advancedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

function formatTimeTo12Hour(time24) {
  // Automatically handle both HH:mm and HH:mm:ss
  const format =
    time24.split(':').length === 3 ? 'HH:mm:ss' : 'HH:mm'
  const time = dayjs(time24, format)

  return time.format('h:mm A')
}

export const EventDetails = ({ event }) => {
  const { eventMeta, setEventMeta } = useEnrollContext()

  const formattedDate = useMemo(
    () => ({
      start: dayjs(event.eventDateStart).format('MMM Do'),
      end: dayjs(event.eventDateEnd).format('MMM Do'),
      year: dayjs(event.eventDateStart).format('YYYY'),
      timeStart: dayjs
        .utc(event.eventDateStart)
        .tz('America/New_York')
        .format('h:mm A'),
      timeEnd: dayjs
        .utc(event.eventDateStart)
        .tz('America/New_York')
        .add(event?.eventDuration ?? 60, 'minute')
        .format('h:mm A')
    }),
    [event.eventDateStart, event.eventDateEnd]
  )

  const dateDisplayType = {
    ONCE: 'DATES',
    REPEAT_WEEKLY: 'WEEKLY'
  }['REPEAT_WEEKLY']
  // }[event?.eventFrequency ?? 'ONCE']

  function EventDateDisplay({ displayType }) {
    const formattedDoW = event?.eventDay.endsWith('s')
      ? event?.eventDay
      : `${event?.eventDay}s`
    const isStartTimeValid =
      typeof event?.eventStartTime === 'string'
    // typeof event?.eventStartTime === 'string' &&
    const dayJsValidStartTime = dayjs(
      event?.eventStartTime,
      ['HH:mm', 'HH:mm:ss'],
      true
    ).isValid()
    const startTime = isStartTimeValid
      ? formatTimeTo12Hour(event?.eventStartTime)
      : 'invalid time'

    if (displayType === 'DATES')
      return (
        <>
          <li className='gap-xs lg:flex-row lg:gap-sm meta-1 flex items-center justify-start'>
            <p className='meta-1 text-primary-500 uppercase'>
              Date
            </p>
            <span>{formattedDate.start}</span>
            <span>-</span>
            <span>{formattedDate.end}</span>
            <span>-</span>
            <span>{formattedDate.year}</span>
          </li>
          <li className='gap-xs lg:flex-row lg:gap-sm meta-1 flex items-center justify-start'>
            <p className='meta-1 text-primary-500 uppercase'>
              Time
            </p>
            <span>{formattedDate.timeStart}</span>
            <span>-</span>
            <span>{formattedDate.timeEnd}</span>
            <span>({event.eventDay})</span>
          </li>
        </>
      )
    if (displayType === 'WEEKLY')
      return (
        <li className='gap-xs lg:flex-row lg:gap-sm meta-1 flex items-center justify-start'>
          <p className='meta-1 text-primary-500 uppercase'>
            Time
          </p>
          {formattedDoW} {startTime ? `- ${startTime}` : ''}
        </li>
      )
  }

  useEffect(() => {
    setEventMeta({
      title: event?.hero?.fields?.heroPrimaryText,
      date: {
        start: formattedDate.start,
        end: formattedDate.end
      },
      price: event.eventCourseTuition,
      location: event.eventLocationName,
      tuition: event.eventCourseTuition
    })
  }, [
    event.hero?.fields?.heroPrimaryText,
    event.eventCourseTuition,
    event.eventLocationName,
    formattedDate,
    setEventMeta
  ])

  return (
    <div className='EVENT_DETAILS flex-col-tl gap-md'>
      <h2 className='DETAILS_HEADER head-5'>Event Details</h2>
      <ul className='flex-col-tl gap-ms text-neutral-200'>
        <EventDateDisplay displayType={dateDisplayType} />
        <li className='flex-center gap-sm meta-1'>
          <p className='meta-1 text-primary-500 uppercase'>
            Location
          </p>
          {event.eventLocationName}
        </li>
        <li className='flex-center gap-sm meta-1'>
          <p className='meta-1 text-primary-500 uppercase'>
            Tuition
          </p>
          {Number(event.eventCourseTuition) > 0
            ? `$${event.eventCourseTuition}`
            : 'Free'}
        </li>
      </ul>
    </div>
  )
}
