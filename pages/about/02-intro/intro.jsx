// External lib
import React from 'react'

// Internal lib
import {
  aboutImages,
  aboutIntroText,
} from '@/data/about-data'

// Styling
import {
  intro,
  collage,
  collageImg,
  introTextContent,
  main as mainStyle,
  sub as subStyle,
  tenetList as tenetStyle,
  tenets,
  tenet,
  title,
  blurb,
} from './intro.module.scss'
import { baseUrl } from '@/utils/cloudinary'

export const Intro = () => {
  const { main, sub, tenetList } = aboutIntroText

  return (
    <section className={intro}>
      <div className={collage}>
        {aboutImages.map((abImg, idx) => {
          return (
            <span key={idx} className={collageImg}>
              <img
                src={baseUrl(abImg.urlFrag, 'eco')}
                alt={abImg.altTag}
              />
            </span>
          )
        })}
      </div>
      <div className={introTextContent}>
        <div className={mainStyle}>
          <h2 className={title}>{main.title}</h2>
          <p className={blurb}>{main.blurb}</p>
        </div>
        <div className={subStyle}>
          <h4 className={title}>{sub.title}</h4>
          <p className={blurb}>{sub.blurb}</p>
        </div>
        <div className={tenetStyle}>
          <h4 className={title}>{tenetList.title}</h4>
          <ul className={tenets}>
            {tenetList.tenets.map((tnt, idx) => {
              return <li key={idx} className={tenet}>{tnt}</li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
