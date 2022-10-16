import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from 'components/elements/svg/logo'

import { topNav, logo, menuBtn, closeBtn, dark } from './top-nav.module.scss'

export const TopNav = ({ toggleModal, modalOpen, introInView }) => {
  const { pathname } = useRouter()
  const forceDark = pathname === '/pillars' || pathname.includes('offerings')

  const mixBlend = {
    mixBlendMode: (introInView || modalOpen || forceDark) ? 'normal' : 'difference',
  }

  return (
    <nav className={topNav} style={mixBlend}>
      <Link href='/'>
        <a className={logo}>
          {/* <Logo color={forceDark ? 'var(--text-color)' : null}/> */}
          <Logo color={'var(--text-color)'}/>
        </a>
      </Link>
      <button
        className={`
          ${menuBtn} 
          ${modalOpen && closeBtn} 
          ${forceDark && dark}
        `}
        onClick={toggleModal}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
