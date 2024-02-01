import React from 'react'

import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  content,
  words,
  header,
  paragraph,
  image,
} from './cta-section.module.scss'

const IMG_DEFAULTS = {
  url: 'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1654689213/ELI/lily_qzb4mr.jpg',
  alt: 'A lily floating on the surface of a pond.',
}

export const CtaSection = ({
  title = '',
  text = '',
  btnText = '',
  btnPath = '',
  ctaHeader,
  ctaBlurb,
  ctaButtonText,
  ctaLinkedPage,
}) => {
  return (
    <section className={container}>
      <div className={content}>
        <div className={words}>
          {title && text && btnText ? (
            <>
              <h3 className={header}>{title}</h3>
              <p className={paragraph}>{text}</p>
              <Button text={btnText} path={btnPath} classes='solid med' />
            </>
          ) : (
            <>
              <h3 className={header}>{ctaHeader}</h3>
              <p className={paragraph}>{ctaBlurb}</p>
              <Button
                text={ctaButtonText}
                path={ctaLinkedPage}
                classes='solid med'
              />
            </>
          )}
        </div>
        <div className={image}>
          <img src={IMG_DEFAULTS.url} alt={IMG_DEFAULTS.alt} />
        </div>
      </div>
    </section>
  )
}
