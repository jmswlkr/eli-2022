'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


import { LinkButton, Logo } from '@/ui-components'

import {
  topNav,
  navActions,
  navItem,
  logo,
  menuBtn,
  closeBtn
} from './top-nav.module.scss'
import { AnimatePresence } from 'framer-motion'
import { phases } from 'animation/transition'
import { fadeIn } from 'animation/fade'
import { twm } from 'utils/tailwind'

export const TopNav = ({ modalOpen, setModalOpen, navData: { pageLinks }, showBG = false }) => {
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
      {/* <ul className={navActions}> */}
      <ul className='gap-md flex items-center justify-end'>
        <AnimatePresence mode='sync'>
          {!modalOpen &&
            pageLinks.map((link) => {
              if (link.content === 'Schedule') {
                return (
                  <LinkButton
                    key={link.content}
                    text={link.content}
                    path={link.path}
                    classes='xl:block hidden outline link-2 sm text-primary-150 hover:!border-transparent hover:!text-primary-600 hover:!bg-white'
                  />
                )
              }

              const isVivid =
                link.content === 'Events'
                  ? '!text-[var(--lotus-blossom)]'
                  : ''

              return (
                <motion.li
                  {...phases}
                  {...fadeIn}
                  key={link.path}
                  // className={navItem}
                  className={twm('link-2 hover:text-primary-300 lg:block hidden text-white', isVivid)}
                >
                  <Link href={link.path} scroll={false}>
                    {link.content}
                  </Link>
                </motion.li>
              )
            })}
        </AnimatePresence>
        <li>
          <button
            onClick={toggleModal}
            className={`ml-md
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
