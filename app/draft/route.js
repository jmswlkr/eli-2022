import { redirect } from 'next/navigation'
import { draftMode } from 'next/headers'
import { checkContentful } from '@/contentful'

const contentfulSecret = process.env.CONTENTFUL_PREVIEW_SECRET

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)

  const secret = searchParams.get('secret')

  const slug = searchParams.get('slug')

  // Check for valid secret and slug
  if (secret !== contentfulSecret || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  // Check for data existing in contentful
  const content = await checkContentful({
    key: slug.toUpperCase()
  })

  // error if no data returned
  if (!content) {
    return new Response('Invalid slug', { status: 401 })
  }

  draftMode().enable()

  const isHomePage = slug === 'home'

  // redirect(`/${slug}`)
  return new Response(null, {
    status: 307,
    headers: {
      Location: `/${isHomePage ? '' : slug}`
    }
  })
}
