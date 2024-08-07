import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'

import { ContentLayout } from '@/ui-components'
import { HeroPrimary as BlogHero } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { BlogMainCard } from './components/blog-main-card'
import { BlogSecondaryCard } from './components/blog-secondary-card'

const BlogPage = async () => {
  const { isEnabled } = draftMode()

  const { entry: selectedContent } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'blogDirectoryPage',
      include: 10,
      limit: 1
    }
  })

  const { entry: defaultContent } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'blogPost',
      include: 10,
      limit: 4,
      order: '-sys.createdAt'
    }
  })

  const hero = selectedContent.items[0].fields.hero.fields
  const cta = selectedContent.items[0].fields.cta.fields
  const featuredBlogSelected = selectedContent.items[0].fields?.featuredBlog

  const featuredBlogDefault = defaultContent.items[0]
  

  
  // const secondaryPosts = defaultContent.items.slice(1)
  const secondaryPosts = defaultContent.items

  return (
    <ContentLayout>
      <BlogHero {...hero} />
      <section className='BLOG_LAYOUT flex-col-center gap-xxl'>
        <BlogMainCard
          content={featuredBlogSelected || featuredBlogDefault}
          withButton={true}
        />
        <ul className='BLOG_GRID gap-xl lg:grid-cols-2 auto-rows-auto grid w-full grid-cols-1'>
          {secondaryPosts.map((blog) => {
            return <BlogSecondaryCard key={blog.sys.id} content={blog} />
          })}
        </ul>
      </section>
      <CtaSection {...cta} />
    </ContentLayout>
  )
}

export default BlogPage
