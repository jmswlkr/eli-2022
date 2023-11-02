import { useGetContentfulEntriesOfType } from "utils/contentful/useContentfulDynamic"
import { getYmdObject } from "utils/date-helpers"
import { calculateTimeToRead } from "utils/text-helpers"

export async function useGetBlogListContent() {
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

  function getListCardContent(entry) {
    const latestPost = entry.fields
    const publishDate = getYmdObject(entry.sys.createdAt)
    const entryId = entry.sys.id
    const slug = entry.fields.blogId

    return { ...latestPost.heroSection.fields, publishDate, slug, entryId }
  }

  const blogList = data.entries.map((entry) => {
    const timeToRead = getContentfulBlogReadingTime(entry)
    const cardContent = getListCardContent(entry)

    return { ...cardContent, timeToRead }
  })

  return blogList
}

