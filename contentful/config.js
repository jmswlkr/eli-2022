import { createClient } from 'contentful'
import { createClient as createManagementClient } from 'contentful-management'


export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
})

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

export const getManagementClient = async () => {
  const client = createManagementClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
  })

  // Get a space and environment instance once, which we can reuse
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID || 'master')

  return { space, environment }
}