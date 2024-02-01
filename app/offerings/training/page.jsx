import React from 'react'
import { draftMode } from 'next/headers'

import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page-config'
import { PLACEHOLDER_DATA } from './placeholder-data'

import { CtaSection } from 'ui-components/cta-section/cta-section'
import { PageHero } from 'ui-components/page-hero/page-hero'
import { HeaderParagraphList } from 'ui-components/header-paragraph/header-paragraph-list'
import { TrainingCard } from '../_components/training-card'

const { hero, cta } = PLACEHOLDER_DATA

const TrainingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })


  return (
    <>
      <PageHero {...content} />
      <HeaderParagraphList paragraphs={content.mainContentParagraphs} />
      {content.eventsMostRecent.map((event) => (
        <TrainingCard key={event.sys.id} event={event.fields} />
      ))}
      <CtaSection {...cta} />
    </>
  )
}

export default TrainingPage
