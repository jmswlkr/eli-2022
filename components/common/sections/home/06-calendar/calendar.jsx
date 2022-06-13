// External lib
import React, { useContext, useEffect } from 'react'

// Internal lib
import { ScheduleContext } from '@/context/schedule-context'

// Styling
import { calendar } from './calendar.module.scss'

export const Calendar = () => {
  const { scheduleDate, setScheduleDate } = useContext(ScheduleContext)
  
  useEffect(() => {console.log('scheduleDate changed: ', scheduleDate)}, [scheduleDate])

  return (
    <section className={calendar}>Calendar</section>
  )
}
