import { useGetContentfulEntry } from "utils/contentful/useContentfulEntry"
import { getYmdObject } from "utils/date-helpers"

export async function useGetBlogContent({ entryId }) {
  const data = await useGetContentfulEntry({ entryId })

  function getHeroContent({ entry }) {
    const latestPost = entry.fields
    const publishDate = getYmdObject(entry.sys.createdAt)
    const entryId = entry.sys.id
    const slug = entry.fields.blogId

    return { ...latestPost.heroSection.fields, publishDate, slug, entryId }
  }

  function getBodyContent({ entry }) {
    const bodyBlocks = Object.entries(entry.fields)
      .filter(([key]) => {
        return key.startsWith('bodyText')
      })
      .map(([_, bodyBlock]) => {
        const heading = bodyBlock.fields.heading
        const paragraph =
          bodyBlock.fields.paragraph.content[0].content[0].value.replace(
            /\r?\n|\r/g,
            ''
          )

        return { heading, paragraph }
      })

    return bodyBlocks
  }

  function getInterstialQuote({ entry }) {
    const quote =
      entry.fields.interstitialQuote.content[0].content[0].value.replace(
        /\r?\n|\r/g,
        ''
      )

    return quote
  }

  const heroContent = getHeroContent(data)
  const bodyBlocks = getBodyContent(data)
  const quoteContent = getInterstialQuote(data)

  return { bodyBlocks, heroContent, quoteContent }
}
