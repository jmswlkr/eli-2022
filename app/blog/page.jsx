import { BLOG_CONTENT } from './data'

import { useGetContentfulEntriesOfType } from 'utils/contentful/useContentfulDynamic'
import { calculateTimeToRead } from 'utils/text-helpers'
import { getYmdObject } from 'utils/date-helpers'

import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { BlogFeatureCard } from './components/blog-feature-card'
import { BlogCard } from './components/blog-card'
import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  heroWrapper,
  hero,
  heroImg,
  heroText,
  preTitle,
  title,
  layout,
  feature as featureStyle,
  grid,
  button
} from './blog-index.module.scss'
import { useGetBlogHeroContent } from './hooks/useGetBlogHeroContent'
import { useGetBlogListContent } from './hooks/useGetBlogListContent'

const BlogDirectory = () => {
  return (
    <ContentLayout classes={container}>
      <BlogHero />
      <BlogLayout />
    </ContentLayout>
  )
}

function BlogHero() {
  return (
    <section className={heroWrapper}>
      <div className={hero}>
        <div className={heroText}>
          <p className={preTitle}>
            <span>Embodied Learning</span>
            <span>Institute</span>
          </p>
          <h1 className={title}>Writings & Reflections</h1>
        </div>
        <img
          className={heroImg}
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1697778973/ELI/wanderable-forest_l6r0i1.png'
          alt='a forest with low stair steps carved into a shallow snaking path'
        />
      </div>
    </section>
  )
}

async function BlogLayout() {
  const heroContent = await useGetBlogHeroContent()

  const listContent = await useGetBlogListContent()

  return (
    <section className={layout}>
      <div className={featureStyle}>
        <BlogFeatureCard content={heroContent} />
      </div>
      <ul className={grid}>
        {listContent.slice(1).map((blog) => {
          return <BlogCard key={blog.id} content={blog} />
        })}
      </ul>
      {/* <Button text='Load More +' classes={button} /> */}
    </section>
  )
}

export default BlogDirectory
