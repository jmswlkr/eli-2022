import { useRouter } from "next/router"

export function Button({ text = 'Learn More', path='/' }) {
  const { push } = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    push(path)
  }

  return (
    <button className={`general-btn`} onClick={handleClick}>
      {text}
    </button>
  )
}
