export const splitMarkdown = (markdown) => {
  return markdown?.split('\n')?.filter((item) => item !== '') ?? markdown
}

export const breakWords = (str) => {
  const [top, bot] = str.split(' ')
  return (
    <>
      {top} <br /> {bot}
    </>
  )
}

export const calculateTimeToRead = (text) => {
  const wpm = 200
  const words = text.trim().split(/\s+/).length
  const minutesToRead = Math.ceil(words / wpm)

  return minutesToRead
}

export const removeNewLineChar = (str) => {
  return str.replace(/\r?\n|\r/g, '')
}
