import { client } from './config'

export const useGetContentfulEntriesOfType = async ({
  contentType = 'blogPost'
}) => {
  try {
    const data = await client.getEntries({
      content_type: contentType,
      order: 'sys.createdAt'
    })

    return {
      message: `Successfully retrieved all ${contentType} items!`,
      entries: data.items
    }
  } catch (error) {
    console.log('_____error_____:', error)

    return { entries: null, error }
  }
}
