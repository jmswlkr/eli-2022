'use client'

import { useEffect, useMemo } from 'react'
import * as dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'

import { useEnrollContext } from './enroll.context'

dayjs.extend(advancedFormat)

export const EventDetails = ({ event }) => {
  const { eventMeta, setEventMeta } = useEnrollContext()

  const formattedDate = useMemo(
    () => ({
      start: dayjs(event.eventDateStart).format('MMM Do'),
      end: dayjs(event.eventDateEnd).format('MMM Do'),
      year: dayjs(event.eventDateStart).format('YYYY')
    }),
    [event.eventDateStart, event.eventDateEnd]
  )

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
        <li className='flex-center gap-sm meta-1'>
          <p className='meta-1 text-primary-500 uppercase'>
            Location
          </p>
          {event.eventLocationName}
        </li>
        <li className='flex-center gap-sm meta-1'>
          <p className='meta-1 text-primary-500 uppercase'>
            Tution
          </p>
          ${event.eventCourseTuition}
        </li>
      </ul>
    </div>
  )
}
