'use client'

import { ParagraphHeader } from 'ui-components/headings/paragraph-header'

export const CardList = ({ heading, list, CardComponent, content }) => {
  return (
    <section className='flex flex-col items-start justify-start gap-[25px]'>
      <ParagraphHeader heading={heading} />
      {list.map((event, idx) => {
        return <CardComponent key={idx} event={event} />
      })}
    </section>
  )
}
