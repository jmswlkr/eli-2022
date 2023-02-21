import { useRouter } from 'next/router'

export function Button({
  text = 'Learn More',
  path = null,
  classes = '',
  type = 'text',
  disabled = false,
  action = null
}) {
  const { push } = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    if (path) {
      push(path)
    }

    if (action) {
      action(e)
    }
  }

  return (
    <button
      className={`general-btn ${classes}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
