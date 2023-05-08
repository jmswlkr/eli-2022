import { client, previewClient } from './config'

import { CONTENTFUL_CONTENT_KEYS } from './keys'

export const useContentful = async ({
  preview = false,
  key = 'FOUNDER',
  defaultImage = null,
}) => {
  try {
    const entry = preview 
    ? await previewClient.getEntry(CONTENTFUL_CONTENT_KEYS[key])
    : await client.getEntry(CONTENTFUL_CONTENT_KEYS[key])
    const data = entry.fields
    
    if (defaultImage) {
      data['defaultImage'] = defaultImage
    }

    return { content: data, error: null }
  } catch (error) {
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
    console.log('_____accessToken_____: ', accessToken);
    console.log("_____error_____:",error)

    return { content: null, error }
  }
}
