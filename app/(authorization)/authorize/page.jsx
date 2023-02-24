'use client';

import React, { useEffect, useState } from 'react'
import axios from 'axios'


// Styling
import {
  authorization,
  title,
  iconsContainer,
  icon,
  divider,
  instruction,
  authBtn,
} from './authorize.module.scss'
import { Button } from 'ui-components/general-btn/general-btn';
import { Square } from 'ui-components/svg/social-icons';
import { Logo } from 'ui-components/logo/logo';

const Authorization = () => {
  const [authUrl, setAuthUrl] = useState(null)

  useEffect(() => {
    axios.get('/api/authorize').then((res) => {
      setAuthUrl(res.data.url)
    })
  }, [])

  const handleAuthBtnClick = () => {
    if (!authUrl) return 
  
    window.location.assign(authUrl)
  }

  return (
    <div className={authorization}>
      <h2 className={title}>Application Authorization</h2>
      <div className={iconsContainer}>
        <span className={icon}>
          <Square />
        </span>
        <span className={divider}>+</span>
        <span className={icon}>
          <Logo />
        </span>
      </div>
      <p className={instruction}>
        <span>
          Sign into your Square™ seller account in another broswer tab.
        </span>
        <span>
          <em> Once you've signed in</em>, <br />
          click the 'Authorize' button below to allow this application to
          communicate with your seller account's appointment calendar.
        </span>
      </p>
      <a className={authBtn} href={authUrl ? authUrl : '/auth-error'}>
        <Button text='Authorize' />
      </a>
    </div>
  )
}

export default Authorization
