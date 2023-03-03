import React, { useEffect } from 'react'
import Link from 'next/link'

import { pageLinks } from '../navigation-data'

import { Logo } from 'ui-components/logo/logo'

import {
  topNav,
  navActions,
  navItem,
  logo,
  menuBtn,
  closeBtn,
} from './top-nav.module.scss'

export const TopNav = ({ toggleModal, modalOpen, showBG = false }) => {
  return (
    <nav className={topNav}>
      <Link className={logo} href='/'>
        <Logo showFullText={true} color={'var(--white)'} />
      </Link>
      <ul className={navActions}>
        {pageLinks.slice(0, 3).map((pl) => {
          return (
            <li key={pl.path} className={navItem}>
              <Link legacyBehavior href={pl.path}>
                {pl.content}
              </Link>
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
