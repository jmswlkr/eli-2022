// External Lib
import React, { useEffect, useState } from 'react'
import { send } from '@emailjs/browser'

// Components
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'

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
  mapShade,
} from './contact.module.scss'

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'ELI | The Embodied Learning Institute',
    message: '',
    reply_to: '',
  })

  // Email form functions
  const handleChange = (e) => {
    setToSend((prv) => {
      return {
        ...prv,
        [e.target.name]: e.target.value,
      }
    })
  }

  useEffect(() => {
    // 
  }, [toSend])

  const handleSubmit = (e) => {
    e.preventDefault()

    send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      toSend,
      `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
    )
      .then((response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      })
      .catch((err) => {
        
      })
  }

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
            name='from_name'
            placeholder='Name'
            // value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            className={email}
            type='text'
            name='reply_to'
            placeholder='Email'
            // value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            className={message}
            // value={toSend.mess}
            onChange={handleChange}
            placeholder='Enter your message...'
          />
          <span
            className={submitBtn}
            onClick={handleSubmit}
          >
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
