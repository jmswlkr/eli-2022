'use client'

import { ContentfulImageBlock } from '@/ui-components/contentful-image-block'
import { Button } from '@/ui-components/general-btn/general-btn'

export const TrainingCategoryCard = ({ category }) => {
  return (
    <div className='flex-col-center px-md py-lg rounded-xl gap-md bg-primary-500/10 h-auto'>
      <span className='h-[75px] aspect-square relative'>
        <ContentfulImageBlock contentfulData={category.icon} classes='!object-contain'/>
      </span>
      <h3 className='HEADING head-3 text-primary-500'>
        {category.categoryTitle}
      </h3>
      <p className='PARAGRAPH text-center'>{category.blurbDescription}</p>
      <Button text={'View More →'} path={'/'} classes={'sm text-primary-500'} />
    </div>
  )
}
