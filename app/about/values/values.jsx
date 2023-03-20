'use client';

import React, { useState } from 'react'

import { VALUES, VALUES_INTRO } from '../about-content'

import {
  container,
  intro,
  header,
  content,
  grid,
  card,
  cardTitle,
  cardText,
  flipped,
  shade,
} from './values.module.scss'

export const Values = () => {
  const { title, text } = VALUES_INTRO

  const [flippedCards, setFlippedCards] = useState([])

  const handleFlipped = (idx) => { 
    flippedCards.includes(idx)
    ? setFlippedCards(flippedCards.filter((i) => i !== idx))
    : setFlippedCards([...flippedCards, idx])
   }

  return (
    <section className={container}>
      <div className={intro}>
        <h2 className={header}>{title}</h2>
        <p className={content}>{text}</p>
      </div>
      <ul className={grid}>
        {VALUES.map(({ front, back, image, color }, idx) => {
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
