// External lib
import React, { useContext, useEffect } from 'react'

// Internal lib
import { ScheduleContext } from '@/context/schedule-context'

// Components
import { Label } from '@/elements/section-label/section-label'
import { Calendar } from './calendar/calendar.jsx'

// Styling
import {
  schedule,
  scheduleContainer,
  label,
  blurb,
  title,
  text,
  schedulingAppContainer,
  calendarBlock,
  hourBlock,
  clientBlock,
} from './scheduling.module.scss'


export const Scheduling = () => {
  const { scheduleDate, setScheduleDate } =
    useContext(ScheduleContext)

  useEffect(() => {
    console.log('scheduleDate changed: ', scheduleDate)
  }, [scheduleDate])

  return (
    <section className={schedule}>
      <div className={scheduleContainer}>
        <div className={blurb}>
          <h2 className={title}>Schedule an Appointment</h2>
          <p className={text}>
            {' '}
            Mauris dictum egestas felis at semper. Aenean at
            tortor eros. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos
            himenaeos.{' '}
          </p>
          <div className={label}>
            <Label>Calendar</Label>
          </div>
        </div>
        <div className={schedulingAppContainer}>
          <div className={calendarBlock}>
            <Calendar />
          </div>
          <div className={hourBlock}></div>
          <div className={clientBlock}></div>
        </div>
      </div>
    </section>
  )
}
