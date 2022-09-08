import React from 'react'

// Component
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

// Styling
import {
  authError,
  title,
  text,
  emailLink,
  backBtn,
} from './auth-error.module.scss'

const AuthError = () => {
  return (
    <div className={authError}>
      <h2 className={title}>Authorization Unsuccessful</h2>
      <p className={text}>
        <span>There was an problem authorizing the application.</span>
        <span>
          Please contact the developer via email at:
          <a className={emailLink} href='mailto:jamesmawalker@gmail.com'>
            jamesmawalker@gmail.com
          </a>
        </span>
      </p>
      <a className={backBtn} href='/'>
        <ArrowBtn text='Back to Home' />
      </a>
    </div>
  )
}

export default AuthError
