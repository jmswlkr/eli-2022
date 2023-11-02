import React from 'react'

import { useGetBlogContent } from './useGetBlogContent'

import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { BlogFeatureCard } from '../components/blog-feature-card'
import { BlogFooter } from './components/blog-footer'

import {
  container,
  bodyBlock,
  quoteBlock,
  footer
} from './blog-single.module.scss'

const BlogSingle = async ({ params: { id } }) => {
  const content = await useGetBlogContent({ entryId: id })

  const { bodyBlocks, heroContent, quoteContent } = content

  const shareLink = `https://www.embodiedlearninginstitute.com/blog/${id}`

  return (
    <ContentLayout classes={container}>
      <BlogFeatureCard content={heroContent} withMeta={false} />
      <BodyBlock  block={bodyBlocks[0]} />
      <BodyBlock  block={bodyBlocks[1]} />
      <QuoteBlock block={quoteContent}  />
      <BodyBlock  block={bodyBlocks[2]} />
      <BodyBlock  block={bodyBlocks[3]} />
      <BlogFooter shareLink={shareLink} />
    </ContentLayout>
  )
}

export default BlogSingle

function BodyBlock({ block }) {
  const { heading, paragraph } = block

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

