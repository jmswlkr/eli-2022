import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import {
  pageLinks,
  contactInfo,
  socialIcons,
} from '@/ancillary/small-data'

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
  menuFooter,
  social,
  copyright,
} from './menu-modal.module.scss'

export const MenuModal = ({ modalOpen, closeModal }) => {
  const { push } = useRouter()

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeModal()
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  })

  const handleLinkClick = (path) => {
    closeModal()
    setTimeout(() => {
      // push(path)
      push('/')
    }, 800)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {modalOpen && (
        <motion.menu
          className={modal}
          {...phases}
          {...slideInTop}
        >
          <div className={menuOptions}>
            <motion.ul
              className={`${contactOptions} ${menuList}`}
              transition={smooth(0.5, 0.5)}
              {...blurFadeIn}
              {...phases}
            >
              {contactInfo.map((inf) => {
                return (
                  <li key={inf.id}>
                    <label>{inf.label}</label>
                    <a
                      href={inf.link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {inf.content}
                    </a>
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
                      onClick={() =>
                        handleLinkClick(lnk.path)
                      }
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
