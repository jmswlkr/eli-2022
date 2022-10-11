import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import { AnimatePresence, motion } from 'framer-motion'

import {
  APT_DETAIL,
  CLIENT_DETAIL,
  SESSION_DETAIL,
} from '../../data/appointment-data'

import { Label } from '@/elements/section-label/section-label'
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn.jsx'
import { WaveCircles } from '@/elements/svg/wave-circles.jsx'
import { SectionHeader } from '@/elements/section-header/index.jsx'

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

const Calendar = () => {
  const [aptDetail, setAptDetail] = useState(APT_DETAIL)
  const [clientDetail, setClientDetail] = useState(CLIENT_DETAIL)
  const [sessionDetail, setSessionDetail] = useState(SESSION_DETAIL)
  const [isMobile, setIsMobile] = useState(false)

  const curSess = sessionDetail.current
  const [optionsVisible, setOptionsVisible] = useState(false)

  // viewport breakpoint for js
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleSetMonthYear = ({ activeStartDate }) => {
    // only run on month/year change
    if (!activeStartDate) return

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
    const meridian = target.dataset.mer
    const time = target.textContent

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

  /*
    TODO: Use state to visually indicate chosen appointment.
    TODO: Build in Square:
      - Disable and grey out unavailable dates/times.
      ! Need to know appointment types.
  */

  return (
    <section className={schedule} id='calendar'>
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
            />
          </div>
          <div className={hourBlock}>
            <div className={scrollWrap}>
              <ul className={timesList}>
                <span>{isMobile ? '▸' : '▾'}</span>
                {Array.from({ length: 9 }).map((_, time) => {
                  const isPM = time > 3
                  const hour = isPM ? time - 3 : time + 9
                  return (
                    <button
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
                  {curSess?.id} &nbsp; &nbsp; | &nbsp; &nbsp;{' '}
                  {curSess?.duration}
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
            </div>
            <div className={btnSubmit}>
              <ArrowBtn text='Request' arrowColor='var(--calendar-accent)' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendar;