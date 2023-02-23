import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '@/elements/logo/logo'

import {
  topNav,
  navActions,
  navItem,
  logo,
  menuBtn,
  closeBtn,
  withBG,
  dark,
} from './top-nav.module.scss'
import { pageLinks } from '@/ancillary/small-data'

export const TopNav = ({ toggleModal, modalOpen, showBG = false }) => {
  return (
    <nav className={`${topNav} ${withBG}`}>
      <Link href='/'>
        <a className={logo}>
          <Logo showFullText={true} color={'var(--white)'} />
        </a>
      </Link>
      <ul className={navActions}>
        {pageLinks.slice(0, 3).map((pl) => {
          return (
            <li key={pl.path} className={navItem}>
              <Link href={pl.path}>{pl.content}</Link>
            </li>
          )
        })}
        <li>
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
        </li>
      </ul>
    </nav>
  )
}
