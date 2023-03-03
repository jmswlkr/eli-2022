import React from 'react'

import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  words,
  header,
  content,
  image,
} from './cta-section.module.scss'

export const CtaSection = ({
  title,
  text,
  btnText,
  btnPath,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className={container}>
      <div className={words}>
        <h3 className={header}>{title}</h3>
        <p className={content}>{text}</p>
        <Button text={btnText} path={btnPath} classes='solid med' />
      </div>
      <div className={image}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  )
}
