// External lib
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Styling & Animation
import { phases } from 'animation/transition'
import { slideInTop } from 'animation/slide'

import { modal } from './menu-modal.module.scss'

export const MenuModal = ({ modalOpen, closeModal }) => {
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

  return (
    <AnimatePresence exitBeforeEnter>
      {modalOpen && (
        <motion.div
          className={modal}
          {...phases}
          {...slideInTop}
        >
          <div>
            <ul></ul>
            <ul></ul>
          </div>
          <div></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
