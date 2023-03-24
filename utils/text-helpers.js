export const splitMarkdown = (markdown) => {
  return markdown.split('\n').filter((item) => item !== '')
}
