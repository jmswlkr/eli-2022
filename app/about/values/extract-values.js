export const extractValuesCardsFromContentful = (content) => {
  const colors = [
    '#4892C6',
    '#03fc90',
    '#112348',
    '#fcca03',
    '#DF9595',
    '#426E8D',
    '#9747FF',
    '#95A74F',
  ]

  return [...Array(8)].map((_, idx) => {
    const ct = idx + 1

    return {
      front: content[`valuesCard${ct}Title`],
      back: content[`valuesCard${ct}TextContent`],
      image: {
        url: content[`valuesCard${ct}Image`].fields.file.url,
        alt: content[`valuesCard${ct}Image`].fields.description,
      },
      color: colors[idx],
    }
  })
}
