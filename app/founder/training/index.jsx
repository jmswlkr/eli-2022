'use client'

import { SectionHeader } from 'ui-components/headings'

export const TrainingSection = ({ training: blocks }) => {
  function getBlocksByYear() {
    const years = {}
    blocks.forEach((block) => {
      const year = block.fields.yearAttained
      if (year in years) {
        years[year].push(block)
      } else {
        years[year] = [block]
      }
    })
    return years
  }

  const years = getBlocksByYear(blocks)

  return (
    <setction className='TRAINING_SECTION flex-col-tl gap-md w-full'>
      <SectionHeader title='My Training' />
      {Object.entries(years)
        .sort((a, b) => b[0] - a[0]) // sort by year
        .map((year) => {
          return <YearBlock key={year[0]} year={year[0]} blocks={year[1]} />
        })}
    </setction>
  )
}

function YearBlock({ year, blocks }) {
  return (
    <div className='YEAR_BLOCK bg-primary-100 flex-col-tl p-md w-full rounded-lg'>
      <span className='head-3 mb-ml font-display text-primary-500/30'>
        {year}
      </span>
      <span className='auto-rows-auto gap-md lg:grid-cols-2 grid w-full grid-cols-1'>
        {blocks.map((block) => {
          return <TrainingBlock key={block.sys.id} block={block.fields} />
        })}
      </span>
    </div>
  )
}

function TrainingBlock({ block }) {
  return (
    <div className='TRAINING_BLOCK pl-md border-l border-primary-500/50 text-primary-900 flex-col-tl gap-ms !justify-end'>
      <span className='meta-1'>{block.institutionName}</span>
      <span className='!font-bold'>{block.degreeMain}</span>
      <span className='font-body '>{block.fieldSecondary}</span>
    </div>
  )
}
