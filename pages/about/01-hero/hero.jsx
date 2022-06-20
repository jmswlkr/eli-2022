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
        <img
          src={baseUrl('hiker-sunset_haniya', 'best')}
          alt=''
        />
        <div className={shade} />
        <div className={fadeTransitionBar} />
      </div>
      <div className={heroTextContent}>
        <h1 className={title}>
          About section title phrase that’s longish.
        </h1>
        <p className={blurb}>
          Nulla in interdum dui, in vehicula nibh. Donec
          vestibulum nulla arcu, bibendum faucibus quam
          sollicitudin eu.
        </p>
        <span className={heroBtn}>
          <ArrowBtn>Learn More</ArrowBtn>
        </span>
      </div>
    </section>
  )
}
