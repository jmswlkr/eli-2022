import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

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
import { Square } from '@/elements/svg/social-icons'
import { Logo } from '@/elements/svg/logo'

const Authorization = () => {
  const [authUrl, setAuthUrl] = useState(null)

  useEffect(() => {
    // axios.get('/api/authorize').then((res) => {
    //   setAuthUrl(res.data.url)
    // })
  }, [])

  const handleAuthBtnClick = () => {
    if (!authUrl) return 
  
    window.location.assign(authUrl.test)
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
        <ArrowBtn text='Authorize' />
      </a>
    </div>
  )
}

export default Authorization
