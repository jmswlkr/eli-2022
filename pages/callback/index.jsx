import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

// Components
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

// Styling
import {
  callback,
  callbackBtn,
} from './callback.module.scss'

const Callback = () => {
  const {
    push,
    query: { code },
  } = useRouter()

  // useEffect(() => {
  //   console.log('code: ', code)
  //   axios.post('/api/token', { token: code })
  //   if (code) {
  //     axios({
  //       method: 'post',
  //       url: '/api/token',
  //       data: {
  //         code,
  //       },
  //     }).then((res) => {
  //       console.log(res.data)
  //     })
  //   }
  // }, [code])

  return (
    <div className={callback}>
      <h2>Authorization Successful!</h2>
      <p>
        You have successfully Authorized this application
        for use with your Square Seller Account.
      </p>
      <a className={callbackBtn} onClick={() => push('/')}>
        <ArrowBtn text='Back to Home' />
      </a>
    </div>
  )
}

export default Callback
