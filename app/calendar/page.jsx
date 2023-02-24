'use client';

import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'

import {
  APT_DETAIL,
  CLIENT_DETAIL,
  SESSION_DETAIL,
} from './appointment-data'
import {
  getDateFromState,
  getDateWindow,
  getYmd,
  timeAlreadyBooked,
  toEST,
} from '/utils/date-helpers'
import {
  styleInitDate,
  toggleSelectedItem,
} from '/utils/react-calendar/style-helpers'
import {
  formatApptForSquare,
  getBookingsByDate,
} from '/utils/square/api-helpers'

import { SectionHeader } from 'ui-components/section-header/index.jsx'

import { phases } from 'animation/transition.js'
import { blurFadeIn } from 'animation/fade.js'

import {
  schedule,
  scheduleContainer,
  label,
  sectionAccent,
  blurb,
  title,
  text,
  schedulingAppContainer,
  calendarBlock,
  hourBlock,
  scrollWrap,
  timesList,
  clientBlock,
  inputList,
  aptItemList,
  aptItem,
  icon,
  aptText,
  info,
  sessionSelect,
  pseudoSelect,
  btnSubmit,
} from './scheduling.module.scss'
import { extractServicesData } from '/utils/square/api-helpers'
import { Button } from 'ui-components/general-btn/general-btn';

/*
  // TODO: Set availability window on load.
  // TODO: Set current in calendar to visibly active.
  // TODO: Disable times if already booked.
  TODO: Get services via catalogApi and populate options list with data.
  TODO: Create new customer via customersApi.
  TODO: Reset availability window on month change.
  TODO: When month is updated, refetch availability from API for new month.
*/

