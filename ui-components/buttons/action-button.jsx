'use client'

import Link from 'next/link'

import { twm } from '@/utils'

export function ActionButton({
  text = 'Learn More',
  classes = '',
  action = null
}) {
  return (
    <span
      className={twm('general-btn px-md py-sm outline-none', classes)}
      onClick={action}
    >
      {text}
    </span>
  )
}
