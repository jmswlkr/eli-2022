// External lib
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

// Internal lib
import {
  pageLinks,
  contactInfo,
} from '@/ancillary/small-data'

// Components
import {
  Facebook,
  Instagram,
  LinkedIn,
} from '@/svg/social-icons.jsx'

// Styling & Animation
import { phases } from 'animation/transition'
import { slideInTop } from 'animation/slide'

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
        <motion.div
          className={modal}
          {...phases}
          {...slideInTop}
        >
          <div className={menuOptions}>
            <ul className={`${contactOptions} ${menuList}`}>
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
            </ul>
            <span className={divider} />
            <ul className={`${navOptions} ${menuList}`}>
              {pageLinks.map((lnk) => {
                return (
                  <li key={lnk.text}>
                      <a onClick={() => handleLinkClick(lnk.path)}>
                        {lnk.content}
                      </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={menuFooter}>
            <div className={social}>
              <a
                href='https://wwww.instagram.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Instagram />
              </a>
              <a
                href='https://wwww.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Facebook />
              </a>
              <a
                href='https://wwww.linkedin.com/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
              </a>
            </div>
            <span className={copyright}>
              © 2022 Embodied learning institute{' '}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
