import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { callback, callbackBtn } from './callback.module.scss'
import { Button } from 'ui-components/general-btn/general-btn'

const Callback = () => {
  const {
    push,
    query: { code },
  } = useRouter()
  console.log('code: ', code)

  useEffect(() => {
    axios.post('/api/token', { token: code })
    if (code) {
      axios({
        method: 'post',
        url: '/api/token',
        data: {
          code,
        },
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log('Error getting token! Msg →', err))
    }
  })

  return (
    <div className={callback}>
      <h2>Authorization Successful!</h2>
      <p>
        You have successfully Authorized this application for use with your
        Square Seller Account.
      </p>
      <a className={callbackBtn} onClick={() => push('/')}>
        <Button text='Back to Home' />
      </a>
    </div>
  )
}

export default Callback
