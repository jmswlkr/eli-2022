import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactCalendar from 'react-calendar'

import { APT_DETAIL, CLIENT_DETAIL, SESSION_DETAIL } from '../appointment-data'

import {
  blurb,
  title,
  text,
  schedule,
  dateSlider,
  month,
  date,
  day,
  timeSlider,
  apptSelector,
} from './scheduling.mobile.module.scss'

/*
  * Calenar Slider
  # Build out calendar in horizontal format.
  # Map out all months & days, display laterally with overflow scroll.
  
  + Make selection by position:
  # If date.offsetX == ~50% then set as selection.
  # Should implement some sort of scroll snapping.
*/

export const ScheduleMobile = () => {
  const [aptDetail, setAptDetail] = useState(APT_DETAIL)
  const [clientDetail, setClientDetail] = useState(CLIENT_DETAIL)
  const [sessionDetail, setSessionDetail] = useState(SESSION_DETAIL)

  const curSess = sessionDetail.current
  const [optionsVisible, setOptionsVisible] = useState(false)

  const [days, setDays] = useState([])

  useEffect(() => {
    const date = new Date()
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    setDays(
      Array.from({ length: days }).map((_, idx) => {
        return idx + 1
      })
    )
  }, [])


  
  return (
    <section className={schedule}>
      <div className={blurb}>
        <h2 className={title}>Schedule an Appointment</h2>
        <p className={text}>
          {' '}
          Mauris dictum egestas felis at semper. Aenean at tortor eros. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.{' '}
        </p>
      </div>
      <div className={dateSlider} id='mobile-calendar'>
        <ReactCalendar />
        {/* <div className={month}></div>
        <div className={date}></div> */}
        {/* <div className={day}></div> */}
      </div>
      <div className={timeSlider}></div>
      {/* <div className={apptSelector}>
        <label htmlFor='select'>SESSION TYPE</label>
        <select id='select' onMouseDown={(e) => e.preventDefault()}>
          <option>
            {curSess.id} &nbsp; &nbsp; | &nbsp; &nbsp; {curSess.duration}
          </option>
        </select>
        <AnimatePresence exitBeforeEnter>
          {optionsVisible && (
            <motion.ul
              className={pseudoSelect}
              id='pseudo-select'
              {...phases}
              variants={blurFadeIn}
            >
              {sessionDetail.types.map(({ id, duration }, idx) => {
                return (
                  <li key={id} id={idx} onClick={handleSelectSession}>
                    <span>{id}</span>
                    <span>&nbsp;</span>
                    <span>{duration}</span>
                  </li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div> */}
    </section>
  )
}
