'use client'

import Link from 'next/link'

import { twm } from '@/utils'

export function LinkButton({ text = 'Learn More', path = '#', classes = '' }) {
  return (
    <Link className={twm('LINK_BUTTON general-btn sm lg:med', classes)} href={path}>
      {text}
    </Link>
  )
}
