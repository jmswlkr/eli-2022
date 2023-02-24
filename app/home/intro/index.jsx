import { useEffect, useState } from 'react'

import { Button } from 'ui-components/general-btn/general-btn'
import { SectionHeader } from 'ui-components/section-header'

import { cards } from './intro-data'

import {
  intro,
  titleContainer,
  titleInner,
  cardContainer,
  imgWrap,
  card,
  cardBtn,
} from './intro.module.scss'

export const Intro = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    const titleContent = (
      <div className={titleContainer}>
        <div className={titleInner}>
          Learn to <strong>Thrive</strong>
          {/* <span className='gradient-text'>Transformational</span> change
          through Embodied Learning */}
        </div>
      </div>
    )
    setTitle(titleContent)
  }, [isMobile])

  return (
    <section className={intro} id='intro'>
      <SectionHeader title={title} labelText={`ELI Offerings`} />
      <div className={cardContainer}>
        {cards.map((c) => {
          return (
            <div key={c.title} className={card}>
              <div className={imgWrap}>
                {/* <img src={baseUrl(c.imgSrc)} alt={c.title} /> */}
                <img src={c.imgSrc} alt={c.title} />
              </div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <div className={cardBtn}>
                <Button text={c.btnText} path={c.path} />
              </div>
              {/* <ArrowBtn text={c.btnText} btnAction={() => push(`${c.path}`)} /> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}
