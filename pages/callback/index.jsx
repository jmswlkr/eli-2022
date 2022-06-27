import React from 'react'
import { useRouter } from 'next/router'

// Components
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

// Styling
import {
  callback,
  callbackBtn,
} from './callback.module.scss'

const Callback = () => {
  const { push } = useRouter()

  return (
    <div className={callback}>
      <h2>Authorization Successful!</h2>
      <p>
        You have successfully Authorized this application
        for use with your Square Seller Account.
      </p>
      <button className={callbackBtn} onClick={() => push('/')}>
        <ArrowBtn>Back to Home</ArrowBtn>
      </button>
    </div>
  )
}

export default Callback
