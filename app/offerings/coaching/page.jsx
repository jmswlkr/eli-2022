import React from 'react'
import { draftMode } from 'next/headers'

import { INTRO_DATA, ETHOS_DATA } from './coaching-data'
import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page-config'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { CoachingBlock } from './coaching-block'

import { container, intro, ethos } from './page.module.scss'
import { PageHero } from 'ui-components/page-hero/page-hero'


const LeadershipCoaching = async () => {
    const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })

  const heroContent = {
    heroHeaderLines: content.heroHeaderLines,
    heroImage: content.heroImage,
    heroButtonText: 'Get Started'
  }

  const introContent = [
    {
      heading: content.mainContent1Heading,
      paragraph: content.mainContent1Paragraph,
    }, 
    {
      heading: content.mainContent2Heading,
      paragraph: content.mainContent2Paragraph,
    }, 
  ]

  const coachingContent = [
    {
      heading: content.card1Heading,
      paragraph: content.card1Paragraph,
    },
    {
      heading: content.card2Heading,
      paragraph: content.card2Paragraph,
    },
    {
      heading: content.card3Heading,
      paragraph: content.card3Paragraph,
    },
    {
      heading: content.card4Heading,
      paragraph: content.card4Paragraph,
    },
    {
      heading: content.card5Heading,
      paragraph: content.card5Paragraph,
    },
  ]

  return (
    <>
      <PageHero  {...heroContent} />
      <div className={container}>
        <section className={intro}>
          {introContent.map(({ heading, paragraph }) => {
            return (
              <HeaderParagraph 
                key={heading}
                mainContentHeading={heading}
                mainContentParagraph={paragraph}
              />
            )
          })}
        </section>
        <section className={ethos}>
          {coachingContent.map(({ heading, paragraph }, idx) => {
            return (
              <CoachingBlock
                key={heading}
                idx={idx}
                title={heading}
                text={paragraph}
              />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default LeadershipCoaching