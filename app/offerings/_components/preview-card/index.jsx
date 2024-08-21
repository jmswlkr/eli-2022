import React from 'react'
import { draftMode } from 'next/headers'

import { twm } from 'utils/tailwind'
import { useContentfulEntryById } from 'contentful/hooks/useContentfulEntryById'

import {
  ContentfulImageBlock,
  HeaderParagraph,
  LinkButton
} from '@/ui-components'

export const OfferingsPreviewCard = async ({ entryId }) => {
  const { isEnabled } = draftMode()

  const { content } = await useContentfulEntryById({
    preview: isEnabled,
    entryId,
    params: {
      include: 10
    }
  })

  const {
    directoryCardBlurb: { fields: blurb },
    directoryCardGrowthList: list,
    directoryCardBgImage: image
  } = content

  return (
    <article className='PREVIEW_CONTAINER auto-rows-auto  grid w-full grid-cols-1 [&>*]:p-md lg:[&>*]:p-lg rounded-md overflow-clip'>
      <div className='BLURB_SECTION flex-col-tl gap-md bg-primary-100/50 '>
        <HeaderParagraph
          classes={{ heading: '!head-4' }}
          mainContentHeading={blurb.heading}
          mainContentParagraph={blurb?.paragraph}
        />
        <LinkButton
          text={blurb.buttonText}
          classes={`solid force xs lg:!med btn`}
          path={blurb.buttonLink}
        />
      </div>
      <div className='LIST_SECTION flex-col-tl gap-md overflow-clip relative'>
        <h3 className={twm('head-4 text-primary-100 z-20')}>
          Opportunities for Growth
        </h3>
        {list.length > 0 && <ul className='flex-col-tl gap-ms pb-sm lg:gap-md z-20'>
          {list.map((detail, idx) => {
            return (
              <li
                key={idx}
                className='par-1 pl-ms lg:pl-md text-white border-l-[.5px] border-white'
              >
                {detail}
              </li>
            )
          })}
        </ul>}
        <div className='BG_IMAGE_WRAP full isolate absolute inset-0'>
          <div className='SHADE bg-primary-500/80 saturate-[70%] absolute inset-0 z-10' />
          <ContentfulImageBlock
            contentfulImage={image}
            classes='z-0 saturate-0 opacity-20'
          />
        </div>
      </div>
    </article>
  )
}
