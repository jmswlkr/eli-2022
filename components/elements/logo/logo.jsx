import React from 'react'

import { IconMark } from '../svg/iconmark'

import { logoWrap, logoText, thin } from './logo.module.scss'

export const Logo = ({ color = 'var(--off-white)', iconOnly = false }) => {
  return (
    <div className={logoWrap}>
      <IconMark color={color} />
      {!iconOnly && (
        <>
          <span className={logoText}>Embodied</span>
          <span className={logoText}>Learning</span>
          <span className={`${logoText} ${thin}`}>Institute</span>
        </>
      )}
    </div>
  )
}
