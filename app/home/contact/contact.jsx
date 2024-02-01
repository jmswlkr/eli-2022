'use client'

import { useRef } from 'react'
import { send } from '@emailjs/browser'

import { useLayoutContext } from '@context/layout.context'

import { SectionHeader } from 'ui-components/headings/section-header'
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
  contactModal,
  modalContent,
  modalTitle,
  modalDivider,
  modalText
} from './contact.module.scss'

const modal_types = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export const Contact = ({ ctaHeader, ctaBlurb, ctaButtonText }) => {
  const fromRef = useRef(null)
  const messageRef = useRef(null)
  const toRef = useRef(null)

  const { setContentModalOpen, setModalContent } = useLayoutContext()

  const handleSubmitInquiry = (e) => {
    e.preventDefault()

    send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      {
        from_name: fromRef.current.value,
        to_name: 'ELI | The Embodied Learning Institute',
        message: messageRef.current.value,
        reply_to: toRef.current.value
      },
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setModalContent(<ContactModalContent type={modal_types.SUCCESS} />)
        setContentModalOpen(true)
      })
      .catch((err) => {
        console.log('FAILED...', err)
        setModalContent(<ContactModalContent type={modal_types.ERROR} />)
        setContentModalOpen(true)
      })
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
              ref={fromRef}
              className={name}
              type='text'
              name='from_name'
              placeholder='Name'
            />
            <input
              ref={toRef}
              className={email}
              type='text'
              name='reply_to'
              placeholder='Email'
            />
          </div>
          <textarea
            ref={messageRef}
            className={message}
            placeholder='Enter your message...'
          />
        </form>
        <span className={submitBtn}>
          <Button text='Submit' action={handleSubmitInquiry} />
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
          <h4 className={heading}>{ctaHeader}</h4>
          <div className={text}>{ctaBlurb}</div>
          <div className={btn}>
            <Button text={ctaButtonText} link='/calendar' />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactModalContent({ type }) {
  const modalContentMap = {
    SUCCESS: {
      title: 'Thank You!',
      message: `Your message has been successfully received, and we'll be in touch shortly.`
    },
    ERROR: {
      title: 'Something Went Wrong!',
      message: `Oops! It seems there was an error submitting your message. Please try again or email us at:`,
      email: 'info@embodiedlearninginstitute.com'
    }
  }

  const { title, message, email } = modalContentMap[type]

  return (
    <div className={contactModal}>
      <div className={modalContent}>
        <h2 className={modalTitle}>{title}</h2>
        <div className={modalDivider} />
        <p className={modalText}>{message}</p>
        {email && <a href={`mailto:${email}`}>{email}</a>}
      </div>
    </div>
  )
}
