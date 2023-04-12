'use client'

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

export const TopNav = ({
  modalOpen,
  setModalOpen,
  showBG = false,
}) => {

  const closeModal = () => {
    setModalOpen(false)
  }
  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <nav className={topNav}>
      <Link className={logo} href='/' onClick={closeModal}>
        <Logo showFullText={true} color={'var(--white)'} />
      </Link>
      <ul className={navActions}>
        <AnimatePresence mode='sync'>
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
            onClick={toggleModal}
            className={`
          ${menuBtn} 
          ${modalOpen ? closeBtn : ''}
        `}
          >
            <span />
            <span />
          </button>
        </li>
      </ul>
    </nav>
  )
}
