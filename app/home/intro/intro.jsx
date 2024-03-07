import Link from 'next/link'
import { Button, ContentfulImageBlock, HeaderParagraph, TestComponent } from '@/ui-components'
import { SectionHeader } from '@/ui-components'

import { cards } from './intro-data'

import {
  intro,
  cardContainer,
  imgWrap,
  card as cardStyle,
  cardMain,
  cardBtn,
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
      <SectionHeader title={introTitle} labelText={introMarqueeText} />
      <div className={cardContainer}>
        {content.introContent.map(card => {
          return <IntroCard key={card.sys.id} card={card.fields}/>
        })}
      </div>
    </section>
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
          <HeaderParagraph mainContentParagraph={card.paragraph} />
        </div>
        <div className={cardBtn}>
          <Button text={card.buttonText} path={card.buttonLink} classes='outline' />
        </div>
      </div>
    </Link>
  )
}