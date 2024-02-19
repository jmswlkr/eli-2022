'use client'

import dayjs from 'dayjs'
import * as advancedFormat from 'dayjs/plugin/advancedFormat'

import { Button } from '@/ui-components'
import { ContentfulImageBlock } from '@/ui-components'

dayjs.extend(advancedFormat)

export const TrainingEventHero = ({
  heroImage,
  date,
  locationName,
  heroPrimaryText,
  descriptionHero: heroDescriptionText,
}) => {

  const formattedDate = dayjs(date).format('MMMM Do, YYYY')

  return (
    <div className='TRAINING_HERO hero-container-3 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[.55fr_.45fr] pt-lg gap-md w-full'>
      <div className={'relative full'}>
        <ContentfulImageBlock contentfulImage={heroImage} />
      </div>
      <div className='TEXT_WRAP full gap-md flex flex-col items-start justify-end'>
        <h1 className='TEXT_1 display-3'>
          {heroPrimaryText}
        </h1>
          <h2 className='TEXT_2 flex-col-tl gap-[1ch] head-3 !font-body'>
            <span>{formattedDate}</span>
            <span>{locationName}</span>
          </h2>
          <p className='TEXT_3 par-1 !text-[24px]'>{heroDescriptionText}</p>
      </div>
    </div>
  )
}
