import React from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { useActionOnKey } from 'hooks/useActionOnKey'

import {
  pageLinks,
  contactInfo,
  connectLinks,
  socialIcons,
} from '../navigation-data'

import { blurFadeIn } from 'animation/fade'
import { phases, smooth } from 'animation/transition'
import { slideInTop } from 'animation/slide'

import {
  modal,
  menu,
  cell,
  flexWrap,
  footer,
  icons,
  copyright,
  about,
  offerings,
  contact,
  icon,
} from './menu.module.scss'
import Link from 'next/link'

export const Menu = ({ modalOpen, closeModal }) => {
  const { push } = useRouter()

  useActionOnKey(closeModal, 'Escape') // close modal with esc key

  return (
    <AnimatePresence mode='wait'>
      {modalOpen && (
        <motion.menu className={modal} {...slideInTop} {...phases}>
          <section className={flexWrap}>
            <motion.div className={menu} {...blurFadeIn} {...phases}>
              <motion.ul className={`${cell} ${about}`}>
                <label>About</label>
                <li className='mobile-only'>
                  <Link
                    onClick={closeModal}
                    onTouchStart={closeModal}
                    href='/offerings'
                  >
                    Offerings
                  </Link>
                </li>
                {connectLinks.map((cl) => {
                  return (
                    <li key={cl.path}>
                      <Link
                        onClick={closeModal}
                        href={cl.path}
                      >
                        {cl.content}
                      </Link>
                    </li>
                  )
                })}
              </motion.ul>
              <motion.ul className={`${cell} ${offerings}`}>
                <label>Offerings</label>
                {pageLinks.map((ofr) => {
                  return (
                    <li key={ofr.content}>
                      <Link
                        onClick={closeModal}
                        href={ofr.path}
                      >
                        {ofr.menu_content}
                      </Link>
                    </li>
                  )
                })}
              </motion.ul>
              <motion.ul className={`${cell} ${contact}`}>
                {contactInfo.map((cn) => {
                  return (
                    <li key={cn.id}>
                      {/* DESKTOP LAYOUT */}
                      <label className='desk-only'>{cn.id}</label>
                      <Link
                        onClick={closeModal}
                        onTouchStart={closeModal}
                        className='desk-only'
                        href={cn.link}
                      >
                        {cn.content}
                      </Link>
                      {/* MOBILE LAYOUT */}
                      <Link
                        onClick={closeModal}
                        onTouchStart={closeModal}
                        className='mobile-only'
                        href={cn.link}
                      >
                        <div className={flexWrap}>
                          <span className={icon}>{cn.icon}</span>
                          <span>{cn.mobile_content}</span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </motion.ul>
            </motion.div>
          </section>
          <div className={flexWrap}>
            <footer className={footer}>
              <ul className={icons}>
                {socialIcons.map((icn, idx) => {
                  return (
                    <li key={icn.id}>
                      <a href={icn.link} target='_blank' rel='noreferrer'>
                        {icn.icon}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <small className={copyright}>
                © 2022 Embodied Learning Institute
              </small>
            </footer>
          </div>
        </motion.menu>
      )}
    </AnimatePresence>
  )
}
