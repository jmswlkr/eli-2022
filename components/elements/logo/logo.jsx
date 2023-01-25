import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IconMark } from '../svg/iconmark'

import { logoWrap, logoText, logoTextWrap, thin } from './logo.module.scss'
import { blurFadeIn } from 'animation/fade'
import { phases } from 'animation/transition'

blurFadeIn

export const Logo = ({ color = 'var(--accent)', iconOnly = false }) => {
  return (
    <div className={logoWrap}>
      <IconMark color={color} />
      <AnimatePresence exitBeforeEnter >
        {!iconOnly && (
          <motion.div {...blurFadeIn} {...phases} className={logoTextWrap}>
            <span className={logoText}>Embodied</span>
            <span className={logoText}>Learning</span>
            <br />
            <span className={`${logoText} ${thin}`}>Institute</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
