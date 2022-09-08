// External
import React from 'react'

// Internal lib
import { baseUrl } from '@/utils/cloudinary'

// Components
import { Label } from 'components/elements/section-label/section-label'

// Styling & Animation
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
  title,
  blurb,
  blurbEmph,
  btn,
  collageMainImg,
} from './intro.module.scss'
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'

export const Intro = () => {
  return (
    <section className={intro}>
      <div className={sectionLabel}>
        <Label>Embodied Learning Institute</Label>
      </div>
      <div className={collage}>
        <div className={collagePrimary}>
          <img
            src={baseUrl('bench-girl_lfbyyl', 'eco')}
            alt='girl watching sunset on bench'
          />
          <div className={collageTextContent}>
            <h2 className={title}>Introductory title text that is longish.</h2>
            <p className={blurb}>
              The Embodied Learning Institute (ELI) is an organization founded
              by Dr. Ali  (MSW, Ph.D.). Dr. Ali’s passion is helping individuals
              and organizations thrive via the 3 pillars of Embodied Enoughness:{' '}
              <br />{' '}
              <span className={blurbEmph}>
                mindful living, embodied learning, and wholehearted presence.
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
