import { createClient } from 'contentful'

const CONTENTFUL_CONTENT_KEYS = {
  HOME: '2peFXvBUiCt2gM8eCh4NoD',
  FOUNDER: '6YLVKd81WK2Z6eASH3POSc',
}

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

export default async function handler(req, res) {
  try {
    const { key } = JSON.parse(req.body)
    const entry_id = CONTENTFUL_CONTENT_KEYS[key]

    const entry = await client.getEntry(entry_id)
    const data = entry.fields
    // if (defaultImage) {
    //   data['defaultImage'] = defaultImage
    // }

    res.json({ content: data, error: null })
  } catch (error) {
    console.log('_______error_______: ', error);
    res.json({ content: null, error })
  }
}
