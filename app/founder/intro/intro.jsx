import React from 'react'

import {
  container,
  about as aboutStyle,
  credentials as credentialsStyle,
} from './intro.module.scss'

export const Intro = ({ salutation, about, credentials }) => {
  return (
    <section className={container}>
      <p className={aboutStyle}>
        {salutation && <em>{salutation} &nbsp;</em>}
        {about}
      </p>
      <ul className={credentialsStyle}>
        {credentials.map((credential, idx) => {
          const [primary, secondary] = credential
            .split(';')
            .map((c) => c.trim())

          return (
            <li key={idx}>
              <h4>{primary}</h4>
              <p>{secondary}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
