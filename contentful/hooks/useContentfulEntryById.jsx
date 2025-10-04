import { client, previewClient } from '../config'

export const useContentfulEntryById = async ({
  preview = false,
  entryId
}) => {
  try {
    const entry = preview
      // ? await previewClient.getEntry(
      ? await client.getEntry(
          entryId
        )
      : await client.getEntry(entryId)
    const data = entry.fields

    return { content: data, entry, error: null }
  } catch (error) {
    console.log('_____error_____:', error)

    return { content: null, entry: null, error }
  }
}
