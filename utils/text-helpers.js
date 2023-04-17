export const splitMarkdown = (markdown) => {
  return markdown.split('\n').filter((item) => item !== '')
}

export const breakWords = (str) => {
  const [top, bot] = str.split(' ')
  return (
    <>
      {top} <br /> {bot}
    </>
  )
}
