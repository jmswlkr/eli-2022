import { client } from './config'

export const useGetContentfulEntry = async ({
  entryId 
}) => {
  try {
    const data = await client.getEntry(entryId)

    return {
      message: `Successfully retrieved entry ${entryId}!`,
      entry: data
    }
  } catch (error) {
    console.log('_____error_____:', error)

    return { entries: null, error }
  }
}
