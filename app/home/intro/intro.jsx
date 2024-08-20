import Link from 'next/link'
import { ReactNode } from 'react'

import {
  ContentfulImageBlock,
  HeaderParagraph,
  SectionHeader
} from '@/ui-components'

import {
  intro,
  cardContainer,
  imgWrap,
  card as cardStyle,
  cardMain,
  cardBtn
} from './intro.module.scss'

export const Intro = ({
  introTitle,
  introMarqueeText,
  introCard1Image,
  introCard1Text,
  introCard2Image,
  introCard2Text,
  introCard3Image,
  introCard3Text,
  introCard4Image,
  introCard4Text,
  ...content
}) => {
  return (
    <section className={intro}>
      <span className='scroll-pad' id='intro' />
      <IntroHeader title={introTitle} />
      <div className={cardContainer}>
        {content.introContent.map((card) => {
          return (
            <IntroCard key={card.sys.id} card={card.fields} />
          )
        })}
      </div>
    </section>
  )
}

function IntroHeader({ title }) {
  return (
    <div className='flex-col-center bg-primary-500/10 gap-md pt-lg pb-md relative w-screen border-t border-b'>
      <p className='text-primary-500  uppercase tracking-[4px] mb-md'>
        Welcome to ELI
      </p>
      <SectionHeader
        title={title}
        classes={{ title: 'head-2 !items-center font-bold' }}
      />
    </div>
  )
}

function IntroCard({ card }) {
  return (
    <Link href={card.buttonLink}>
      <div className={cardStyle}>
        <div className={cardMain}>
          <div className={imgWrap}>
            <ContentfulImageBlock contentfulImage={card.image} />
          </div>
          <h4>{card.heading}</h4>
          <HeaderParagraph
            mainContentParagraph={card.paragraph}
          />
        </div>
        <div className={cardBtn}>
          {card.buttonText && card.buttonLink && (
            <button className='general-btn solid sm'>
              {card.buttonText}
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}
