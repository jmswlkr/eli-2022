// External lib
import React from 'react'

// Internal lib
import { founderText } from '@/data/about-data'
import { baseUrl } from '@/utils/cloudinary'

// Styling
import {
  founder,
  sectionHero,
  sectionTitle,
  mSectionTitle,
  founderImg,
  quote as quoteStyle,
  founderTextContent,
  qualifications,
  title,
  list,
  item,
  blurb as blurbStyle
} from './founder.module.scss'
import { QuoteMark } from 'components/elements/svg/quote-mark'
import { SectionHeader } from '@/elements/section-header'

export const Founder = () => {
  const { quote, qual, blurb } = founderText

  return (
    <section className={founder}>
      <div className={sectionHero}>
        <div className={mSectionTitle}>
          <SectionHeader title='About the Founder'/>
        </div>
        <span className={founderImg}>
          <img
            src={baseUrl('founder-ph_tujxvc', 'good')}
            alt='founder of ELI, Alison Brzenchek'
          />
        </span>
        <div className={quoteStyle}>
          <span><QuoteMark /></span>
          <p>{quote.text}</p>
          <em>{quote.attr}</em>
        </div>
        <div className={sectionTitle}>
          <h2>About the Founder</h2>
          <h4>Alison Brzenchek</h4>
        </div>
      </div>
      <div className={founderTextContent}>
        <div className={qualifications}>
          <h5 className={title}>{qual.title}</h5>
          <ul className={list}>
            {qual.list.map((qlf, idx) => {
              return (
                <li key={idx} className={item}>
                  {qlf}
                </li>
              )
            })}
          </ul>
        </div>
        <p className={blurbStyle}>
          <b>{blurb.emph}{' '}</b>
          {blurb.text}
        </p>
      </div>
    </section>
  )
}
