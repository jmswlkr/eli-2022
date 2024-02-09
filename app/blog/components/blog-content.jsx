'use client'

import { ContentfulImageBlock, HeaderParagraph } from '@/ui-components'
import { Fragment } from 'react'
import { BlogFooter } from './blog-content-footer'
import { useParams } from 'next/navigation'

export const BlogContent = ({ content }) => {
  const params = useParams()

  return (
    <div className='BLOG_FLEX_WRAP flex items-start justify-center w-full h-auto'>
      <div className='BLOG_CONTENT flex-col-tl gap-lg w-[var(--reading-content-width)]'>
        {content.fields.contentBlocks.map((block) => {
          const Component = BlogComponentMap[block.sys.contentType.sys.id]

          return (
            <Fragment key={block.sys.id}>
              <Component content={block} />
            </Fragment>
          )
        })}
        <BlogFooter pageLink={'test link!'} />
      </div>
    </div>
  )
}

const BlogComponentMap = {
  componentHeaderParagraph: BlogParagraphBlock,
  componentInterstitialTextImageBlock: BlogImageTextBlock,
  componentExcerptQuote: BlogQuoteBlock,
  componentInterstitialImage: BlogImageBlock
}

function BlogParagraphBlock({ content }) {
  return (
    <div className='TEXT_BLOCK w-full h-auto'>
      <HeaderParagraph
        mainContentHeading={content.fields?.heading}
        mainContentParagraph={content.fields?.paragraph}
      />
    </div>
  )
}

function BlogImageTextBlock({ content }) {
  return (
    <div className='IMAGE_TEXT_BLOCK gap-md lg:gap-md lg:grid-cols-2 lg:grid-rows-1 grid-rows-auto grid grid-cols-1'>
      <div className='TEXT_WRAP'>
        <HeaderParagraph
          mainContentHeading={content.fields?.heading}
          mainContentParagraph={content.fields?.paragraph}
        />
      </div>
      <div className='IMAGE_WRAP order-first lg:order-last relative min-h-[30vh]'>
        <ContentfulImageBlock contentfulImage={content.fields?.image} />
      </div>
    </div>
  )
}

function BlogImageBlock({ content }) {
  return (
    <div className='IMAGE_BLOCK h-[25vh] relative w-full'>
      <ContentfulImageBlock contentfulImage={content.fields?.image} />
    </div>
  )
}

function BlogQuoteBlock({ content }) {
  return (
    <div className='QUOTE_BLOCK border-primary-500 p-md head-5 text-primary-500 font-semibold border-l'>
      {content.fields.excerptText}
    </div>
  )
}
