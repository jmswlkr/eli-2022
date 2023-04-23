'use client'

import React, { useState } from 'react'

import { VALUES, VALUES_INTRO } from '../about-content'
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
} from './values.module.scss'

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
        {values.map(({ front, back, image, color }, idx) => {
          const isFlipped = flippedCards.includes(idx)

          return (
            <li
              key={front}
              onClick={() => handleFlipped(idx)}
              className={`${card} ${isFlipped ? flipped : ''}`}
            >
              <span className={cardTitle}>{front}</span>
              <div className={`${cardText}`}>
                <p>{back}</p>
              </div>
              <div className={shade} style={{ background: color }} />
              <img src={image.url} alt={image.alt} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
