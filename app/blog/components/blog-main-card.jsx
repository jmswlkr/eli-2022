'use client'

import { getUsaDateFromISO } from '@/utils'

import { Button } from '@/ui-components'
import { ContentfulImageBlock } from '@/ui-components'

// TODO: Calculate TTR

export const BlogMainCard = ({ content, withButton = true }) => {
  const formattedDate = getUsaDateFromISO(content.sys.createdAt)

  const hero = content?.fields?.heroSection?.fields

  if (!content) return null

  return (
    <div className='BLOG_FEATURE_CONTAINER  gap-md md:gap-lg grid w-full grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-[.6fr_.4fr]'>
      <div className='IMAGE WRAP relative lg:min-h-[60vh]'>
        {hero?.mainImage && (
          <ContentfulImageBlock contentfulImage={hero?.mainImage} />
        )}
      </div>
      <div className='TEXT_WRAP gap-md flex flex-col items-start justify-end'>
        <h2 className='TITLE head-2'>{hero?.heading}</h2>
        <p className='SUBTITLE head-4 !font-body !leading-[125%]'>{hero?.subheading}</p>
        <div className='flex-tl items-center gap-[1ch]'>
          <span>{formattedDate}</span>
          {/* <span>•</span>
          <span>{content?.timeToRead || '3'} minute read</span> */}
        </div>
        {withButton && (
          <Button
            text='Read More'
            path={`blog/${content?.fields?.slug}`}
            classes='sm solid'
          />
        )}
      </div>
    </div>
  )
}
