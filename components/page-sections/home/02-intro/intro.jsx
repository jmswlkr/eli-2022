import React from 'react'

import { baseUrl } from '@/utils/cloudinary'

import {
  intro,
  sectionLabel,
  quote,
  collage,
  collageImg,
  sec,
  ter,
  collagePrimary,
  collageTextContent,
  sectionAccent,
  title,
  blurb,
  blurbEmph,
  btn,
  collageMainImg,
} from './intro.module.scss'
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

export const Intro = () => {
  return (
    <section className={intro}>
      <div className={collage}>
        <div className={collagePrimary}>
          <img
            src={baseUrl('bench-girl_lfbyyl', 'eco')}
            alt='girl watching sunset on bench'
          />
          <div className={collageTextContent}>
            <SectionHeader title='A new beginning.'/>
            <p className={blurb}>
              The Embodied Learning Institute (ELI) is an organization founded
              by Dr. Ali  (MSW, Ph.D.). Dr. Ali’s passion is helping individuals
              and organizations thrive via the 3 pillars of Embodied Enoughness:{' '}
              <br />{' '}
              <span className={blurbEmph}>
                mindful living, <br/> embodied learning, <br/>
                and wholehearted presence.
              </span>
            </p>
            <div className={btn}>
              <ArrowBtn />
            </div>
          </div>
        </div>
        <div className={`${collageImg} ${sec}`}>
          <img
            src={baseUrl('cloudy-hills_uadnic', 'eco')}
            alt='girl watching sunset on bench'
          />
        </div>
        <div className={`${collageImg} ${ter}`}>
          <img
            src={baseUrl('lily_qzb4mr', 'eco')}
            alt='girl watching sunset on bench'
          />
        </div>
      </div>
    </section>
  )
}
