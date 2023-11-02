import { useGetContentfulEntriesOfType } from "utils/contentful/useContentfulDynamic"
import { getYmdObject } from "utils/date-helpers"
import { calculateTimeToRead } from "utils/text-helpers"

export async function useGetBlogHeroContent() {
  const data = await useGetContentfulEntriesOfType({ contentType: 'blogPost' })

  function getContentfulBlogReadingTime(entry) {
    // extract single string of all body text fields
    const contentString = Object.entries(entry.fields)
      .filter(([key]) => {
        return key.startsWith('bodyText')
      })
      .map(([_, content]) => {
        // get text from body content fields
        return content.fields.paragraph.content[0].content[0].value.replace(
          /\r?\n|\r/g,
          ''
        )
      })
      .join(' ')

    return calculateTimeToRead(contentString)
  }

  const timeToRead = getContentfulBlogReadingTime(data.entries[0])

  function getHeroContent(data) {
    const { entries } = data

    const latestPost = entries[0].fields
    const publishDate = getYmdObject(entries[0].sys.createdAt)
    const entryId = entries[0].sys.id
    const slug = entries[0].fields.blogId

    return { ...latestPost.heroSection.fields, publishDate, slug, entryId }
  }

  const heroContent = getHeroContent(data)

  return { ...heroContent, timeToRead }
}
