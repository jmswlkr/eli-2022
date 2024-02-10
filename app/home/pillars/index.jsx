'use client'

import { getPillarsDataFromContentfulProps } from './data-helper'

import { HeaderParagraph } from '@/ui-components'

import { PillarCard } from './_components/pillar-card'
import { PillarsBG } from './_components/pillar-bg'


export const PillarsSection = (props) => {
  const { title, subtitle, paragraph, pillars } =
    getPillarsDataFromContentfulProps(props)

  return (
    <section className='PILLARS_SECTION flex-center relative w-full h-auto border border-red-300'>
      <div className='PILLARS_CONTENT w-[var(--content-width)] py-xxl flex-col-center gap-xl relative z-50 h-auto text-white'>
        <div className='PILLARS_TEXT_BLOCK flex-col-center gap-lg relative z-50'>
          <h2 className='head-2'>{title}</h2>
          <h3 className='head-4'>{subtitle}</h3>
          <div className='DESCRIPTION text-center w-[var(--reading-content-width)]'>
            <HeaderParagraph mainContentParagraph={paragraph} />
          </div>
        </div>
        <div className='PILLARS_LIST gap-lg lg:gap-0 lg:grid-cols-4 md:grid-cols-2 grid w-full h-auto grid-cols-1'>
          {pillars.map((pillar, idx) => {
            return <PillarCard key={pillar.id} idx={idx} allPillars={pillars} {...pillar} />
          })}
        </div>
      </div>
      <PillarsBG />
    </section>
  )
}
