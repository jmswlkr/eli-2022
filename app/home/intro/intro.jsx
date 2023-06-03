import Link from 'next/link'
import { Button } from 'ui-components/general-btn/general-btn'
import { SectionHeader } from 'ui-components/section-header'

import { cards } from './intro-data'

import {
  intro,
  cardContainer,
  imgWrap,
  card,
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
}) => {
  
  const contentfulCards = [
    {
      title: introCard1Text[0],
      text: introCard1Text[1],
      btnText: introCard1Text[2],
      imgSrc: `${introCard1Image.fields.file.url}?f=face&fit=fill`,
      path: '/founder',
    },
    {
      title: introCard2Text[0],
      text: introCard2Text[1],
      btnText: introCard2Text[2],
      imgSrc: introCard2Image.fields.file.url,
      path: '/about',
    },
    {
      title: introCard3Text[0],
      text: introCard3Text[1],
      btnText: introCard3Text[2],
      imgSrc: introCard3Image.fields.file.url,
      path: '/offerings',
    },
    {
      title: introCard4Text[0],
      text: introCard4Text[1],
      btnText: introCard4Text[2],
      imgSrc: introCard4Image.fields.file.url,
      path: '/calendar',
    },
  ]

  return (
    <section className={intro}>
      <span className='scroll-pad' id='intro' />
      <SectionHeader title={introTitle} labelText={introMarqueeText} />
      <div className={cardContainer}>
        {contentfulCards.map((c) => {
          return (
            <Link key={c.title} href={c.path}>
              <div className={card}>
                <div className={cardMain}>
                  <div className={imgWrap}>
                    <img src={c.imgSrc} alt={c.title} />
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
                <div className={cardBtn}>
                  <Button text={c.btnText} path={c.path} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
