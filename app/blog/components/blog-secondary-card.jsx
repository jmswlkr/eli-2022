'use client'

import { getUsaDateFromISO } from '@/utils'

import { LinkButton } from '@/ui-components'
import { ContentfulImageBlock } from '../../../ui-components/contentful-image-block'

export const BlogSecondaryCard = ({ content }) => {
  const formattedDate = getUsaDateFromISO(content.sys.createdAt)

  const {
    fields: {
      heroSection: { fields: card }
    }
  } = content

  return (
    <li className='BLOG_CARD_CONTAINER gap-md flex-col-tl'>
      <div className='IMAGE WRAP h-[30vh] w-full relative rounded-md overflow-clip'>
        <ContentfulImageBlock contentfulImage={card.mainImage} />
      </div>
      <div className='TEXT_WRAP gap-md flex-col-tl'>
        <h2 className='HEADING head-4 lg:head-2 font-semibold'>
          {card.heading}
        </h2>
        <p className='SUBHEADING lg:block hidden'>{card.subheading}</p>
        <div className='META lg:flex gap-[.5ch] hidden'>
          <span>{formattedDate}</span>
          {/* <span>•</span> */}
          {/* <span>4 minute read</span> */}
        </div>
        <LinkButton
          text='Read More'
          path={`blog/${content.fields.slug}`}
          classes='sm outline'
        />
      </div>
    </li>
  )
}
