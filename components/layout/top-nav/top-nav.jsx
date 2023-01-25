import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '@/elements/logo/logo'

import { topNav, logo, menuBtn, closeBtn, dark } from './top-nav.module.scss'

export const TopNav = ({ toggleModal, modalOpen, light, introInView, heroTextInView }) => {
  const { pathname } = useRouter()

  const forceDark = ['pillars', 'offerings', 'calendar'].some((pth) =>
    pathname.includes(pth)
  )

  return (
    <nav className={topNav}>
      <Link href='/'>
        <a className={logo}>
          <Logo color={'var(--accent)'} iconOnly={!introInView || !heroTextInView} />
        </a>
      </Link>
      <button
        className={`
          ${menuBtn} 
          ${modalOpen ? closeBtn : ''}
          ${!light ? dark : ''}
        `}
        onClick={toggleModal}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
