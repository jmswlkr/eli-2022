// External lib
import React from 'react'
import Link from 'next/link'

// Components
import { Logo } from '@/svg/logo'

// Styling
import { topNav, logo, menuBtn, closeBtn } from './top-nav.module.scss'


export const TopNav = ({ toggleModal, modalOpen, introInView }) => {
  
  const mixBlend = {
    mixBlendMode: (introInView && !modalOpen) ? 'normal' : 'difference'
  }

  return (
    <nav className={topNav} style={mixBlend}>
      <Link href='/'>
        <a className={logo}>
          <Logo />
        </a>
      </Link>
      <button
        className={`${menuBtn} ${modalOpen && closeBtn}`}
        onClick={toggleModal}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
