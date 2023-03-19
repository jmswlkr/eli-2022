import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
import { AnimatePresence } from 'framer-motion'
import { phases } from 'animation/transition'
import { fadeIn } from 'animation/fade'

export const TopNav = ({ toggleModal, modalOpen, showBG = false }) => {
  return (
    <nav className={topNav}>
      <Link className={logo} href='/'>
        <Logo showFullText={true} color={'var(--white)'} />
      </Link>
      <ul className={navActions}>
        <AnimatePresence mode='wait'>
          {!modalOpen &&
            pageLinks.slice(0, 3).map((pl) => {
              return (
                <motion.li
                  {...phases}
                  {...fadeIn}
                  key={pl.path}
                  className={navItem}
                >
                  <Link href={pl.path} scroll={false}>
                    {pl.content}
                  </Link>
                </motion.li>
              )
            })}
        </AnimatePresence>
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
