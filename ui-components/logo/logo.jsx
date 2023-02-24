import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IconMark } from '../svg/iconmark'

import {
  logoWrap,
  wordmarkText,
  wordmarkWrap,
  initials,
  thin,
} from './logo.module.scss'
import { blurFadeIn, fadeIn } from 'animation/fade'
import { phases } from 'animation/transition'

blurFadeIn

export const Logo = ({ color = 'var(--primary)', showFullText = false }) => {
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
        {/* {(showFullText || hovered) && ( */}
        {showFullText ? (
          <motion.div
            {...fadeIn}
            {...phases}
            key='fulltext'
            className={wordmarkWrap}
          >
            <span className={wordmarkText}>Embodied</span>
            <span className={wordmarkText}>Learning</span>
            <br />
            <span className={`${wordmarkText} ${thin}`}>Institute</span>
          </motion.div>
        ) : (
          <motion.div
            {...fadeIn}
            {...phases}
            key='initials'
            className={`${wordmarkText} ${initials}`}
          >
            ELI
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
