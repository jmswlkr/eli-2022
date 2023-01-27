import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IconMark } from '../svg/iconmark'

import { logoWrap, logoText, logoTextWrap, thin } from './logo.module.scss'
import { blurFadeIn, fadeIn } from 'animation/fade'
import { phases } from 'animation/transition'

blurFadeIn

export const Logo = ({ color = 'var(--primary)', showText = false }) => {
  const [hovered, setHovered] = useState(false)

  const handleToggleHover = () => {
    setHovered(!hovered)
  }

  // TODO: Change logo color to white on pillars section.

  return (
    <div
      className={logoWrap}
      onMouseEnter={handleToggleHover}
      onMouseLeave={handleToggleHover}
    >
      <IconMark color={color} />
      <AnimatePresence exitBeforeEnter>
        {/* {(showText || hovered) && ( */}
        {showText && (
          <motion.div {...fadeIn} {...phases} className={logoTextWrap}>
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
