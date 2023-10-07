'use client'

import React, { useEffect, useState } from 'react'

import { extractValuesCardsFromContentful } from './extract-values'

import {
  container,
  intro,
  header,
  content as contentStyle,
  grid,
  card,
  cardTitle,
  cardText,
  flipped,
  shade,
  modalContainer,
  modalContent,
  thumbnail,
  title,
  divider,
  text,
  arrowNav,
  prev,
  next,
  listNav,
  navItem
} from './values.module.scss'
import { ChevronIcon } from 'ui-components/svg/chevron'
import { useLayoutContext } from 'app/(context)/layout.context'

export const Values = (content) => {
  const { valuesTitle, valuesTextContent } = content

  const values = extractValuesCardsFromContentful(content)

  const [flippedCards, setFlippedCards] = useState([])

  const handleFlipped = (idx) => {
    flippedCards.includes(idx)
      ? setFlippedCards(flippedCards.filter((i) => i !== idx))
      : setFlippedCards([...flippedCards, idx])
  }

  return (
    <section className={container}>
      <div className={intro}>
        <h2 className={header}>{valuesTitle}</h2>
        <p className={contentStyle}>{valuesTextContent}</p>
      </div>
      <ul className={grid}>
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
      <span className={cardTitle}>{front}</span>
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

  /*
    TODO
    # Ensure that this set up opens the modal slot.
    # Continue with building the values modal as designed in Figma.
  */
 
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
      <ul className={listNav}>
        {allValues.map((value, idx) => {
          const activeStyle = value.front === title ? active : ''

          return (
            <li
              onClick={() => setCurIdx(idx)}
              className={`${navItem} ${activeStyle}`}
              key={value.front}
            >
              {value.front}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/*

<li
  key={front}
  className={`${card}`}
  // onClick={() => handleFlipped(idx)}
  // className={`${card} ${isFlipped ? flipped : ''}`}
>
  <span className={cardTitle}>{front}</span>
  <div className={`${cardText}`}>
    <p>{back}</p>
  </div>
  <div className={shade} style={{ background: color }} />
  <img src={image.url} alt={image.alt} />
</li>

*/
