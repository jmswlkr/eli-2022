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
  descriptionHero: heroDescriptionText
}) => {
  console.log('🚀 TrainingEventHero ~ date:', date)

  const formattedDate = {
    start: dayjs(date.start).format('MMM Do'),
    end: dayjs(date.end).format('MMM Do'),
    year: dayjs(date.start).format('YYYY')
  }

  return (
    <div className='TRAINING_HERO bg-primary-100 hero-container-3 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[.55fr_.45fr] mt-lg gap-md w-full rounded-md overflow-clip'>
      <div className={'relative full'}>
        <ContentfulImageBlock contentfulImage={heroImage} />
      </div>
      <div className='TEXT_WRAP full gap-md flex flex-col items-start justify-end'>
        <h1 className='TEXT_1_TITLE display-3 font-bold'>{heroPrimaryText}</h1>
        <h2 className='TEXT_2_DATE flex-col-tl gap-[1ch] head-4 !font-body'>
          <div className='gap-xs lg:flex-row lg:gap-sm flex items-center justify-start'>
            <span>{formattedDate.start}</span>
            <span>-</span>
            <span>{formattedDate.end}</span>
            <span>-</span>
            <span>{formattedDate.year}</span>
          </div>
          <span>{locationName}</span>
        </h2>
        {heroDescriptionText && (
          <p className='TEXT_3 par-1 !text-[24px]'>
            {heroDescriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
