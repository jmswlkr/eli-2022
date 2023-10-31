import React from 'react'

import { BLOG_CONTENT } from '../data'

import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { BlogFeatureCard } from '../components/blog-feature-card'

import { container } from './blog-single.module.scss'


const BlogSingle = () => {
  const { feature } = BLOG_CONTENT;

  return (
    <ContentLayout classes={container}>
      <BlogFeatureCard content={feature} withMeta={false} />
    </ContentLayout>
  )
}

export default BlogSingle 