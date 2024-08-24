'use client'

import Link from 'next/link'

import { ContentfulImageBlock } from '@/ui-components'

export const TrainingCategoryCard = ({ category }) => {
  return (
    <Link className='full flex-col-center' href={`/offerings/training/categories/${category.slug}`}>
      <div className='CATEGORY_CARD full flex-col-center px-ms py-md lg:px-md lg:py-lg rounded-xl gap-ms lg:gap-md bg-primary-500/10 hover:bg-primary-500/20 h-auto'>
        <span className='h-[50px] lg:h-[75px] aspect-square relative'>
          <ContentfulImageBlock
            contentfulImage={category.icon}
            classes='!object-contain'
          />
        </span>
        <h4 className='HEADING head-4 text-primary-500 text-center'>
          {category.categoryTitle}
        </h4>
        {category.blurbDescription && <p className='PARAGRAPH p-ms text-center'>
          {category.blurbDescription}
        </p>}
        <button className='general-btn sm text-primary-500 outline'>View More →</button>
      </div>
    </Link>
  )
}
