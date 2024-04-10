'use client'

import Link from 'next/link'

import { twm } from '@/utils'

export function LinkButton({ text = 'Learn More', path = '#', classes = '' }) {
  return (
    <Link className={twm('general-btn px-md py-ms', classes)} href={path}>
      {text}
    </Link>
  )
}
