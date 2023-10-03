import React from 'react'

export const ChevronIcon = ({ fill='var(--white)' }) => {
  return (
    <svg
      width='17'
      height='48'
      viewBox='0 0 17 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L16 24L1 47' stroke={fill} stroke-width='1.5' />
    </svg>
  )
}
