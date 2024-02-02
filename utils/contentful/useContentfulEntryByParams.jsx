import { client, previewClient } from './config'

export const useContentfulEntryByParams = async ({ preview, params }) => {
  console.log('params ^^^^^^^^^^^^^^^^^^^^: ', params)
  try {
    const data = preview
      ? await previewClient.getEntries(params)
      : await client.getEntries(params)

    return {
      message: `Successfully retrieved entry!`,
      entry: data
    }
  } catch (error) {
    console.log('_____error_____:', error)

    return { message: error, entry: null }
  }
}
