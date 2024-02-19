'use client'

import React from 'react'
import MD from 'react-markdown'

import {
  container,
  textWrap,
  intro as introStyle,
  paragraph,
  inline
} from './intro.module.scss'
import { HeaderParagraph } from '@/ui-components'

export const Intro = ({
  mainContent,
  mainContentParagraph1,
  mainContentParagraph2,
  mainContentParagraph3,
  mainContentParagraph4
}) => {
  const intro = [
    mainContentParagraph1,
    mainContentParagraph2,
    mainContentParagraph3,
    mainContentParagraph4
  ]

  return (
    <div className='READABLE_WRAP flex-col-center'>
      <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-xxl'>
        <div className='MAIN_CONTENT flex-col-tl gap-lg'>
          {mainContent.map((block) => {
            return (
              <HeaderParagraph
                key={block.sys.id}
                mainContentHeading={block.fields?.heading}
                mainContentParagraph={block.fields.paragraph}
                classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
