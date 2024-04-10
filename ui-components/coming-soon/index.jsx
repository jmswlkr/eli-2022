'use client';

import React, { useRef, useState } from 'react'

import { useCreateClient } from '@/hooks'
import { ActionButton } from '../buttons/action-button'

import {
  container,
  headerCta,
  ctaBtn,
  message,
  shade,
  modal,
  closeBtn,
  clientForm,
  errorMessage,
  successMessage,
} from './coming-soon.module.scss'

export const ComingSoon = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }
  const handleModalClose = (e) => {
    e.preventDefault()
    setModalOpen(false)
  }

  return (
    <section className={container}>
      <div className={headerCta}>
        <h2>Coming Soon!</h2>
        <div className={ctaBtn}>
          <ActionButton text='subscribe for updates' action={handleModalOpen} />
        </div>
      </div>
      <p className={message}>
        <span>Stay tuned for more information on our upcoming launch!</span>
        <span>•</span>
        <span>
          Get ready to awaken your body and transform your life with ELI’s
          unique approach to Embodied learning.
        </span>
      </p>
      {modalOpen && <NewsletterModal closeModal={handleModalClose} />}
    </section>
  )
}

function NewsletterModal({ closeModal }) {
  const givenRef = useRef(null)
  const familyRef = useRef(null)
  const emailRef = useRef(null)

  const {
    mutate: createClient,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useCreateClient()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createClient({
      given_name: givenRef.current.value,
      family_name: familyRef.current.value,
      email_address: emailRef.current.value,
    })
  }

  return (
    <div className={shade}>
      <article className={modal}>
        <span
          className={closeBtn}
          onClick={closeModal}
          role='close modal dialog button'
        >
          &times;
        </span>
        <h3>Please enter your name & email</h3>
        <form className={clientForm}>
          {!isSuccess && (
            <>
              <label htmlFor='given_name'>First Name:</label>
              <input required type='text' name='given_name' ref={givenRef} />
              <label htmlFor='family_name'>Last Name:</label>
              <input type='text' name='family_name' ref={familyRef} />
              <label htmlFor='email_address'>Email:</label>
              <input
                required
                type='email'
                name='email_address'
                ref={emailRef}
              />
              <ActionButton
                classes='solid dark'
                text={isLoading ? 'Working...' : 'Subscribe'}
                // type='submit'
                action={handleSubmit}
                disabled={isLoading}
              />
            </>
          )}
          {isError && <p className={errorMessage}>{error.message}</p>}
          {isSuccess && (
            <div className={successMessage}>
              <span>Successfully subscribed!</span>
              <button className='general-btn'>Close this dialog</button>
            </div>
          )}
        </form>
      </article>
    </div>
  )
}
