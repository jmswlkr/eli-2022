'use client'

import React from 'react'

import {
  container,
  hero,
  imgWrap,
  textWrap,
  heroText,
  header as headerStyle,
} from './page-hero.module.scss'
import Link from 'next/link'

export const PageHero = ({
  heroHeaderLines = [],
  heroSubtitle = '',
  image = '',
  heroImage = '',
  defaultImage = '',
  heroButtonText = 'Contact Us',
  buttonLink = '/#contact',
}) => {

  return (
    <section className={container}>
      <div className={hero}>
        <div className={textWrap}>
          <div className={heroText}>
            <h1 className={headerStyle}>
              {heroHeaderLines?.map((line, idx) => {
                return <span key={idx}>{line ?? ''}</span>
              })}
              {heroSubtitle && <span>{heroSubtitle}</span>}
            </h1>
            <Link href={buttonLink}>
              <button className='general-btn solid dark med'>
                {heroButtonText}
              </button>
            </Link>
          </div>
        </div>
        <div className={imgWrap}>
          <img
            src={heroImage?.fields?.file?.url ?? image?.url ?? defaultImage}
            alt={heroImage?.fields?.description ?? ''}
          />
        </div>
      </div>
    </section>
  )
}