const Calendar = () => {
  const [aptDetail, setAptDetail] = useState(APT_DETAIL)
  const [clientDetail, setClientDetail] = useState(CLIENT_DETAIL)
  const [sessionDetail, setSessionDetail] = useState(SESSION_DETAIL)
  const [isMobile, setIsMobile] = useState(false)
  const [currBooked, setCurrBooked] = useState([])
  const [availabilityWindow, setAvailabilityWindow] = useState({
    start: new Date(Date.now()).toISOString(),
    end: '',
  })

  const curSess = sessionDetail.current
  const [optionsVisible, setOptionsVisible] = useState(false)

  // get service items
  useEffect(() => {
    axios('/api/appointments/services', { method: 'GET' }).then(({ data }) => {
      const sessTypes = extractServicesData(data)
      setSessionDetail({
        types: sessTypes,
        current: sessTypes[0],
      })
    })
  }, [])

  // set up time window & init select
  useEffect(() => {
    const current = new Date(Date.now()).toISOString()
    const future = new Date()
    future.setDate(future.getDate() + 31)
    setAvailabilityWindow({
      start: current,
      end: future.toISOString(),
    })

    styleInitDate(current)
  }, [])

  // Fetch current availability
  useEffect(() => {
    const { start, end } = availabilityWindow

    axios('/api/appointments/avail', {
      method: 'POST',
      data: {
        start,
        end,
      },
    })
      .then(({ data }) => {
        const { bookings } = data

        if (bookings) {
          console.log('bookings: ', bookings)
          const bookingsByDate = getBookingsByDate(bookings)
          setCurrBooked(bookingsByDate)
        }
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }, [availabilityWindow])

  // viewport breakpoint for js
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    console.log('aptDetail: ', aptDetail)
  }, [availabilityWindow, currBooked, aptDetail])

  // set prevbutton disabled to start
  useEffect(() => {
    document.querySelector(
      '.react-calendar__navigation__prev-button'
    ).disabled = true
  }, [])

  const handleSetMonthYear = ({ activeStartDate }) => {
    // only run on month/year change
    if (!activeStartDate) return

    // show availability for currently shown calendar
    let windowEnd = getDateWindow(activeStartDate)
    setAvailabilityWindow({
      start: activeStartDate.toISOString(),
      end: windowEnd,
    })

    // don't allow month nav back in time
    const prevBtn = document.querySelector(
      '.react-calendar__navigation__prev-button'
    )
    const visibleDate = Date.parse(activeStartDate)
    const currentDate = Date.now()
    prevBtn.disabled = visibleDate <= currentDate

    // const currentYear = new Date().getFullYear()
    const [, month, , year] = activeStartDate.toString().split(' ')

    setAptDetail((prv) => ({
      ...prv,
      date: {
        ...prv.date,
        val: {
          ...prv.date.val,
          m: month,
          y: year,
        },
      },
    }))
  }
  const handleSetDay = (v, { target }) => {
    toggleSelectedItem(target, '.react-calendar__tile')

    const date = target.textContent
    setAptDetail((prv) => ({
      ...prv,
      date: {
        ...prv.date,
        val: {
          ...prv.date.val,
          d: date,
        },
      },
    }))
  }
  const handleSetTime = ({ target }) => {
    toggleSelectedItem(target, '.time-btn')
    const meridian = target.dataset.mer
    const time = target.textContent
    console.log('time: ', time)

    setAptDetail((prv) => ({
      ...prv,
      time: {
        ...prv.time,
        val: {
          ...prv.time.val,
          t: time,
          m: meridian,
        },
      },
    }))
  }
  const handleSetClientInfo = ({ target: { value, id } }) => {
    setClientDetail((prv) => ({
      ...prv,
      [id]: value,
    }))
  }
  const handleSelectSession = ({ target: { textContent, id } }) => {
    setSessionDetail((prv) => ({
      ...prv,
      current: prv.types[id],
    }))
    setOptionsVisible(false)
  }
  const handleCreateBooking = (e) => {
    e.preventDefault()
    const { name, duration, id, version } = sessionDetail.current
    const { Name: clientName, Email, Phone } = clientDetail
    const formattedAppt = formatApptForSquare(aptDetail)
    console.log('formattedAppt: ', formattedAppt)
    axios('/api/appointments/book', {
      method: 'POST',
      data: {
        name: clientName,
        email: Email,
        phone: Phone,
        appt: {
          start: formatApptForSquare(aptDetail),
          segments: {
            durationMinutes: duration,
            serviceVariationId: id,
            serviceVariationVersion: version,
          },
        },
      },
    }).then(({ data }) => {})
  }

  /*
    // TODO: Visually indicate booked dates.
    TODO: Use state to visually indicate chosen appointment.
    TODO: Build in Square:
      - Disable and grey out unavailable dates/times.
      ! Need to know appointment types.
  */

  return (
    <section className={schedule} name='calendar'>
      <div className={scheduleContainer}>
        <div className={blurb}>
          <SectionHeader title='Schedule an Appointment' />
          <p className={text}>Schedule your initial consult with ELI. </p>
        </div>
        <div className={schedulingAppContainer}>
          <div className={calendarBlock} id='desk-calendar'>
            <ReactCalendar
              onActiveStartDateChange={handleSetMonthYear}
              onClickDay={handleSetDay}
              formatDay={(_, date) => new Date(toEST(date)).getDate()}
              tileDisabled={({ date }) => {
                const ymd = getYmd(toEST(date))

                const isBooked = currBooked[ymd]?.length >= 20
                const dateIsStale = Date.parse(date) <= Date.now()

                return dateIsStale || isBooked
              }}
            />
          </div>
          <div className={hourBlock}>
            <div className={scrollWrap}>
              <ul className={timesList}>
                <span>{isMobile ? '▸' : '▾'}</span>
                {Array.from({ length: 9 }).map((_, time) => {
                  const isPM = time > 3
                  const hour = isPM ? time - 3 : time + 9
                  const disable = () => {
                    const date = getDateFromState(aptDetail.date.val)
                    console.log('date: ', date)

                    const bookings = currBooked[date]
                    return timeAlreadyBooked(bookings, hour)
                  }
                  return (
                    <button
                      className='time-btn'
                      disabled={disable()}
                      key={time}
                      onClick={handleSetTime}
                      data-mer={isPM ? 'pm' : 'am'}
                    >
                      {hour}:00
                    </button>
                  )
                })}
                <span>{isMobile ? '◂' : '▴'}</span>
              </ul>
            </div>
          </div>
          <div className={clientBlock}>
            <div className={inputList}>
              {Object.entries(clientDetail).map(([id, value]) => {
                const inputProps = {
                  id,
                  placeholder: id,
                  value,
                  onChange: handleSetClientInfo,
                  type: id === 'Email' ? 'email' : 'text',
                  required: true,
                }

                return <input key={id} {...inputProps} />
              })}
            </div>
            <ul className={aptItemList}>
              {Object.values(aptDetail).map((ad) => {
                return (
                  <div key={ad.id} className={aptItem}>
                    <span className={icon}>{ad.icon}</span>
                    <div className={aptText}>
                      <label>{ad.id}</label>
                      <div className={info}>
                        {Object.entries(ad.val).map(([k, v]) => {
                          return <span key={k}>{v}</span>
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </ul>
            <div
              className={sessionSelect}
              onClick={() => setOptionsVisible(!optionsVisible)}
            >
              <label htmlFor='select'>SESSION TYPE</label>
              <select id='select' onMouseDown={(e) => e.preventDefault()}>
                <option>
                  {curSess?.name} &nbsp; &nbsp; | &nbsp; &nbsp;{' '}
                  {curSess?.duration} MIN
                </option>
              </select>
              <AnimatePresence exitBeforeEnter>
                {optionsVisible && (
                  <motion.ul
                    className={pseudoSelect}
                    id='pseudo-select'
                    {...phases}
                    {...blurFadeIn}
                  >
                    {sessionDetail.types.map(({ name, duration }, idx) => {
                      return (
                        <li key={name} id={idx} onClick={handleSelectSession}>
                          <span>{name}</span>
                          <span>&nbsp;</span>
                          <span>{duration} MIN</span>
                        </li>
                      )
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <div className={btnSubmit} onClick={handleCreateBooking}>
              <Button text={'Request'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendar
