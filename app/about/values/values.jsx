import React from 'react'

import { VALUES, VALUES_INTRO } from '../about-content'

import {
  container,
  intro,
  header,
  content,
  grid,
  card,
  shade,
} from './values.module.scss'

export const Values = () => {
  const { title, text } = VALUES_INTRO

  return (
    <section className={container}>
      <div className={intro}>
        <h2 className={header}>{title}</h2>
        <p className={content}>{text}</p>
      </div>
      <ul className={grid}>
        {VALUES.map(({ front, back, image, color }) => {
          return (
            <li key={front} className={card}>
              <span>{front}</span>
              <span>{back}</span>
              <div className={shade} style={{ background: color }} />
              <img src={image.url} alt={image.alt} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
