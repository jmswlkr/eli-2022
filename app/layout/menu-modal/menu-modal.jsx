'use client'

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { pageLinks, contactInfo, socialIcons } from '../navigation-data'
import { useActionOnKey } from 'hooks/useActionOnKey'

import { phases, smooth } from 'animation/transition'
import { slideInTop } from 'animation/slide'
import { blurFadeIn } from 'animation/fade'

import {
  modal,
  menuList,
  menuOptions,
  divider,
  contactOptions,
  navOptions,
  desk,
  mobile,
  menuFooter,
  social,
  copyright,
} from './menu-modal.module.scss'

export const MenuModal = ({ modalOpen, closeModal }) => {
  const { push } = useRouter()

  useActionOnKey(closeModal, 'Escape') // close modal with esc key

  const handleLinkClick = (path) => {
    closeModal()
    setTimeout(() => {
      push(path)
    }, 400)
  }

  return (
    <AnimatePresence mode='wait'>
      {modalOpen && (
        <motion.menu className={modal} {...phases} {...slideInTop}>
          <div className={menuOptions}>
            <motion.ul
              className={`${contactOptions} ${menuList}`}
              transition={smooth(0.5, 0.5)}
              {...blurFadeIn}
              {...phases}
            >
              {contactInfo.map((inf, idx) => {
                return (
                  <li key={idx}>
                    <label>{inf.label}</label>
                    <Link legacyBehavior href={inf.link}>
                      <a>
                        {/* {inf.content} */}
                        <span className={desk}>{inf.content}</span>
                        <span className={mobile}>
                          {inf.icon} {inf.label} us
                        </span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </motion.ul>
            <span className={divider} />
            <motion.ul
              className={`${navOptions} ${menuList}`}
              transition={smooth(0.5, 0.5)}
              {...blurFadeIn}
              {...phases}
            >
              {pageLinks.map((lnk) => {
                return (
                  <li key={lnk.text}>
                    <a
                      onClick={() => handleLinkClick(lnk.path)}
                      onTouch={() => handleLinkClick(lnk.path)}
                    >
                      {lnk.content}
                    </a>
                  </li>
                )
              })}
            </motion.ul>
          </div>
          <div className={menuFooter}>
            <motion.div
              className={social}
              transition={smooth(0.5, 0.5)}
              {...blurFadeIn}
              {...phases}
            >
              {socialIcons.map((icn) => {
                return (
                  <a
                    key={icn.id}
                    href={icn.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {icn.icon}
                  </a>
                )
              })}
            </motion.div>
            <span className={copyright}>
              © 2022 Embodied learning institute{' '}
            </span>
          </div>
        </motion.menu>
      )}
    </AnimatePresence>
  )
}
