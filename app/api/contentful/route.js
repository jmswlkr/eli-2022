/* eslint no-console: 0 */

import { createClient } from 'contentful'
import { CONTENTFUL_CONTENT_ENTRY_KEYS } from '@/contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com'
})

export default async function handler(req, res) {
  try {
    const { key } = JSON.parse(req.body)
    const entry_id = CONTENTFUL_CONTENT_ENTRY_KEYS[key]

    const entry = await client.getEntry(entry_id)
    const data = entry.fields

    res.json({ content: data, error: null })
  } catch (error) {
    console.log('_______error_______: ', error)
    res.json({ content: null, error })
  }
}
