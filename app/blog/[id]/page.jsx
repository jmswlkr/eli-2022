import React from 'react'

import { useGetBlogContent } from './useGetBlogContent'

import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { BlogFeatureCard } from '../components/blog-feature-card'
import { BlogFooter } from './components/blog-footer'
import { BlogCard } from '../components/blog-card'

import {
  container,
  bodyBlock,
  quoteBlock,
  relatedSection,
  heading,
  grid
} from './blog-single.module.scss'
import { useGetBlogListContent } from '../hooks/useGetBlogListContent'

const BlogSingle = async ({ params: { id } }) => {
  const content = await useGetBlogContent({ entryId: id })

  const { bodyBlocks, heroContent, quoteContent } = content

  const shareLink = `https://www.embodiedlearninginstitute.com/blog/${id}`

  return (
    <ContentLayout classes={container}>
      <BlogFeatureCard content={heroContent} withMeta={false} />
      <BodyBlock block={bodyBlocks[0]} />
      <BodyBlock block={bodyBlocks[1]} />
      <QuoteBlock block={quoteContent} />
      <BodyBlock block={bodyBlocks[2]} />
      <BodyBlock block={bodyBlocks[3]} />
      <BlogFooter shareLink={shareLink} />
      <RelatedSection />
    </ContentLayout>
  )
}

export default BlogSingle

function BodyBlock({ block }) {
  const heading = block?.heading // heading is not req'd
  const paragraph = block?.paragraph

  return (
    <div className={bodyBlock}>
      {heading && <h2>{heading}</h2>}
      <p>{paragraph}</p>
    </div>
  )
}

function QuoteBlock({ block }) {
  return <div className={quoteBlock}>{block}</div>
}

async function RelatedSection() {
  const listContent = await useGetBlogListContent()

  return (
    <div className={relatedSection}>
      <h2 className={heading}>Related Posts</h2>
      <div className={grid}>
        {listContent.slice(0, 2).map((post, idx) => {
          return <BlogCard key={idx} content={post} truncated={true} />
        })}
      </div>
    </div>
  )
}
