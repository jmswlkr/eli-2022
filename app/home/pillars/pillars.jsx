'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { baseUrl } from '@/utils'

import {
  pillars,
  sectionAccent,
  shade,
  pillarsBackgroundContainer,
  darken,
  fg,
  bg,
  pillarsTextContent,
  blurb,
  title,
  subtitle,
  text,
  pillarsSlider,
  pillarsModal,
  modalContent,
  modalIcon,
  modalTitle,
  modalDivider,
  modalText,
  modalNavigation,
  modalPrev,
  modalNext,
  modalListNavigation,
  modalNavItem,
  active,
  pillarCardsGrid,
  pillarCard,
  expandBtn,
  activeCard,
  standardCard,
  cardIcon,
  cardDivider,
  cardText,
  padded,
  cardHeading
} from './pillars.module.scss'
import { useScrollOnMount } from '@/hooks'

import { FlowerIcon, StonesIcon, ThoughtIcon, YogaIcon } from '@/ui-components'
import { breakWords } from '@/utils'
import { useLayoutContext } from '@/context'
import { ChevronIcon } from '@/ui-components'
import { HeaderParagraph } from '@/ui-components'

export const Pillars = ({
  pillarsTitleSubtitle,
  pillarsMainText,
  pillarsCard1Title,
  pillarsCard1Text,
  pillarsCard2Title,
  pillarsCard2Text,
  pillarsCard3Title,
  pillarsCard3Text,
  pillarsCard4Title,
  pillarsCard4Text
}) => {
  const [curPillar, setCurPillar] = useState(null)

  useScrollOnMount()

  const contentfulPillars = [
    {
      id: 'sensibilities-01',
      path: '/',
      title: breakWords(pillarsCard1Title),
      text: pillarsCard1Text,
      // text: <>{pillarsCard1Text}</>,
      icon: <StonesIcon />
    },
    {
      id: 'presence-02',
      path: '/',
      title: breakWords(pillarsCard2Title),
      text: pillarsCard2Text,
      // text: <>{pillarsCard2Text}</>,
      icon: <YogaIcon />
    },
    {
      id: 'discernment-03',
      path: '/',
      title: breakWords(pillarsCard3Title),
      text: pillarsCard3Text,
      // text: <>{pillarsCard3Text}</>,
      icon: <ThoughtIcon />
    },
    {
      id: 'learning-04',
      path: '/',
      title: breakWords(pillarsCard4Title),
      text: pillarsCard4Text,
      // text: <>{pillarsCard4Text}</>,
      icon: <FlowerIcon />
    }
  ]

  return (
    <motion.section className={pillars}>
      <div className={pillarsTextContent}>
        <div className={blurb}>
          <h2 className={title}>{pillarsTitleSubtitle[0]}</h2>
          <p className={subtitle}>{pillarsTitleSubtitle[1]}</p>
          <p className={text}>
            <HeaderParagraph mainContentParagraph={pillarsMainText} />
          </p>
        </div>
      </div>
      <div className={pillarCardsGrid}>
        {contentfulPillars.map((plr, idx) => {
          return (
            <PillarCard
              key={plr.id}
              idx={idx}
              {...plr}
              curPillar={curPillar}
              allPillars={contentfulPillars}
            />
          )
        })}
      </div>
      <div
        className={`${pillarsBackgroundContainer} ${curPillar ? darken : ''}`}
      >
        <div className={shade} />
        <img
          className={fg}
          src={baseUrl('center-tree_jxzinq', 'good')}
          alt=''
        />
        <img className={bg} src={baseUrl('BG_no-tree_fsmhkc', 'good')} alt='' />
      </div>
      <span id='pillars' className='scroll-pillars' />
    </motion.section>
  )
}

function PillarCard({ idx, title, icon, handleHoverPillar, allPillars }) {
  const { setContentModalOpen, setModalContent, contentModalOpen } =
    useLayoutContext()

  // set modal open and inject content.
  const handleOpenAndPopulateModal = () => {
    setContentModalOpen(!contentModalOpen)
    setModalContent(<PillarsModal allPillars={allPillars} curIdx={idx} />)
  }

  return (
    <article className={pillarCard} onClick={handleOpenAndPopulateModal}>
      <h6 className={cardHeading}>{title}</h6>
      <div className={cardDivider} />
      <div className={cardIcon}>{icon}</div>
      <p className={expandBtn}>Expand</p>
    </article>
  )
}

// function PillarsModal({ id, icon, title, text, allPillars }) {
function PillarsModal({ allPillars, idx = 0 }) {
  const [curIdx, setCurIdx] = useState(idx)

  const { icon, title, text } = allPillars[curIdx]

  const handleCyclePillars = (direction) => {
    if (direction === 'next') {
      if (curIdx < allPillars.length - 1) {
        setCurIdx((prvIdx) => prvIdx + 1)
      } else {
        setCurIdx(0)
      }
    }
    if (direction === 'prev') {
      if (curIdx > 0) {
        setCurIdx((prvIdx) => prvIdx - 1)
      } else {
        setCurIdx(allPillars.length - 1)
      }
    }
  }

  return (
    <div className={pillarsModal}>
      <div className={modalContent}>
        <div className={modalIcon}>{icon}</div>
        <h2 className={modalTitle}>{title}</h2>
        <div className={modalDivider}></div>
        <div className={modalText}>
          <HeaderParagraph mainContentParagraph={text} />
        </div>
        {/* <p className={modalText}>{text}</p> */}
      </div>
      <div className={modalNavigation}>
        <button
          className={modalPrev}
          onClick={() => handleCyclePillars('prev')}
        >
          <ChevronIcon />
        </button>
        <button
          className={modalNext}
          onClick={() => handleCyclePillars('next')}
        >
          <ChevronIcon />
        </button>
      </div>
      <ul className={modalListNavigation}>
        {allPillars.map((pillar, idx) => {
          const activeStyle = pillar.title === title ? active : ''

          return (
            <li
              onClick={() => setCurIdx(idx)}
              className={`${modalNavItem} ${activeStyle}`}
              key={pillar.id}
            >
              {pillar.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
