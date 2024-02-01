import React from 'react'
import { ParagraphHeader } from 'ui-components/headings/paragraph-header'

export const CardList = ({ heading, list }) => {
  return (
    <section className='flex flex-col items-start justify-start gap-[25px]'>
      <ParagraphHeader />
      {list.map}
    </section>
  )
}
