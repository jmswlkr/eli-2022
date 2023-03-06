import React from 'react'

import {
  container,
  about as aboutStyle,
  credentials as credentialsStyle,
} from './intro.module.scss'

export const Intro = ({ about, credentials }) => {
  return (
    <section className={container}>
      <p className={aboutStyle}>{about}</p>
      <ul className={credentialsStyle}>
        {credentials.map((c, idx) => {
          return (
            <li key={idx}>
              <h4>{c.primary}</h4>
              <p>{c.secondary}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
