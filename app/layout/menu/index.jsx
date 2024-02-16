'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { useActionOnKey } from 'hooks/useActionOnKey'

import { blurFadeIn } from 'animation/fade'
import { phases } from 'animation/transition'
import { slideInTop } from 'animation/slide'

import { modal } from './menu.module.scss'
import { twm } from 'utils/tailwind'
import { CONNECT, CONTACT, OFFERINGS } from '../data'

export const SiteMenu = ({ modalOpen, closeModal }) => {
  useActionOnKey(closeModal, 'Escape')

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.menu
          {...slideInTop}
          {...phases}
          className={twm(modal, 'flex-center pb-0')}
        >
          <div className='MENU_INNER lg:px-md gap-xl p-lg w-[var(--reading-content-width)] flex flex-col justify-end lg:justify-center items-center h-full text-white'>
            <div className='MENU_MAIN gap-lg lg:gap-0 lg:flex-row flex flex-col items-start justify-between w-full'>
              <ul className='CONNECT_LINKS flex-col-tl gap-md lg:gap-lg'>
                <span className='LABEL meta-1 text-meta_text'>
                  {CONNECT.label}
                </span>
                {CONNECT.links.map((link) => {
                  return (
                    <li
                      className='head-3 hover:text-primary-300'
                      key={link.text}
                    >
                      <Link href={link.path} onClick={closeModal}>
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <ul className='OFFERINGS_LINKS flex-col-tl gap-md lg:gap-lg'>
                <span className='LABEL meta-1 text-meta_text'>
                  {OFFERINGS.label}
                </span>
                {OFFERINGS.links.map((link) => {
                  return (
                    <li
                      className='head-3 lg:head-2 hover:text-primary-300'
                      key={link.text}
                    >
                      <Link href={link.path} onClick={closeModal}>
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='CONTACT par-1 gap-md lg:flex-row lg:items-end flex flex-col items-start justify-between w-full'>
              <div className='INFO flex-col-bl gap-md'>
                <span className='LABEL meta-1 text-meta_text'>
                  {CONTACT.label}
                </span>
                <a
                  onClick={closeModal}
                  href={CONTACT.email.link}
                  className='EMAIL hover:text-primary-300'
                >
                  {CONTACT.email.display}
                </a>
                <a
                  onClick={closeModal}
                  href={CONTACT.phone.link}
                  className='PHONE hover:text-primary-300'
                >
                  {CONTACT.phone.display}
                </a>
              </div>
              <div className='SOCIAL gap-md flex items-end'>
                {CONTACT.socials.map((social) => {
                  return (
                    <Link
                      className='fill-white hover:fill-primary-300'
                      key={social.id}
                      href={social.link}
                    >
                      {social.icon}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.menu>
      )}
    </AnimatePresence>
  )
}
