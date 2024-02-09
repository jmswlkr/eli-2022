import React from 'react'
import { HeaderParagraph } from '@/ui-components'

import {
  container,
  block,
  light,
  dark,
} from './story.module.scss'

export const Story = ({
  storySection1Title,
  storySection1Content,
  storySection2Title,
  storySection2Content,
}) => {

  return (
    <section className={container}>
      <div className={`${block} ${light}`}>
        <HeaderParagraph
          mainContentHeading={storySection1Title}
          mainContentParagraph={storySection1Content}
        />
      </div>
      <div className={`${block} ${dark}`}>
        <HeaderParagraph
          mainContentHeading={storySection2Title}
          mainContentParagraph={storySection2Content}
        />
      </div>
    </section>
  )
}
