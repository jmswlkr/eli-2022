import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'

import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

import { baseUrl } from '../../../utils/cloudinary'
import { cards } from './offerings-section-data'

import { choiceWrapper, choiceBtn } from './offerings.module.scss'
import {
  offerings,
  cardContainer,
  imgWrap,
  card,
} from './offerings.module.scss'
import {
  offeringsTwo,
  bgImgWrap,
  cardContainerAlt,
  cardAlt,
  activeCard,
  sectionBlurb,
  fadeBlock,
} from './offerings.module.scss'

const VersionOne = (cards, title) => {
  const { push } = useRouter()

  return (
    <div className={offerings}>
      <SectionHeader title={title} labelText={`ELI Offerings`} />
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
    </div>
  )
}

const VersionTwo = (cards, title, isMobile, curBG, handleBgChange) => {
  // const { ref: sectionRef, inView } = useInView({ threshold: 0.75 })

  return (
    // <div className={`${offerings} ${offeringsTwo}`} ref={sectionRef}>
    <div className={`${offerings} ${offeringsTwo}`}>
      {/* <div className={bgImgWrap} style={{ opacity: inView ? 1 : 0 }}> */}
      <div className={bgImgWrap}>
        <div className={fadeBlock} />
        {cards.map((c, idx) => {
          const visible = {
            opacity: `${idx === curBG ? 0.2 : 0}`,
          }

          return (
            <img
              key={c.title}
              style={visible}
              src={baseUrl(c.imgSrc)}
              alt={c.title}
            />
          )
        })}
        <div className={fadeBlock} />
      </div>
      <SectionHeader
        title={title}
        labelText={`ELI Offerings`}
        withLabel={false}
      />
      <p className={sectionBlurb}>
        ELI offers online and onsite training. Our holistic approach presumes we
        are all part of multiple interconnected and interrelated systems that
        shape how we live and lead. Our practice-based training brings to light
        new choices and possibilities via collaborative learning communities
        grounded in growth, resilience, and healing.
      </p>
      <div className={cardContainerAlt}>
        {cards.map((c, idx) => {
          const active = idx === curBG ? activeCard : ''

          return (
            <div
              key={c.title}
              className={`${cardAlt} ${active}`}
              onMouseEnter={() => handleBgChange(idx)}
            >
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <ArrowBtn text={c.btnText} btnAction={() => push(`${c.path}`)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const OfferingsSection = () => {
  const [curVersion, setCurVersion] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [title, setTitle] = useState('')
  const { push } = useRouter()

  
  const [curBG, setCurBG] = useState(0)

  const handleBgChange = (idx) => {
    console.log('idx: ', idx)
    setCurBG(idx)
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    const titleContent = !isMobile ? (
      `Create transformational change through Embodied Learning.`
    ) : (
      <>
        <span>Change through</span>
        <span>Embodied Learning</span>
      </>
    )

    setTitle(titleContent)
  }, [isMobile])

  const handleVersionSwitch = () => {
    curVersion === 1 ? setCurVersion(0) : setCurVersion(1)
  }

  const versions = [VersionOne, VersionTwo]

  const verProps = [cards, title, isMobile, curBG, handleBgChange]

  return (
    <div className={choiceWrapper}>
      {versions[curVersion](...verProps)}
      <button className={choiceBtn} onClick={handleVersionSwitch}>
        Switch to version {curVersion === 1 ? 1 : 2}
      </button>
    </div>
  )
}
