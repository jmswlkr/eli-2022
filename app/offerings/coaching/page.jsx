import React from 'react'
import { draftMode } from 'next/headers'

import { useContentful } from '@/utils'
import { PAGE_CONFIG } from './page-config'

import { HeaderParagraph } from '@/ui-components'
import { CoachingBlock } from './coaching-block'

import { container, welcome, intro, ethos } from './page.module.scss'
import { CtaSection } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'


const LeadershipCoaching = async () => {
    const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })

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
      <HeroSecondary {...content.hero.fields}/>
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
      <CtaSection 
        title='Ready to get started?'
        text='Get in touch with us today to learn more about our offerings.'
        btnText='Get Started'
        btnPath='#'
        imageUrl='/talk-lg.jpg'
        imageAlt='People meeting in an office lobby'
        ctaHeader={'Ready to get started?'}
        ctaButtonText={'Get Started'}
        ctaLinkedPage={'/contact'}
      />
    </>
  )
}

export default LeadershipCoaching