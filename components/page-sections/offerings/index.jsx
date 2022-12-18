import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'

import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

import { baseUrl } from '../../../utils/cloudinary'
import { cards } from './offerings-section-data'

import {
  offerings,
  titleContainer,
  titleInner,
  cardContainer,
  imgWrap,
  card,
} from './offerings.module.scss'

export const OfferingsSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [title, setTitle] = useState('')
  const { push } = useRouter()

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
    <section className={offerings} id='intro'>
      <SectionHeader
        title={title}
        labelText={`ELI Offerings`}
      />
      <div className={cardContainer}>
        {cards.map((c) => {
          return (
            <div key={c.title} className={card}>
              <div className={imgWrap}>
                <img src={baseUrl(c.imgSrc)} alt={c.title} />
              </div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <ArrowBtn text={c.btnText} btnAction={() => push(`${c.path}`)} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
