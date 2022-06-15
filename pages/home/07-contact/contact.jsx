// External Lib
import React from 'react'

// Components
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

// Styling
import {
  contact,
  formSection,
  title,
  blurb,
  contactForm,
  name,
  email,
  submitBtn,
  message,
  mapSection,
  mapShade
} from './contact.module.scss'

export const Contact = () => {
  return (
    <section className={contact}>
      <div className={formSection}>
        <h2 className={title}>Contact</h2>
        <p className={blurb}>
          Mauris dictum egestas felis at semper. Aenean at
          tortor eros. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos
          himenaeos.{' '}
        </p>
        <form className={contactForm}>
          <input
            className={name}
            type='text'
            name=''
            id=''
            placeholder='Name'
          />
          <input
            className={email}
            type='text'
            name=''
            id=''
            placeholder='Email'
          />
          <textarea
            className={message}
            placeholder='Enter your message...'
          />
          <span className={submitBtn}>
            <ArrowBtn>Sumbit</ArrowBtn>
          </span>
        </form>
      </div>
      <div className={mapSection}>
        <div className={mapShade} />
        <img src={'/map-fade-2.png'} alt='' />
      </div>
    </section>
  )
}
