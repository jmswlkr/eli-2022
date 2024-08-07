'use client'

import { useState } from 'react'

import { extractValuesCardsFromContentful } from './extract-values'

import {
  container,
  card,
  cardTitle,
  cardText,
  shade,
  modalContainer,
  modalContent,
  thumbnail,
  title,
  divider,
  text,
  arrowNav,
  prev,
  next
} from './values.module.scss'
import { ChevronIcon, HeaderParagraph } from '@/ui-components'
import { useLayoutContext } from 'app/(context)/layout.context'

export const Values = (content) => {
  const { valuesHeadingBlock } = content

  const values = extractValuesCardsFromContentful(content)

  const [flippedCards, setFlippedCards] = useState([])

  const handleFlipped = (idx) => {
    flippedCards.includes(idx)
      ? setFlippedCards(flippedCards.filter((i) => i !== idx))
      : setFlippedCards([...flippedCards, idx])
  }

  return (
    <section className={container}>
      <HeaderParagraph
        mainContentHeading={valuesHeadingBlock.fields.heading}
        mainContentParagraph={
          valuesHeadingBlock.fields.paragraph
        }
      />
      <ul
        className={
          'VALUES_GRID grid lg:grid-cols-2 auto-rows-[150px] lg:auto-rows-[250px] w-full gap-md'
        }
      >
        {values.map((value, idx) => {
          return (
            <ValueCard
              key={value.front}
              allValues={values}
              value={value}
              idx={idx}
            />
          )
        })}
      </ul>
    </section>
  )
}

function ValueCard({ value, allValues, idx }) {
  const { front, back, image, color } = value

  const { setContentModalOpen, setModalContent, contentModalOpen } =
    useLayoutContext()

  // set modal open and inject content.
  const handleOpenAndPopulateModal = () => {
    setContentModalOpen(!contentModalOpen)
    setModalContent(<ValuesModal allValues={allValues} idx={idx} />)
  }

  return (
    <li className={`${card}`} onClick={handleOpenAndPopulateModal}>
      <span className='!head-4 uppercase'>{front}</span>
      <div className={`${cardText}`}>
        <p>{back}</p>
      </div>
      <div className={shade} style={{ background: color }} />
      <img src={image.url} alt={image.alt} />
    </li>
  )
}

function ValuesModal({ allValues, idx }) {
  const [curIdx, setCurIdx] = useState(idx)

  const { front, back, image } = allValues[curIdx]

  const handleCyclePillars = (direction) => {
    if (direction === 'next') {
      if (curIdx < allValues.length - 1) {
        setCurIdx((prvIdx) => prvIdx + 1)
      } else {
        setCurIdx(0)
      }
    }
    if (direction === 'prev') {
      if (curIdx > 0) {
        setCurIdx((prvIdx) => prvIdx - 1)
      } else {
        setCurIdx(allValues.length - 1)
      }
    }
  }

  return (
    <div className={modalContainer}>
      <div className={modalContent}>
        <div className={thumbnail}>
          <img src={image.url} alt={front} />
        </div>
        <h2 className={title}>{front}</h2>
        <div className={divider} />
        <p className={text}>{back}</p>
      </div>
      <div className={arrowNav}>
        <button className={prev} onClick={() => handleCyclePillars('prev')}>
          <ChevronIcon />
        </button>
        <button className={next} onClick={() => handleCyclePillars('next')}>
          <ChevronIcon />
        </button>
      </div>
    </div>
  )
}
