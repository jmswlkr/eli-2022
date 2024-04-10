'use client'

import { ContentfulImageBlock, LinkButton } from '@/ui-components'

export const TrainingCategoryCard = ({ category }) => {
  return (
    <div className='flex-col-center px-md py-lg rounded-xl gap-md bg-primary-500/10 h-auto'>
      <span className='h-[75px] aspect-square relative'>
        <ContentfulImageBlock contentfulImage={category.icon} classes='!object-contain'/>
      </span>
      <h3 className='HEADING head-3 text-primary-500 text-center'>
        {category.categoryTitle}
      </h3>
      <p className='PARAGRAPH text-center'>{category.blurbDescription}</p>
      <LinkButton text={'View More →'} path={`/offerings/training/categories/${category.slug}`} classes={'sm text-primary-500 outline'} />
    </div>
  )
}
