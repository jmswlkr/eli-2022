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

export const Intro = () => {

  

  return (
    <section className={intro} id='intro'>
      <SectionHeader title={'Learn to Thrive'} labelText={`LEARN TO THRIVE`} />
      <div className={cardContainer}>
        {cards.map((c) => {
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
