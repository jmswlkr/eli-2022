// External Lib
import React, { useEffect, useState } from 'react'
import { send } from '@emailjs/browser'

// Components
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'
import { SectionHeader } from '@/elements/section-header'

// Styling
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
  const [isMobile, setIsMobile] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'ELI | The Embodied Learning Institute',
    message: '',
    reply_to: '',
  })

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

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
    <section className={contact} id='contact'>
      <div className={formSection}>
        <div className={blurb}>
          <SectionHeader title='Get in touch.' withLabel={false} />
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
          <ArrowBtn text='Sumbit' btnAction={handleSubmit} />
        </span>
      </div>
      <div className={appointment}>
        <div className={image}>
          <img
            src='https://res.cloudinary.com/jameswalker-work/image/upload/v1666932113/ELI/talk_tx1so3.png'
            alt='therapist and patient discussing in exposed brick office.'
          />
        </div>
        <div className={cta}>
          <h4 className={heading}>Ready for more?</h4>
          <div className={text}>
            Get to know us with a free initial consult online.
          </div>
          <div className={btn}>
            <ArrowBtn text='Book now' btnAction={() => {}} />
          </div>
        </div>
      </div>
    </section>
  )
}
