// External lib
import React from 'react'

// Internal lib
import { baseUrl } from '@/utils/cloudinary';

// Components
import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn';

// Styling
import { hero, heroBg, shade, fadeTransitionBar, heroTextContent, title, blurb, heroBtn } from './hero.module.scss';



export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroBg}>
        <img src={baseUrl('sunlight-tree_ztqwxk', 'best')} alt='' />
        <div className={shade} />
        <div className={fadeTransitionBar} />
      </div>
      <div className={heroTextContent}>
        <h1 className={title}>
          <span>ELI</span>
          <span>About the Institute.</span>
        </h1>
        <p className={blurb}>
          Learn more about our history, our people, and the principles that
          drive us.
        </p>
        <span className={heroBtn}>
          <ArrowBtn lightText={true} arrowColor={'var(--accent)'} />
        </span>
      </div>
    </section>
  )
}
