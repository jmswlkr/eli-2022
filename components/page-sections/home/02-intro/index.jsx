import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

import { baseUrl } from '../../../../utils/cloudinary'
import { cards } from './intro-data'
import { Button } from '@/elements/general-btn/general-btn'

import {
  intro,
  titleContainer,
  titleInner,
  cardContainer,
  imgWrap,
  card,
  cardBtn,
} from './intro.module.scss'

export const IntroSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    const titleContent = !isMobile ? (
      <div className={titleContainer}>
        <div className={titleInner}>
          Create <span className='gradient-text'>transformational</span> change
          through Embodied Learning.
        </div>
      </div>
    ) : (
      <>
        <span>Change through</span>
        <span>Embodied Learning</span>
      </>
    )

    setTitle(titleContent)
  }, [isMobile])

  return (
    <section className={intro} id='intro'>
      <SectionHeader title={title} labelText={`ELI Offerings`} />
      <div className={cardContainer}>
        {cards.map((c) => {
          return (
            <div key={c.title} className={card}>
              <div className={imgWrap}>
                {/* <img src={baseUrl(c.imgSrc)} alt={c.title} /> */}
                <img src={c.imgSrc} alt={c.title} />
              </div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <div className={cardBtn}>
                <Button text={c.btnText} path={c.path} />
              </div>
              {/* <ArrowBtn text={c.btnText} btnAction={() => push(`${c.path}`)} /> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}
