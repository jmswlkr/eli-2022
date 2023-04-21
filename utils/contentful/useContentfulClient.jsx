import { useEffect, useState } from 'react'
import { server } from 'server.config'

export const useContentfulClient = ({
  key = 'FOUNDER',
  defaultImage = null,
}) => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await fetch(`${server}api/contentful`, {
        method: 'POST',
        body: JSON.stringify({ key })
      })
      const data = await res.json()

      setContent(data.content)
    })()
  }, [key])

  return content
}