import { previewClient } from './config'

import { CONTENTFUL_CONTENT_ENTRY_KEYS } from './keys'

export const checkContentful = async ({
  key = 'FOUNDER',
  defaultImage = null,
}) => {
  try {
    const entry = await previewClient.getEntry(CONTENTFUL_CONTENT_ENTRY_KEYS[key])

    const data = entry.fields

    if (defaultImage) {
      data['defaultImage'] = defaultImage
    }

    return { content: data, error: null }
  } catch (error) {

    throw new Error(`Contentful error: ${error}`)
  }
}
