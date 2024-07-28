'use client'

import { ContentfulImageBlock, LinkButton } from '@/ui-components'

export const TrainingCategoryCard = ({ category }) => {
  return (
    <div className='CATEGORY_CARD flex-col-center px-ms py-md lg:px-md lg:py-lg rounded-xl gap-ms lg:gap-md bg-primary-500/10 h-auto'>
      <span className='h-[50px] lg:h-[75px] aspect-square relative'>
        <ContentfulImageBlock contentfulImage={category.icon} classes='!object-contain'/>
      </span>
      <h4 className='HEADING head-4 text-primary-500 text-center'>
        {category.categoryTitle}
      </h4>
      <p className='PARAGRAPH text-center'>{category.blurbDescription}</p>
      <LinkButton text={'View More →'} path={`/offerings/training/categories/${category.slug}`} classes={'sm text-primary-500 outline'} />
    </div>
  )
}
