import { client, previewClient } from '../config'

import { CONTENTFUL_CONTENT_ENTRY_KEYS } from '../keys'

export const useContentful = async ({
  preview = false,
  key = '',
  defaultImage = null,
}) => {
  try {
    const entry = preview 
    ? await previewClient.getEntry(CONTENTFUL_CONTENT_ENTRY_KEYS[key])
    : await client.getEntry(CONTENTFUL_CONTENT_ENTRY_KEYS[key])
    const data = entry.fields
    
    if (defaultImage) {
      data['defaultImage'] = defaultImage
    }

    return { content: data, entry, error: null }
  } catch (error) {
    console.log("_____error_____:",error)

    return { content: null, entry: null, error }
  }
}
