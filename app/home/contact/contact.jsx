'use client'

import { useEffect, useState } from 'react'
import { send } from '@emailjs/browser'

import { SectionHeader } from 'ui-components/section-header'
import { Button } from 'ui-components/general-btn/general-btn'

import {
  contact,
  formSection,
  blurb,
  contactForm,
  contactInfo,
  name,
  email,
  submitBtn,
  message,
  appointment,
  image,
  cta,
  heading,
  text,
  btn,
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
        // console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {})
  }

  return (
    <section className={contact}>
      <span className='scroll-pad' id='contact' />
      <div className={formSection}>
        <div className={blurb}>
          <SectionHeader title='Get in touch' withLabel={false} />
        </div>
        <form className={contactForm}>
          <div className={contactInfo}>
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
          </div>
          <textarea
            className={message}
            // value={toSend.mess}
            onChange={handleChange}
            placeholder='Enter your message...'
          />
        </form>
        <span className={submitBtn}>
          <Button text='Submit' />
        </span>
      </div>
      <div className={appointment}>
        <div className={image}>
          <img
            alt='green and red succulent plant viewed from above.'
            src='https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </div>
        <div className={cta}>
          <h4 className={heading}>Ready for more?</h4>
          <div className={text}>
            Get to know us with a free initial consult.
          </div>
          <div className={btn}>
            <Button text='Schedule Now' link='/' />
            {/* <ArrowBtn text='Book now' btnAction={() => {}} /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
