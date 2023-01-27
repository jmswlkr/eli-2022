import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '@/elements/logo/logo'

import { topNav, logo, menuBtn, closeBtn, dark } from './top-nav.module.scss'

export const TopNav = ({
  toggleModal,
  modalOpen,
  light,
  introInView,
  heroTextInView,
}) => {
  const { pathname } = useRouter()

  const forceDark = ['pillars', 'offerings', 'calendar'].some((pth) =>
    pathname.includes(pth)
  )

  const showText = introInView || heroTextInView || modalOpen
  const useLight = light || modalOpen

  return (
    <nav className={topNav}>
      <Link href='/'>
        <a className={logo}>
          <Logo
            showText={showText}
            color={showText ? 'var(--white)' : 'var(--primary)'}
          />
        </a>
      </Link>
      <button
        className={`
          ${menuBtn} 
          ${modalOpen ? closeBtn : ''}
          ${!useLight ? dark : ''}
        `}
        onClick={toggleModal}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
