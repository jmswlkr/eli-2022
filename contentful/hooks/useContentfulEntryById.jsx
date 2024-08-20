import { client, previewClient } from '../config'

export const useContentfulEntryById = async ({
  preview = false,
  entryId,
  params
}) => {
  try {
    const entry = preview
      ? await previewClient.getEntry(
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
