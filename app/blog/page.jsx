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

// HOOKS
async function useGetBlogHeroContent() {
  const data = await useGetContentfulEntriesOfType({ contentType: 'blogPost' })

  function getContentfulBlogReadingTime(entry) {
    // extract single string of all body text fields
    const contentString = Object.entries(entry.fields)
      .filter(([key]) => {
        return key.startsWith('bodyText')
      })
      .map(([_, content]) => {
        // get text from body content fields
        return content.fields.paragraph.content[0].content[0].value.replace(
          /\r?\n|\r/g,
          ''
        )
      })
      .join(' ')

    return calculateTimeToRead(contentString)
  }

  const timeToRead = getContentfulBlogReadingTime(data.entries[0])

  function getHeroContent(data) {
    const { entries } = data

    const latestPost = entries[0].fields
    const publishDate = getYmdObject(entries[0].sys.createdAt)
    const entryId = entries[0].sys.id
    const slug = entries[0].fields.blogId

    return { ...latestPost.heroSection.fields, publishDate, slug, entryId }
  }

  const heroContent = getHeroContent(data)

  return { ...heroContent, timeToRead }
}
async function useGetBlogListContent() {
  const data = await useGetContentfulEntriesOfType({ contentType: 'blogPost' })

  function getContentfulBlogReadingTime(entry) {
    // extract single string of all body text fields
    const contentString = Object.entries(entry.fields)
      .filter(([key]) => {
        return key.startsWith('bodyText')
      })
      .map(([_, content]) => {
        // get text from body content fields
        return content.fields.paragraph.content[0].content[0].value.replace(
          /\r?\n|\r/g,
          ''
        )
      })
      .join(' ')

    return calculateTimeToRead(contentString)
  }

  function getListCardContent(entry) {
    const latestPost = entry.fields
    const publishDate = getYmdObject(entry.sys.createdAt)
    const entryId = entry.sys.id
    const slug = entry.fields.blogId

    return { ...latestPost.heroSection.fields, publishDate, slug, entryId }
  }

  const blogList = data.entries.map((entry) => {
    const timeToRead = getContentfulBlogReadingTime(entry)
    const cardContent = getListCardContent(entry)

    return { ...cardContent, timeToRead }
  })

  return blogList;
}
