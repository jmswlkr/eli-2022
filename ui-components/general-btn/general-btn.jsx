'use client'

import { useRouter } from 'next/navigation'

export function Button({
  text = 'Learn More',
  path = '',
  classes = '',
  type = 'text',
  disabled = false,
  action = null,
}) {
  const { push, prefetch } = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    if (path) {
      push(path, undefined, { shallow: true })
    }

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
      {text}
    </button>
  )
}
