'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Button({
  text = 'Learn More',
  path = '',
  classes = '',
  type = 'text',
  disabled = false,
  action = null,
}) {
  const { prefetch } = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    if (action) {
      action(e)
    }
  }

  const handleHover = () => {
    if (path) {
      prefetch(path)
    }
  }

  return (
    <button
      className={`general-btn ${classes}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      onMouseEnter={handleHover}
    >
      {path ? <Link href={path}>{text}</Link> : text}
    </button>
  )
}
