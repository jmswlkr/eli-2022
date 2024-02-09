import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'

import { ContentLayout } from '@/ui-components'
import { BlogMainCard as BlogHero } from '../components/blog-main-card'
import { BlogContent } from '../components/blog-content'
import { BlogPageFooter } from '../components/blog-page-footer'


const BlogSinglePage = async ({ params }) => {
  const { isEnabled } = draftMode()

  const { entry } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'blogPost',
      include: 10,
      'fields.slug[match]': params.id
    }
  })

  const content = entry?.items[0]

  return (
    <ContentLayout>
      <div className='NAV_SPACER h-[var(--nav-height)]' />
      <BlogHero content={content} />
      <BlogContent content={content} />
      <div className='FOOTER_SPACER' />
      <BlogPageFooter currentEntry={content}/>
    </ContentLayout>
  )
}

export default BlogSinglePage
