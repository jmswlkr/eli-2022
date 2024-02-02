'use client'

import dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'

import { Button } from 'ui-components/general-btn/general-btn'
import { ContentfulImageBlock } from '../../contentful-image-block'

dayjs.extend(advancedFormat)

export const HeroTertiary = ({
  type = 'event',
  date = null,
  heroPrimaryText,
  heroSecondaryText = '',
  heroTertiaryText = '',
  heroButtonText = '',
  heroImage
}) => {
  const formattedDate = dayjs(date).format('MMMM Do, YYYY')

  const componentTypeLookup = {
    event: {
      secondaryText: [formattedDate, ...heroSecondaryText]
    }
  }

  return (
    <div className='HERO_CONTAINER_3 hero-container-3 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[.55fr_.45fr] pt-lg gap-md w-full'>
      <div className={'relative full'}>
        <ContentfulImageBlock contentfulData={heroImage} />
      </div>
      <div className='TEXT_WRAP full gap-md flex flex-col items-start justify-end'>
        <h1 className='TEXT_1 head-1 !font-body !text-[72px]'>
          {heroPrimaryText}
        </h1>
        {heroSecondaryText && (
          <div className='TEXT_2 flex-col-tl gap-[1ch] head-2 !font-body !text-[40px]'>
            {componentTypeLookup[type].secondaryText.map((text) => {
              return <span key={text}>{text}</span>
            })}
          </div>
        )}
        {heroTertiaryText && (
          <p className='TEXT_3 par-1 !text-[24px]'>{heroTertiaryText}</p>
        )}
        {heroButtonText && (
          <Button text={heroButtonText} path='#' classes='solid sm dark' />
        )}
      </div>
    </div>
  )
}
