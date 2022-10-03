import React from 'react'
import { motion } from 'framer-motion'

import { animationProps } from 'animation/animate'
import { baseUrl } from '@/utils/cloudinary'

import { SectionHeader } from '@/elements/section-header'

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
} from './detail-page.module.scss'

const DetailPage = ({ imageData, textData }) => {
  const { main, sub, tenetList } = textData

  return (
    <section className={intro} >
      <div className={collage}>
        {imageData.slice(1).map((colImg, idx) => {
          return (
            <motion.span
              key={idx}
              className={collageImg}
              {...animationProps({ dur: 1.5 })}
            >
              <img src={baseUrl(colImg.urlFrag, 'eco')} alt={colImg.altTag} />
            </motion.span>
          )
        })}
      </div>
      <div className={introTextContent}>
        <div className={mainStyle}>
          <SectionHeader title={main.title} labelText={main.label} withLabel={true} />
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
              return (
                <li key={idx} className={tenet}>
                  {tnt}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DetailPage


