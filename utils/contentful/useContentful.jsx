import { client } from './config'

import { CONTENTFUL_CONTENT_KEYS } from './keys'

export const useContentful = async ({ key = 'FOUNDER', defaultImage }) => {
  const content = await client.getEntry(CONTENTFUL_CONTENT_KEYS[key])

  content.fields['defaultImage'] = defaultImage

  return await content?.fields
}
