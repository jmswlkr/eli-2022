import React from 'react'

export const CloseIcon = ({ fill='var(--white)' }) => {
  return (
    <svg
      width='39'
      height='39'
      viewBox='0 0 39 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M38 38L1 1M1 38L38 1L1 38Z'
        stroke={fill}
        strokeOpacity='0.5'
        strokeWidth='1.6862'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}