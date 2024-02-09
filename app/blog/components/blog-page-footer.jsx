
import { draftMode } from 'next/headers'

import { twm } from '@/utils'
import { useContentfulEntryByParams } from '@/contentful'
import {SectionHeader } from '@/ui-components'

import { BlogSecondaryCard } from './blog-secondary-card'


export const BlogPageFooter = async ({ currentEntry }) => {
  const { isEnabled } = draftMode()

  const { entry: entries } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'blogPost',
      include: 10,
      limit: 2,
      'fields.slug[ne]': currentEntry.fields.slug
    }
  })

  return (
    <div className='BLOG_FOOTER gap-md flex-col'>
      <SectionHeader title='Recent Articles' classes={{ title: twm('head-3') }} />
      <div className='BLOG_PAGE_FOOTER gap-lg pb-xxl lg:grid-cols-2 lg:grid-rows-1 grid grid-cols-1 grid-rows-2'>
        {entries.items.map((item) => {
          return <BlogSecondaryCard key={item.sys.id} content={item} />
        })}
      </div>
    </div>
  )
}
