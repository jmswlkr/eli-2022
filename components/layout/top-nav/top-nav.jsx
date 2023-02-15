import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '@/elements/logo/logo'

import { topNav, logo, menuBtn, closeBtn, withBG, dark } from './top-nav.module.scss'

export const TopNav = ({
  toggleModal,
  modalOpen,
  showBG = false,
}) => {

  return (
    <nav className={`${topNav} ${showBG ? withBG : ''}`}>
      <Link href='/'>
        <a className={logo}>
          <Logo
            showFullText={true}
            color={'var(--white)'}
          />
        </a>
      </Link>
      <button
        className={`
          ${menuBtn} 
          ${modalOpen ? closeBtn : ''}
        `}
        onClick={toggleModal}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
