'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { HeaderParagraph, ChevronIcon } from '@/ui-components'
import { blurFadeIn, phases } from '@/animation'

export function PillarsModal({ allPillars, idx = 0 }) {
  const [curIdx, setCurIdx] = useState(idx)

  const { icon, title, text } = allPillars[curIdx]

  const handleCyclePillars = (direction) => {
    if (direction === 'next') {
      if (curIdx < allPillars.length - 1) {
        setCurIdx((prvIdx) => prvIdx + 1)
      } else {
        setCurIdx(0)
      }
    }
    if (direction === 'prev') {
      if (curIdx > 0) {
        setCurIdx((prvIdx) => prvIdx - 1)
      } else {
        setCurIdx(allPillars.length - 1)
      }
    }
  }

  return (
    <motion.div
      {...phases}
      {...blurFadeIn}
      className='PILLARS_MODAL full flex-center relative'
    >
      <div className='MODAL_CONTENT flex-col-center gap-lg'>
        <div className='ICON text-accent-300'>{icon}</div>
        <h2 className='TITLE head-2 max-w-4/5 flex-col-center gap-md lg:!flex-row text-white'>{title}</h2>
        <div className='DIVIDER bg-accent-300 w-8 h-1' />
        <div className='TEXT w-2/3 lg:w-[var(--reading-content-width)] text-center text-white'>
          <HeaderParagraph mainContentParagraph={text} />
        </div>
      </div>
      <div className='NAVIGATION text-white !top-[90%] lg:!top-[50%] absolute-center flex-center !justify-between w-4/5'>
        <button
          className='PREV hover:text-accent-300 cursor-pointer scale-x-[-1]'
          onClick={() => handleCyclePillars('prev')}
        >
          <ChevronIcon />
        </button>
        <button
          className='NEXT hover:text-accent-300 cursor-pointer'
          onClick={() => handleCyclePillars('next')}
        >
          <ChevronIcon />
        </button>
      </div>
    </motion.div>
  )
}
